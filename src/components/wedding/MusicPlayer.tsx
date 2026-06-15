import { useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingAudio from "../../Seetha Kalyanam - SenSongsMp3.Co.mp3";

const AUDIO_URLS = [weddingAudio];

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      audio.load();
      await audio.play();
      setPlaying(true);
      setError(false);
    } catch {
      setPlaying(false);
      setError(true);
    }
  };

  const handleSourceError = () => {
    const nextIndex = sourceIndex + 1;
    if (nextIndex < AUDIO_URLS.length) {
      setSourceIndex(nextIndex);
      setError(false);
      setPlaying(false);
      return;
    }

    setError(true);
    setPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        key={AUDIO_URLS[sourceIndex]}
        preload="auto"
        loop
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onError={handleSourceError}
      >
        <source src={AUDIO_URLS[sourceIndex]} type="audio/mpeg" />
      </audio>
      <Button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 h-12 rounded-full bg-[color:var(--maroon)] px-4 text-white shadow-[0_12px_30px_-12px_rgba(127,29,29,0.75)] hover:bg-[color:var(--maroon)]/90"
        aria-pressed={playing}
        aria-label={playing ? "Pause wedding music" : "Play wedding music"}
      >
        {playing ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
        <Music2 className="mr-2 h-4 w-4 opacity-80" />
        {error ? "Audio unavailable" : playing ? "Pause Music" : "Play Music"}
      </Button>
    </>
  );
}
