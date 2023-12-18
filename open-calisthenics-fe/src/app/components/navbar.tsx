import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/training">Training</Link>
      <Link href="/training/floor-exercises">Floor Exercises</Link>
    </nav>
  );
}
