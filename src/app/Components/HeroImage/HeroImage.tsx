
interface Props {
  imgIndex: number;
  currentImgIndex: number;
  imgUrl: string;
}

export default function HeroImage({ imgIndex, currentImgIndex, imgUrl } : Props) {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${imgIndex === currentImgIndex ? "opacity-100" : "opacity-0"}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
  );
}