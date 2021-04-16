import Link from "next/link";

function Welcome() {
  return <div>Welcome to Next.js!</div>;
}

export const pageLink = (
  <ul>
    <li>
      <Link href="/">
        <a>Welcome</a>
      </Link>
    </li>
    <li>
      <Link href="/hello">
        <a>Hello</a>
      </Link>
    </li>
  </ul>
);

function HomePage() {
  return (
    <>
      {pageLink}
      <Welcome />
    </>
  );
}

export default HomePage;
