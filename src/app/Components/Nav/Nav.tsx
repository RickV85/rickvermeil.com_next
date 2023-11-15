import Image from "next/image";
import Link from "next/link";

interface Props {
  section: string;
}

export default function Nav({ section }: Props) {
  return (
    <header>
      <nav className="bg-darkBlue w-screen h-18 md:h-24 flex justify-between py-2.5 font-body">
        <section className="flex items-center">
          <Link href={"/software"}>
            <section className="flex flex-col justify-center md:flex-row items-center p-2 ml-3">
              <Image
                className="w-8 hidden md:flex md:w-12"
                src="https://img.icons8.com/ios-glyphs/100/15616D/react.png"
                alt="JavaScript icon"
                width={100}
                height={100}
              />
              <h2
                id="software"
                className={`text-beige text-sm md:text-base md:ml-2 ${
                  section === "software" ? "text-orange" : null
                }`}
              >
                Software
              </h2>
            </section>
          </Link>
          <Link href={"/resume"}>
            <section className="flex flex-col justify-center md:flex-row items-center p-2 ml-3">
              <Image
                className="w-8 hidden md:flex md:w-12"
                src="https://img.icons8.com/15616D/dotty/100/null/parse-from-clipboard.png"
                alt="resume icon"
                width={100}
                height={100}
              />
              <h2
                id="resume"
                className={`text-beige text-sm md:text-base md:ml-2 ${
                  section === "resume" ? "text-orange" : null
                }`}
              >
                Resume
              </h2>
            </section>
          </Link>
          {/* <Link href={"/videos"}>
          <section className="flex flex-col justify-center md:flex-row items-center p-2 ml-3">
            <img className="w-8 hidden md:flex md:w-11" src="https://img.icons8.com/15616D/ios/100/null/play-button-circled--v1.png" alt="play button" />
            <h2 className="text-beige text-sm md:text-base md:ml-2">Videos</h2>
          </section>
        </Link> */}
        </section>
        <Link href={"/"} className="flex items-center">
          <div>
            <h1 className="text-orange text-center text-base md:text-4xl font-light">
              Rick Vermeil
            </h1>
          </div>
          <Image
            className="h-5 w-5 mx-[2px] md:h-10 md:w-10 md:mx-3"
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
