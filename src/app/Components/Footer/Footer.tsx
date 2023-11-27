import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBlue w-screen flex flex-col items-center">
      <div className="flex flex-col items-center h-fit w-screen max-w-[1600px] justify-center py-2">
        <Link
          className="my-2 w-fit rounded-md bg-orange px-12 py-2 text-center"
          href="mailto:rickv85@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email me
        </Link>
        <p className="text-center text-sm text-beige m-1 ">
          rickv85(at)gmail.com
        </p>
      </div>
    </footer>
  );
}
