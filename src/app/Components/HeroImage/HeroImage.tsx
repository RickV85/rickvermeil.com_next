import Image from "next/image";

interface Props {
  imgIndex: number;
  currentImgIndex: number;
  imgUrl: string;
  imgAlt: string;
}

export default function HeroImage({
  imgIndex,
  currentImgIndex,
  imgUrl,
  imgAlt,
}: Props) {
  return (
    <Image
      src={imgUrl}
      alt={imgAlt}
      priority={true}
      fill
      className={`object-cover transition-opacity duration-1000 ${
        imgIndex === currentImgIndex ? "opacity-100" : "opacity-0"
      }`}
    ></Image>
  );
}
