"use client";

import Image from "next/image";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { BsFillRewindFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

type Props = {
  title: string;
  songCover: string;
  audioFile: string;
  closeAudioPlayer: () => void;
  emptyFile: boolean;
};

export default function AudioPlayer({
  title,
  songCover,
  audioFile,
  closeAudioPlayer,
  emptyFile,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState<undefined | number>(0);
  const [songVolume, setSongVolume] = useState<number>(0.3);
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = songVolume;
      audioRef.current?.addEventListener("timeupdate", () => {
        setSongTime(Number(audioRef.current?.currentTime));
      });
      if (seconds == 60) {
        setSeconds(0);
        setMinute((prev) => {
          return prev + 1;
        });
      }
      setSeconds(Number(audioRef.current.currentTime.toFixed(0)));

      audioRef.current.addEventListener("play", () => {
        setIsPlaying(false);
      });
    }
  }, [songVolume, seconds, songTime, minute]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value) / 100;
    setSongVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const changeTime = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const rewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const forward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 5;
    }
  };

  return (
    <div className="audio-player grid w-full grid-cols-3 place-items-center gap-44 bg-base-100 p-4 text-primary">
      <div className="flex w-[55%] items-center gap-3">
        <Image
          className="border-[2px] border-secondary shadow-lg"
          width={75}
          height={75}
          src={songCover}
          alt=""
        />
        <span className="text-xl">{title}</span>
      </div>
      <audio
        ref={audioRef}
        src={audioFile}
        autoPlay
        onEnded={() => {
          setIsPlaying(true);
        }}
      >
        Your Browser does not support this audio format.
      </audio>
      <div className="relative flex flex-col gap-1">
        <div className="flex items-center justify-center gap-4">
          <button className="text-lg" onClick={rewind}>
            <BsFillRewindFill />
          </button>
          <button className="text-3xl" onClick={toggleAudio}>
            {!isPlaying && emptyFile ? (
              <FaRegStopCircle />
            ) : (
              <FaRegPlayCircle />
            )}
          </button>
          <button className="rotate-180 text-lg" onClick={forward}>
            <BsFillRewindFill />
          </button>
        </div>
        <div className="flex">
          <p className="w-14 text-center">
            {minute}:{seconds < 10 && "0"}
            {seconds}
          </p>
          <input
            name="time"
            value={songTime}
            type="range"
            min="0"
            max={audioRef.current ? audioRef.current.duration : ""}
            onChange={changeTime}
          />
          <p className="w-14 text-center">
            {audioRef.current?.duration
              ? Number(audioRef.current?.duration.toFixed(0)) < 60 && 0
              : 0}
            :
            {audioRef.current?.duration
              ? audioRef.current?.duration.toFixed(0)
              : "00"}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <label
          htmlFor="volume"
          className="cursor-pointer"
          onClick={() => setSongVolume(0)}
        >
          {songVolume > 0 ? <FaVolumeDown /> : <FaVolumeMute />}
        </label>
        <input
          name="volume"
          value={songVolume * 100}
          type="range"
          min="0"
          max="100"
          onChange={changeVolume}
        />
      </div>
      <div className="absolute right-3 top-3 cursor-pointer text-2xl">
        <IoMdClose onClick={closeAudioPlayer} />
      </div>
    </div>
  );
}
