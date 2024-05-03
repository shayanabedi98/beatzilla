import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import spinningZilla from "@/assets/zillaNoBG.png";

type Props = {
  title: string;
  songCover: string;
  audioFile: string;
  handleClick: (str: string, songCover: string, title: string) => void;
  genre: string[];
  bpm: number;
  playingFile: string;
};

export default function BeatsListItem({
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
      <Image className="grayscale object-cover w-[100px] h-[100px]" width={100} height={100} src={songCover} alt="" />
      <div className="grid w-2/3 grid-cols-3 place-items-center">
        <p className="flex items-center gap-3 place-self-start text-2xl">
          {title}
          {audioFile === playingFile && (
            <div>
              <Image
                className="spinning-zilla w-8 rounded-full border-4  p-1"
                src={spinningZilla}
                alt=""
              />
            </div>
          )}
        </p>
        <p>{bpm} bpm</p>
        <div>
          {genre.map((i, index) => (
            <p key={index}>{i}</p>
          ))}
        </div>
      </div>
      <div className="cursor-pointer text-3xl">
        <FaRegPlayCircle
          onClick={() => handleClick(audioFile, title, songCover)}
        />
      </div>
    </div>
  );
}