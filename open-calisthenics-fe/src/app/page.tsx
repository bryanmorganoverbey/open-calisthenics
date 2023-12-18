import PhotoOfWomanDoingCalisthenics from "../../public/woman_doing_exercies.png";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <h2>Open Calisthenics</h2>
      <p>
        Open Calisthenics is a free resource of various calistenics excercises
        you can do with minumal or no gym equipment. We do recommend you have
        some sort of yoga mat or carpet, but no gym, gym fees, or crazy
        equipment is needed to be healthy!
      </p>
      <div className="card">
        <Image
          src={PhotoOfWomanDoingCalisthenics}
          alt="woman doing floor exercises"
          width={1000}
          placeholder="blur"
        ></Image>
      </div>
    </main>
  );
}
