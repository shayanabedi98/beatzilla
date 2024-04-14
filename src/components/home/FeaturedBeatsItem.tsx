import Image from "next/image";
import audioBg from "@/../public/audio/audiobg.png"

type Props = {
    title: string
    audio: string
}

export default function FeaturedBeatsItem({ title, audio }: Props) {
    return (
        <div className="flex flex-col items-center gap-4 text-primary bg-secondary rounded-lg p-4">
            <Image className="w-24" src={audioBg} alt=""/>
            <h3 className="text-3xl">{title}</h3>
            <audio className="w-56" controls src={audio}>Your browser does not support this audio format</audio>
        </div>
    )
}