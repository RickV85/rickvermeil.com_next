import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Link from "next/link";

export default function Resume() {
  const resumeSrc = "/Rick Vermeil Resume 11.14.23.pdf";

  return (
    <>
      <Nav section={"resume"} />
      <section className=" flex flex-col items-center h-[82vh] sm:h-[90vh] md:h-[105vh] ">
        <iframe
          itemType="pdf"
          title="Rick Vermeil Resume"
          src={resumeSrc}
          width="100%"
          height="100%"
        >
          Your browser does not support PDFs. Please download my resume by
          clicking the button below.
        </iframe>
        <button className=" h-fit w-fit bg-teal py-2 px-6 m-6 rounded-md ">
          <a
            href={resumeSrc}
            download
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Download Resume
          </a>
        </button>
      </section>
      <Footer />
    </>
  );
}
