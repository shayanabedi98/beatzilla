"use client";

import Link from "next/link";
import AudioPlayer from "../universal/AudioPlayer";
import { beats } from "./beats";
import BeatsListItem from "./BeatsListItem";
import { useState } from "react";

export default function BeatsList() {
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [songCover, setSongCover] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [playingFile, setPlayingFile] = useState("");

  const handleAudio = (audio: string, title: string, cover: string) => {
    setAudioFile(audio);
    setSongCover(cover);
    setTitle(title);
    setPlayingFile(audio);
  };

  const closeAudioPlayer = () => {
    setAudioFile(null);
    setSongCover(null);
    setTitle(null);
  };

  return (
    <div>
      <div className="container mx-auto w-2/3">
        <h2 className="container-header">Beats</h2>
        <h3 className="mb-10 text-center text-2xl">
          Enjoy a list of instrumental samples with a mix of Hip Hop, EDM, and
          Alternative Pop. You will hear influences from Wu-Tang Clan, The
          Weeknd, Daft Punk, and more. Downloads will not be available and if
          you&apos;re interested in collaborating with the producer, feel free
          to contact them in the{" "}
          <Link className="font-bold" href="/contact">
            Contact
          </Link>{" "}
          page.
        </h3>
        <div className="flex w-full flex-col items-center justify-center rounded-md bg-secondary shadow-lg">
          {beats.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "w-full bg-base-100 px-8 py-4 shadow-lg"
                  : "w-full bg-secondary px-8 py-4"
              }
            >
              <BeatsListItem
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
          <div className="fixed bottom-0 z-10">
            <AudioPlayer
              title={title}
              songCover={songCover}
              audioFile={audioFile}
              closeAudioPlayer={closeAudioPlayer}
              emptyFile={true}
            />
          </div>
        ) : (
          <div className="fixed bottom-0 z-10">
            <AudioPlayer
              title="Pick a beat"
              songCover="/cover/default.png"
              audioFile=""
              closeAudioPlayer={closeAudioPlayer}
              emptyFile={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
