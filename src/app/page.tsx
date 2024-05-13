import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/default">default</Link>
      <br />
      <br />
      <Link href="/infinity">infinity</Link>
      <br />
      <br />
      <Link href="/auto">auto</Link>
    </main>
  );
}
