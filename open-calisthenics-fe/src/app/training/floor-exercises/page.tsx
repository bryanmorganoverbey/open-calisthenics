import Link from "next/link";
import Image from "next/image";

import BicycleKicks from "../../../../public/Bicycle_kicks.jpeg";
import FloorSprints from "../../../../public/floor-sprints.jpeg";

export default function Floor() {
  return (
    <main>
      <h2>Floor Exercises</h2>
      <div className="card inline-block">
        <Link href="/training/floor-exercises/bicycle-crunches">
          <Image
            className="float-left p-2"
            src={BicycleKicks}
            alt="bicycle kick floor exercise"
            width={120}
            height={120}
          ></Image>
          <p className="p-3">
            Bicyle kicks are a great ab workout. Start by lying on the floor
            with your knees bent toward your chest and repeatedly extend one leg
            and the other out while bringing your opposite elbow to the closer
            knee.
          </p>
        </Link>
      </div>
      <div className="card inline-block">
        <Link href="/training/floor-exercises/floor-sprints">
          <Image
            className="float-left p-2"
            src={FloorSprints}
            alt="floor sprints floor exercise"
            width={120}
            height={120}
          ></Image>
          <p className="p-3">
            Floor sprints are a good ab and cardio combination. They really get
            your heart pumping, and are an intense excercise to throw into your
            mix.
          </p>
        </Link>
      </div>
    </main>
  );
}
