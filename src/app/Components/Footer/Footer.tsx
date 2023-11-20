import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-fit w-screen max-w-[1600px] flex-col items-center justify-center bg-darkBlue py-2 ">
      <Link
        className="my-2 w-fit rounded-md bg-orange px-12 py-2 text-center"
        href="mailto:rickv85@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Email me
      </Link>
      <p className="text-center text-sm text-beige ">
        {`If the above link doesn't work, please send me an email at
        rickv85(at)gmail.com`}
      </p>
    </footer>
  );
}
