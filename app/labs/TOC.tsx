import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-TOC">
      <ul>
        <h5>Aidan's Page</h5>
        <li>
          <Link href=".">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">
            Chapter 1
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}
