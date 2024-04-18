import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";

type Props = {
  title: string;
  songCover: string;
  audioFile: string;
  handleClick: (str: string, songCover: string, title: string) => void;
};

export default function FeaturedBeatsItems({
  songCover,
  title,
  handleClick,
  audioFile,
}: Props) {
  return (
    <div>
      <Image width={100} height={100} src={songCover} alt="" />
      <p>{title}</p>
      <div>
        <FaRegPlayCircle onClick={() => handleClick(audioFile, title, songCover)} />
      </div>
    </div>
  );
}
