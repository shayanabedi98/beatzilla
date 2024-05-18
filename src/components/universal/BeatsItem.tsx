import Image from "next/image";
import spinningZilla from "@/assets/zillaNoBG.png";
import { IoPlay } from "react-icons/io5";

type Props = {
  title: string;
  songCover: string;
  audioFile: string;
  handleClick: (str: string, songCover: string, title: string) => void;
  genre: string[];
  bpm: number;
  playingFile: string;
};

export default function BeatsItems({
  songCover,
  title,
  handleClick,
  audioFile,
  bpm,
  genre,
  playingFile,
}: Props) {
  return (
    <div className="flex w-full items-center justify-between text-primary">
      <Image
        width={100}
        height={100}
        src={songCover}
        className="w-16 h-16 object-cover md:w-24 md:h-24 grayscale"
        alt=""
      />
      <div className="grid w-2/3 grid-cols-2 place-items-center sm:grid-cols-3">
        <p className="flex items-center gap-3 text-lg max-md:text-center sm:place-self-start lg:text-2xl">
          {title}
        </p>
        <p className="max-sm:hidden">{bpm} bpm</p>
        <div>
          {genre.map((i, index) => {
            let displayGenre;
            if (i === "hipHop") {
              displayGenre = "Hip Hop";
            } else if (i === "pop") {
              displayGenre = "Pop";
            } else if (i === "edm") {
              displayGenre = "EDM";
            } else {
              displayGenre = i;
            }
            return <p key={index}>{displayGenre}</p>;
          })}
        </div>
      </div>
      {audioFile === playingFile ? (
        <div>
          <Image
            className="spinning-zilla w-8 rounded-full border-2 p-[5px]"
            src={spinningZilla}
            alt=""
          />
        </div>
      ) : (
        <div className="flex cursor-pointer items-center justify-center rounded-full border-2 p-[5px] text-lg">
          <IoPlay onClick={() => handleClick(audioFile, title, songCover)} />
        </div>
      )}
    </div>
  );
}
