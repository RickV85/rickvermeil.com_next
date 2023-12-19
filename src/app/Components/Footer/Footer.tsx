import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex w-screen items-center justify-center gap-[3vw] bg-darkBlue">
      <Link
        href="https://www.linkedin.com/in/rick-vermeil-b93581159/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/FF7D00/linkedin.png"
          alt="linkedin icon"
        />
      </Link>
      <div className="flex h-fit max-w-[1600px] flex-col items-center justify-center py-2">
        <Link
          className="my-2 w-fit rounded-md bg-orange px-12 py-2 text-center"
          href="mailto:rickv85@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </Link>
      </div>
      <Link href="https://github.com/RickV85" target="_blank" rel="noreferrer">
        <Image
          src={`https://img.icons8.com/material-outlined/50/FF7D00/github.png`}
          alt="GitHub icon"
          width="50"
          height="50"
        />
      </Link>
    </footer>
  );
}
