import { data } from "../SoftwareData";
import SoftwareTile from "../Components/SoftwareTile/SoftwareTile";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

export default function Software() {
  const tiles = data.map((tile, i) => {
    return (
      <SoftwareTile
        key={i}
        appTitle={tile.appTitle}
        tech={tile.tech}
        bgColor={tile.bgColor}
        titleFontStyle={tile.titleFontStyle}
        ytLink={tile.ytLink}
        img={tile.img}
        descFontStyle={tile.descFontStyle}
        description={tile.description}
        deployedLink={tile.deployedLink}
        ghLink={tile.ghLink}
        linkLogoColor={tile.linkLogoColor}
      />
    );
  });

  return (
    <>
      <Nav section={"software"} />
      <section className="h-fit flex flex-col items-center pb-4">
        {tiles}
      </section>
      <Footer />
    </>
  );
}
