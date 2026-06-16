import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 3000);
const rootDir = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(rootDir, "dist", "client");
const serverPath = path.join(rootDir, "dist", "server", "server.js");

async function loadServer() {
  const module = await import(serverPath);
  return module.default ?? module;
}

function getContentType(filePath) {
  if (filePath.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".json")) return "application/json; charset=utf-8";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  if (filePath.endsWith(".webp")) return "image/webp";
  if (filePath.endsWith(".ico")) return "image/x-icon";
  if (filePath.endsWith(".mp3")) return "audio/mpeg";
  if (filePath.endsWith(".pdf")) return "application/pdf";
  return "application/octet-stream";
}

function getRequestBody(req) {
  if (req.method === "GET" || req.method === "HEAD") return undefined;

  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function serveStaticAsset(url) {
  if (!url.pathname.startsWith("/assets/")) return null;

  const filePath = path.join(clientDir, url.pathname);
  try {
    const data = await readFile(filePath);
    return new Response(data, {
      status: 200,
      headers: {
        "content-type": getContentType(filePath),
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return null;
  }
}

async function handleRequest(req, res, server) {
  const protocol = process.env.RENDER_EXTERNAL_URL?.startsWith("https://") ? "https" : "http";
  const host = req.headers.host || `localhost:${port}`;
  const url = new URL(req.url || "/", `${protocol}://${host}`);

  const staticResponse = await serveStaticAsset(url);
  if (staticResponse) {
    res.statusCode = staticResponse.status;
    staticResponse.headers.forEach((value, key) => res.setHeader(key, value));
    res.end(Buffer.from(await staticResponse.arrayBuffer()));
    return;
  }

  const body = await getRequestBody(req);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body,
  });

  const response = await server.fetch(request, globalThis, undefined);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  res.end(Buffer.from(await response.arrayBuffer()));
}

async function main() {
  const server = await loadServer();

  const httpServer = http.createServer((req, res) => {
    handleRequest(req, res, server).catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Internal Server Error");
    });
  });

  httpServer.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
