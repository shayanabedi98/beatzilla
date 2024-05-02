import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  bannerImage: StaticImageData;
  heading: string;
  buttonPresent: boolean;
  buttonPath: string;
  buttonContent: string;
  uniqueClassName: string
};

export default function Banner({
  bannerImage,
  heading,
  buttonPresent,
  buttonContent,
  buttonPath,
  uniqueClassName
}: Props) {
  return (
    <header className="relative flex flex-col items-center justify-center">
      <Image
        className={`h-[900px] w-full object-cover grayscale ${uniqueClassName}`}
        priority
        src={bannerImage}
        alt=""
        width={1980}
        height={1080}
      />
      <div className="absolute flex flex-col items-center gap-32">
        <h1 className="text-6xl font-bold text-primary">{heading}</h1>
        {buttonPresent && (
          <Link href={buttonPath}>
            <button className="call-to-action">{buttonContent}</button>
          </Link>
        )}
      </div>
    </header>
  );
}
