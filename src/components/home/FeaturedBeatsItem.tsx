import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";

type Props = {
  title: string;
  songCover: string;
  audioFile: string;
  handleClick: (str: string, songCover: string, title: string) => void;
  genre: string[];
  bpm: number;
};

export default function FeaturedBeatsItems({
  songCover,
  title,
  handleClick,
  audioFile,
  bpm,
  genre,
}: Props) {
  return (
    <div className="flex w-full items-center justify-between text-primary">
      <Image width={100} height={100} src={songCover} alt="" />
      <div className="grid grid-cols-3 place-items-center w-2/3">
        <p className="text-2xl place-self-start">{title}</p>
        <p>{bpm} bpm</p>
        <div>
          {genre.map((i, index) => (
            <p key={index}>{i}</p>
          ))}
        </div>
      </div>
      <div className="text-3xl cursor-pointer">
        <FaRegPlayCircle
          onClick={() => handleClick(audioFile, title, songCover)}
        />
      </div>
    </div>
  );
}
