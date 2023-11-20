"use client";

import { useEffect, useState, useRef } from "react";
import HeroImage from "./Components/HeroImage/HeroImage";
import Image from "next/image";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Link from "next/link";

function Home() {
  const heroImages = [
    { url: "/Shelf-81.webp", alt: "Page author rock climbing on a sunny day" },
    {
      url: "/DSC_0232.webp",
      alt: "Page author close up on a boat in Thailand",
    },
    {
      url: "/Cropped_Keystone_Enduro_EvenFlow.webp",
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
              Software Developer,
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
            {`Hello and welcome! When I'm not pursuing one of my passions in the outdoors, you'll find me designing and brining user-centric web applications to life. I love pushing my limits on a rock face, down a mountain bike trail and in software development. I believe that the same focus and determination required to conquer a challenging climb or trail translates seamlessly into the world of software development.`}
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
              >{`I'm a former marketing professional, with extensive experience in Project Management, Web Content Management and Product Ownership, eager to transition to a Software Engineering role.
            
            While my background is in marketing, I recently attended the Turing School of Software and Design, successfully completing their frontend development program. This experience has given me the skills, knowledge and tenacity that I need to help me make this change.

            My expertise in modern frontend coding languages and frameworks include proficiencies in React, Next.js, Node.js, JavaScript, TypeScript, CSS3, Sass, Tailwind, HTML5, and testing with Cypress, Mocha, and Jest but I am always learning new tech. UI/UX design, user-friendly error handling, responsive layouts, accessibility, Agile methodologies, and test-driven development are all important practices that I employ when creating applications.

            One of my proudest accomplishments is the creation of "Backcountry Bookings", an application that competed in Turing's "Demo Comp" against other outstanding student projects and was selected as the winner by experts from around the software industry. It was an amazing experience to see our design come to life with the help of a full-stack team and an honor to win the competition.

            As a developer, I'm highly collaborative, methodical, and I value producing quality, readable code. My marketing experience has given me a unique perspective on user empathy, and I'm always thinking about how to create the best possible experience for my users.

            Thank you for taking the time to learn more about me, and I hope to have the opportunity to work with you soon. Please click the link below if you'd like to get in touch.`}</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
