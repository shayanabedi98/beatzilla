"use client";

import FeaturedBeatsItems from "./FeaturedBeatsItem";
import { featuredBeats } from "./featuredBeatsList";
import { useState } from "react";
import AudioPlayer from "../universal/AudioPlayer";
import FeaturedAudioPlayer from "./FeaturedAudioPlayer";
// import { motion, AnimatePresence } from "framer-motion";
// import defaultCover from "@/../public/cover/default.png";

export default function FeaturedBeats() {
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [songCover, setSongCover] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [playingFile, setPlayingFile] = useState("") 

  const handleAudio = (audio: string, title: string, cover: string) => {
    setAudioFile(audio);
    setSongCover(cover);
    setTitle(title);
    setPlayingFile(audio)
  };

  const closeAudioPlayer = () => {
    setAudioFile(null);
    setSongCover(null);
    setTitle(null);
  };

  return (
    <div className="container w-[95%] lg:w-2/3">
      <h2 className="container-header">Featured Beats</h2>
      <h3 className="mb-10 text-center text-2xl">
        Listen to a carefully curated list of instrumentals produced by{" "}
        <span className="font-bold">Shayan Abedi</span>, which rely heavily on
        the sound of Hip Hop.
      </h3>
      <div className="flex flex-col items-center justify-center rounded-md bg-secondary shadow-lg">
        {featuredBeats.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "w-full bg-base-100 px-2 lg:px-8 py-4 shadow-lg"
                : "w-full bg-secondary px-2 lg:px-8 py-4"
            }
          >
            <FeaturedBeatsItems
              handleClick={handleAudio}
              title={item.title}
              audioFile={item.path}
              songCover={item.cover}
              bpm={item.bpm}
              genre={item.genre}
              playingFile={playingFile}
            />
          </div>
        ))}
      </div>
      {audioFile && songCover && title ? (
        <div className="w-full mt-10">
          <FeaturedAudioPlayer
            title={title}
            songCover={songCover}
            audioFile={audioFile}
            closeAudioPlayer={closeAudioPlayer}
            emptyFile={false}
          />
        </div>
      ) : (
        <div className="mt-10">
          <FeaturedAudioPlayer
            title="Pick a beat"
            songCover="/cover/default.png"
            audioFile=""
            closeAudioPlayer={closeAudioPlayer}
            emptyFile={true}
          />
        </div>
      )}
    </div>
  );
}
