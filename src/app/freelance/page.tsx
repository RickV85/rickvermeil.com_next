"use client";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Image from "next/image";

export default function Freelance() {
  // useEffect(() => {
  //   let logo = document.getElementById("vwsLogoContainer");
  //   const fetchLogoSvg = async () => {
  //     return fetch("/vws_logo.svg")
  //       .then((response) => response.text())
  //       .then((svg) => {
  //         if (logo) {
  //           logo.innerHTML = svg;
  //         }
  //       });
  //   };
  //   fetchLogoSvg();
  // }, []);

  return (
    <>
      <Nav section="freelance" />
      <main className="flex xl:max-w-[1600px] flex-col items-center">
        <section className="font-vws flex flex-col items-center">
          <div className="flex h-[26vh] flex-col items-center justify-between">
            <Image
              src={"/Laptop_in_mtn_landscape.webp"}
              alt="MacBook Pr in a Rocky Mountain landscape"
              width={1600}
              height={914}
              priority={true}
              className="absolute z-0 "
            />
            <div
              id="vwsLogoContainer"
              className=" z-1 relative mt-4 flex h-[10vh] w-[31vw] flex-col items-center justify-center"
            >
              <Image
                src={"/logo-no-background.png"}
                alt="Vermeil Web Services logo"
                priority={true}
                width={1500}
                height={935}
                // box-shadow: 0px 0px 4px 3px #ffffff94;
                className="shadow-[0px_0px_4px_3px_#ffffff94]"
              />
              {/* text-shadow: 1px 2px 3px black; */}
              <h2 className="w-max text-center text-base font-semibold text-aqua drop-shadow-[1px_2px_3px_black] ">
                Vermeil Web Solutions
              </h2>
            </div>
            <div className="z-1 relative text-center text-aqua drop-shadow-[1px_2px_3px_black] ">
              <p className="text-sm">{"Elevating Your Apps to New Heights"}</p>
            </div>
          </div>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  );
}
