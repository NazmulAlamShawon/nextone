

import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1>hello</h1>
      <Link href="/about">
        go to about page
      </Link>
    </main>
  )
}
