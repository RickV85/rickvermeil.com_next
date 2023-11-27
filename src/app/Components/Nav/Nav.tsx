import Image from "next/image";
import Link from "next/link";

interface Props {
  section: string;
}

export default function Nav({ section }: Props) {
  return (
    <header className="flex w-screen flex-col items-center bg-darkBlue">
      <nav className="h-18 flex w-screen max-w-[1600px] justify-between py-2.5 font-body md:h-24">
        <div className="flex items-center ">
          <Link href={"/software"}>
            <div className="xs:ml-0 flex flex-col items-center justify-center p-2 sm:ml-3 md:flex-row">
              <Image
                className="hidden w-8 md:flex md:w-12"
                src="https://img.icons8.com/ios-glyphs/100/15616D/react.png"
                alt="JavaScript icon"
                width={100}
                height={100}
              />
              <h2
                id="software"
                className={`xs:text-xs text-beige sm:text-sm md:ml-2 md:text-base ${
                  section === "software" ? "text-orange" : ""
                }`}
              >
                Software
              </h2>
            </div>
          </Link>
          <Link href={"/resume"}>
            <section className="xs:ml-0 flex flex-col items-center justify-center p-2 sm:ml-3 md:flex-row">
              <Image
                className="hidden w-8 md:flex md:w-12"
                src="https://img.icons8.com/15616D/dotty/100/null/parse-from-clipboard.png"
                alt="resume icon"
                width={100}
                height={100}
              />
              <h2
                id="resume"
                className={`xs:text-xs text-beige sm:text-sm md:ml-2 md:text-base ${
                  section === "resume" ? "text-orange" : ""
                }`}
              >
                Resume
              </h2>
            </section>
          </Link>
          <Link href={"/freelance"}>
            <section className="xs:ml-0 flex flex-col items-center justify-center p-2 sm:ml-3 md:flex-row">
              <Image
                className="hidden w-8 md:flex md:w-12"
                src="/vws_logo.svg"
                alt="Vermeil Web Solutions icon"
                width={60}
                height={37}
              />
              <h2
                id="freelance"
                className={`xs:text-xs text-beige sm:text-sm md:ml-4 md:text-base ${
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
            <h1 className="xs:text-sm text-center font-light text-orange sm:text-base md:text-3xl mdlg:text-4xl">
              Rick Vermeil
            </h1>
          </div>
          <Image
            className="mx-[2px] h-5 w-5 md:mx-1 md:h-8 md:w-8 mdlg:mx-3 mdlg:h-10 mdlg:w-10 "
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
