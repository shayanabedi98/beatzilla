import FeaturedBeatsItem from "./FeaturedBeatsItem";
import { beats } from "../universal/beatsList"

export default function FeaturedBeats() {

  return (
    <div className="mt-44 flex flex-col items-center">
      <h2 className="text-4xl font-semibold">Featured Beats</h2>
      <div className="mt-20 flex justify-center items-center gap-10">
        <FeaturedBeatsItem title="Beat 1" audio={beats[4].path} />
        <FeaturedBeatsItem title="Beat 2" audio={beats[6].path}  />
        <FeaturedBeatsItem title="Beat 3" audio={beats[1].path}  />
      </div>
    </div>
  );
}