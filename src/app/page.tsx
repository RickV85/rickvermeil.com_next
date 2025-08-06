"use client";

import { useEffect, useState, useRef } from "react";
import HeroImage from "./Components/HeroImage/HeroImage";
import Image from "next/image";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Link from "next/link";

function Home() {
  const heroImages = [
    {
      url: "/Shelf-81-70.webp",
      alt: "Page author rock climbing on a sunny day",
    },
    {
      url: "/DSC_0232-70.webp",
      alt: "Page author close up on a boat in Thailand",
    },
    {
      url: "/Cropped_Keystone_Enduro_EvenFlow-70.webp",
      alt: "Page author downhill mountain bike racing",
    },
  ];
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const heroImgTimer = setInterval(() => {
      setHeroImgIndex((heroImgIndex + 1) % heroImages.length);
    }, 4000);
    return () => {
      clearInterval(heroImgTimer);
    };
  }, [heroImgIndex, heroImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.target === paragraphRef.current && entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(paragraphRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
  }, []);

  return (
    <>
      <Nav section={"home"} />
      <main
        id="homeMain"
        className="flex flex-col items-center font-body xl:m-auto xl:max-w-[1600px]"
      >
        <section className="relative flex h-[30vh] w-screen items-center justify-center sm:h-[44vh] md:h-[65vh] lg:h-[90vh] xl:m-auto xl:w-[1600px]">
          {heroImages.map((image, i) => (
            <HeroImage
              key={`heroImg-${i}`}
              imgIndex={i}
              currentImgIndex={heroImgIndex}
              imgUrl={image.url}
              imgAlt={image.alt}
            />
          ))}
          <div className="w-[225px] -translate-x-16 sm:w-[330px] sm:-translate-x-20 md:w-[550px] md:-translate-x-36 lg:-translate-x-64">
            <p className=" text-center text-[1.1rem] font-semibold text-aqua [text-shadow:_2px_2px_5px_#000000] sm:text-[1.5rem] sm:leading-[30px]  md:text-[2rem] md:leading-[40px]  lg:text-[3rem] lg:leading-[60px] ">
              Software Engineer,
              <br />
              passionate adventurer,
              <br />
              driven by challenge
            </p>
            <div className=" flex w-full flex-col items-center py-4 ">
              <Link href={"/software"}>
                <button className="h-fit w-fit rounded-md bg-teal/90 p-2 text-xs font-semibold text-aqua outline outline-1 outline-orange [text-shadow:_2px_2px_5px_#000000] sm:text-base lg:w-[16vw] lg:max-w-[250px] lg:text-lg ">
                  Checkout my apps!
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="flex h-fit flex-col items-center xl:max-w-[1600px]">
          <p
            className={`w-inherit m-4 whitespace-pre-line text-center text-sm font-light leading-loose text-darkBlue sm:text-base md:text-lg lg:my-6`}
          >
            {`Hello and welcome! I love to push my limits on a cliff-side, down a mountain bike trail and in software development. I believe that the focused and calculated approach I bring to a challenging climb or trail translates very well to the mindset needed as a self-motivated software engineer. I am excited by novel challenges and enjoy learning new skills that help me overcome them.`}
          </p>
          <div className="w-inherit flex h-fit flex-col-reverse items-center bg-teal mdlg:flex-row ">
            <div className="m-4 w-full sm:w-[60vw] md:m-8 md:min-w-[16rem] md:max-w-sm">
              <Image
                src={"/crestprofilepic_webres.webp"}
                alt="Rick Vermeil head shot"
                width={600}
                height={900}
                className="rounded-md"
                priority={true}
              />
            </div>
            <article className="whitespace-pre-line text-sm text-beige md:text-base ">
              <p
                ref={paragraphRef}
                className={`transform p-6 transition-all duration-700 ease-in-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >{`My background in marketing, product ownership, and project management provides me with a pragmatic, business-minded approach to software development. I focus on what truly matters for the timely delivery of successful products - building with intention, empathy, and care for the user, the developer, and the details.

              Currently employed as a Software Engineer at percipient.ai, where I contribute to a complex, AI powered React/TypeScript security application. I’ve built and refined meaningful UI features, collaborated closely with product teams to enhance UX, and tackled challenging technical problems.

              My expertise includes React, Next.js, TypeScript, JavaScript, Node.js, CSS, Tailwind, Sass, SQL, and testing with Cypress, Mocha, and Jest. I thrive in collaborative environments, value clean, maintainable code, and have a passion for crafting seamless, accessible, and user-friendly digital experiences.
              
              Thank you for taking the time to learn more about me. Let’s connect!`}</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
