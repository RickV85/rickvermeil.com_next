import Image from "next/image";

export interface Props {
  appTitle: string;
  tech: string[];
  bgColor: string;
  titleFontStyle?: string;
  ytLink?: string;
  img?: string;
  descFontStyle?: string;
  description: string;
  deployedLink: string;
  ghLink: string;
  linkLogoColor: string;
}

export default function SoftwareTile({
  appTitle,
  tech,
  bgColor,
  titleFontStyle,
  ytLink,
  img,
  descFontStyle,
  description,
  deployedLink,
  ghLink,
  linkLogoColor,
}: Props) {
  let ytIFrame;
  if (ytLink) {
    ytIFrame = (
      <iframe
        className="w-[90vw] md:w-[87vw] max-w-[1120px] h-[30vh] md:h-[50vh] mb-2"
        src={ytLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    );
  }

  let image;
  if (img) {
    image = <img className="mb-2" src={img} alt={`${appTitle} app`} />;
  }

  let formattedTech = tech.map((str, i) => {
    if (i < tech.length - 1) {
      return `${str}, `;
    } else {
      return `${str}`;
    }
  });

  return (
    <section
      className={`${bgColor} w-[95vw] flex flex-col items-center max-w-[1200px] rounded-lg h-fit p-4 mt-4 font-body`}
    >
      <div className="flex flex-col items-center">
        <h2
          className={`text-5xl text-center
        drop-shadow-[4px_4px_5px_#00000075] mb-4 ${titleFontStyle}`}
        >
          {appTitle}
        </h2>
        {ytIFrame}
        {image}
      </div>
      <div className={`w-[90vw] md:w-[87vw] max-w-[1115px] ${descFontStyle}`}>
        <p className="py-2 whitespace-pre-line">{description}</p>
        <p className="font-bold">Built using: {formattedTech}</p>
        <a
          href={deployedLink}
          className="flex items-center w-fit py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`https://img.icons8.com/ios/50/${linkLogoColor}/domain--v1.png`}
            alt="website icon"
            className="drop-shadow-[3px_2px_2px_#00000075]"
            width={50}
            height={50}
          />
          <p className="pl-2">Deployed Application</p>
        </a>
        <a
          href={ghLink}
          className="flex items-center w-fit py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`https://img.icons8.com/material-outlined/48/${linkLogoColor}/github.png`}
            alt="GitHub icon"
            className="drop-shadow-[3px_2px_2px_#00000075]"
            width={48}
            height={48}
          />
          <p className="pl-2">GitHub Repository</p>
        </a>
      </div>
    </section>
  );
}
