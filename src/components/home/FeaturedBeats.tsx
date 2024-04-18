"use client";

import FeaturedBeatsItems from "./FeaturedBeatsItem";
import { beats } from "../universal/beatsList";
import { useState } from "react";
import AudioPlayer from "../universal/AudioPlayer";

export default function FeaturedBeats() {
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [songCover, setSongCover] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  const handleAudio = (audio: string, title: string, cover: string) => {
    setAudioFile(audio);
    setSongCover(cover);
    setTitle(title);
  };

  return (
    <div className="my-44 flex flex-col items-center">
      <h2 className="text-4xl font-semibold">Featured Beats</h2>
      <div className="mt-20 flex items-center justify-center gap-10">
        <FeaturedBeatsItems
          handleClick={handleAudio}
          title={beats[1].title}
          audioFile={beats[1].path}
          songCover={beats[1].cover}
        />
        <FeaturedBeatsItems
          handleClick={handleAudio}
          title={beats[4].title}
          audioFile={beats[4].path}
          songCover={beats[4].cover}
        />
        <FeaturedBeatsItems
          handleClick={handleAudio}
          title={beats[6].title}
          audioFile={beats[6].path}
          songCover={beats[6].cover}
        />
      </div>
      {audioFile && songCover && title && (
        <AudioPlayer
          title={title}
          songCover={songCover}
          audioFile={audioFile}
        />
      )}
    </div>
  );
}
