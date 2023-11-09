"use client";

import { useEffect, useState, useRef } from "react";
import HeroImage from "./Components/HeroImage/HeroImage";
import Image from "next/image";
import Nav from "./Components/Nav/Nav";

function Home() {
  const heroImageUrls = [
    "/Shelf-81.webp",
    "/DSC_0232.webp",
    "/Cropped_Keystone_Enduro_EvenFlow.webp",
  ];
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const heroImgTimer = setInterval(() => {
      setHeroImgIndex((heroImgIndex + 1) % heroImageUrls.length);
    }, 6000);
    return () => {
      clearInterval(heroImgTimer);
    };
  }, [heroImgIndex, heroImageUrls.length]);

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
      }
    );
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
  }, []);

  return (
    <>
      {/* <Nav section={section} /> */}
      {/* Need to come up with global state and implement as above */}
      <Nav section={"home"} />
      <main id="homeMain" className="font-body">
        <section className="relative flex items-center justify-center h-[30vh] sm:h-[44vh] md:h-[60vh] lg:h-[90vh] w-screen xl:w-[1600px] xl:m-auto">
          {heroImageUrls.map((url, i) => (
            <HeroImage
              key={i}
              imgIndex={i}
              currentImgIndex={heroImgIndex}
              imgUrl={url}
            />
          ))}
          <div className="w-[225px] sm:w-[330px] md:w-[550px] -translate-x-16 sm:-translate-x-20 md:-translate-x-36 lg:-translate-x-64">
            <h3 className=" text-[1.1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] sm:leading-[30px] md:leading-[40px] lg:leading-[60px]  font-semibold text-aqua  text-center [text-shadow:_2px_2px_5px_#000000] ">
              Frontend Developer,
              <br />
              passionate adventurer,
              <br />
              driven by challenge
            </h3>
            <a className=" w-full flex flex-col items-center p-4 ">
              <button className="w-fit lg:w-[16vw] lg:max-w-[250px] h-fit bg-teal/90 outline outline-1 outline-orange rounded-md text-aqua [text-shadow:_2px_2px_5px_#000000] text-xs sm:text-base lg:text-lg font-semibold p-2 ">
                Checkout my apps!
              </button>
            </a>
          </div>
        </section>
        <section className="flex flex-col items-center h-fit">
          <p
            className={`text-darkBlue font-light leading-loose whitespace-pre-line text-center w-[90vw] py-4 `}
          >
            {`Hello and welcome! When I'm not pursuing one of my passions in the outdoors, you'll find me designing and brining user-centric web applications to life. I love pushing my limits on a rock face, down a mountain bike trail and in software development. I believe that the same focus and determination required to conquer a challenging climb or trail translates seamlessly into the world of software development.`}
          </p>
          <div className="bg-teal h-fit w-screen flex flex-col-reverse mdlg:flex-row items-center ">
            <div className="relative w-full m-4 sm:w-[60vw] md:max-w-sm md:m-8 mdlg:min-w-[30vw]">
              <Image
                src={"/crestprofilepic_webres.webp"}
                alt="Rick Vermeil head shot"
                width={600}
                height={900}
                className="rounded-md"
                priority={true}
              />
            </div>
            <div className="text-beige whitespace-pre-line ">
              <p
                ref={paragraphRef}
                className={`p-6 transition-all duration-700 ease-in-out transform ${
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
