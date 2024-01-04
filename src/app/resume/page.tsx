import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

export default function Resume() {
  const resumeSrc = "/Rick Vermeil Resume 1.4.24.pdf";

  return (
    <>
      <Nav section={"resume"} />
      <section className=" flex h-[82vh] flex-col items-center sm:h-[90vh] md:h-[105vh] ">
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
        <button className=" m-6 h-fit w-fit rounded-md bg-teal px-6 py-2 ">
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
