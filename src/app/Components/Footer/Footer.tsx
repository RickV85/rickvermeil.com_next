import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBlue h-fit w-screen flex flex-col items-center justify-center py-2 ">
      <Link
        className="bg-orange rounded-md text-center py-2 px-12 my-2 w-fit"
        href="mailto:rickv85@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Email me
      </Link>
      <p className="text-beige text-center text-sm ">
        {`If the above link doesn't work, please send me an email at
        rickv85(at)gmail.com`}
      </p>
    </footer>
  );
}
