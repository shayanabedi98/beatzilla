"use client";

import FeaturedBeatsItems from "./FeaturedBeatsItem";
import { featuredBeats } from "../universal/featuredBeatsList";
import { useState } from "react";
import AudioPlayer from "../universal/AudioPlayer";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedBeats() {
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [songCover, setSongCover] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  const handleAudio = (audio: string, title: string, cover: string) => {
    setAudioFile(audio);
    setSongCover(cover);
    setTitle(title);
  };

  const closeAudioPlayer = () => {
    setAudioFile(null);
    setSongCover(null);
    setTitle(null);
  };

  return (
    <div className="container mx-auto w-1/2">
      <h2 className="container-header">Featured Beats</h2>
      <h3 className="mb-10 text-center text-2xl">
        Listen to a carefully curated list of instrumentals produced by{" "}
        <span className="font-bold">Shayan Abedi</span>, which rely heavily on
        the sound of Hip Hop.
      </h3>
      <div className="flex w-full flex-col items-center justify-center rounded-md bg-secondary shadow-lg">
        {featuredBeats.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "w-full bg-base-100 px-8 py-4 shadow-lg"
                : "w-full bg-secondary px-8 py-4"
            }
          >
            <FeaturedBeatsItems
              handleClick={handleAudio}
              title={item.title}
              audioFile={item.path}
              songCover={item.cover}
              bpm={item.bpm}
              genre={item.genre}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {audioFile && songCover && title && (
          <motion.div className="fixed z-10" initial={{bottom: -300, left: 0}} animate={{bottom:0}} exit={{bottom: -300}}>
            <AudioPlayer
              title={title}
              songCover={songCover}
              audioFile={audioFile}
              closeAudioPlayer={closeAudioPlayer}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
