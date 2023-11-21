import Image from "next/image";
import Link from "next/link";

interface Props {
  section: string;
}

export default function Nav({ section }: Props) {
  return (
    <header className="w-screen bg-darkBlue flex flex-col items-center">
      <nav className="h-18 flex w-screen max-w-[1600px] justify-between py-2.5 font-body md:h-24">
        <div className="flex items-center ">
          <Link href={"/software"}>
            <div className="ml-3 flex flex-col items-center justify-center p-2 md:flex-row">
              <Image
                className="hidden w-8 md:flex md:w-12"
                src="https://img.icons8.com/ios-glyphs/100/15616D/react.png"
                alt="JavaScript icon"
                width={100}
                height={100}
              />
              <h2
                id="software"
                className={`text-sm text-beige md:ml-2 md:text-base ${
                  section === "software" ? "text-orange" : ""
                }`}
              >
                Software
              </h2>
            </div>
          </Link>
          <Link href={"/resume"}>
            <section className="ml-3 flex flex-col items-center justify-center p-2 md:flex-row">
              <Image
                className="hidden w-8 md:flex md:w-12"
                src="https://img.icons8.com/15616D/dotty/100/null/parse-from-clipboard.png"
                alt="resume icon"
                width={100}
                height={100}
              />
              <h2
                id="resume"
                className={`text-sm text-beige md:ml-2 md:text-base ${
                  section === "resume" ? "text-orange" : ""
                }`}
              >
                Resume
              </h2>
            </section>
          </Link>
          <Link href={"/freelance"}>
            <section className="ml-3 flex flex-col items-center justify-center p-2 md:flex-row">
              <Image
                className="hidden w-8 md:flex md:w-12"
                src="/vws_logo.svg"
                alt="Vermeil Web Solutions icon"
                width={60}
                height={37}
              />
              <h2
                id="freelance"
                className={`text-sm text-beige md:ml-4 md:text-base ${
                  section === "freelance" ? "text-orange" : ""
                }`}
              >
                Freelance
              </h2>
            </section>
          </Link>
        </div>
        <Link href={"/"} className="flex items-center">
          <div>
            <h1 className="text-center text-base font-light text-orange md:text-4xl">
              Rick Vermeil
            </h1>
          </div>
          <Image
            className="mx-[2px] h-5 w-5 md:mx-3 md:h-10 md:w-10"
            src="https://img.icons8.com/15616D/ios/100/null/climbing-anchor.png"
            alt="climbing anchor icon"
            width={100}
            height={100}
          />
        </Link>
      </nav>
    </header>
  );
}
