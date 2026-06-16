import http from "node:http";

const port = Number(process.env.PORT || 3000);

async function loadServer() {
  const module = await import("./dist/server/server.js");
  return module.default ?? module;
}

function toHeaders(headers) {
  const result = new Headers();
  for (const [key, value] of headers.entries()) {
    result.set(key, value);
  }
  return result;
}

function getRequestBody(req) {
  if (req.method === "GET" || req.method === "HEAD") {
    return undefined;
  }

  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function handleRequest(req, res, server) {
  const protocol = process.env.RENDER_EXTERNAL_URL?.startsWith("https://") ? "https" : "http";
  const host = req.headers.host || `localhost:${port}`;
  const url = new URL(req.url || "/", `${protocol}://${host}`);
  const body = await getRequestBody(req);

  const request = new Request(url, {
    method: req.method,
    headers: toHeaders(new Headers(req.headers)),
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

  const arrayBuffer = await response.arrayBuffer();
  res.end(Buffer.from(arrayBuffer));
}

async function main() {
  const server = await loadServer();

  const httpServer = http.createServer((req, res) => {
    handleRequest(req, res, server).catch(async (error) => {
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
