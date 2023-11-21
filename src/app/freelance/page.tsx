import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Image from "next/image";

export default function Freelance() {
  return (
    <>
      <Nav section="freelance" />
      <section className="font-vws flex flex-col items-center">
        <div className="relative w-[90vw] h-[31vh] ">
          <Image
            src="/vws_logo.svg"
            alt="Vermeil Web Solutions icon"
            fill
          />
        </div>
        <h2 className="text-2xl ">Vermeil Web Solutions</h2>
        <p>{"Elevating Your Web Applications to New Heights"}</p>
      </section>
      <section></section>
      <Footer />
    </>
  );
}
