"use client";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Image from "next/image";

export default function Freelance() {
  return (
    <>
      <Nav section="freelance" />
      <main className="relative flex w-screen flex-col items-center ">
        <section className="flex flex-col items-center font-vws xl:max-w-[1600px]">
          <div className="relative h-[45vh] w-screen sm:h-[60vh] mdlg:h-[75vh] xl:max-w-[1600px]">
            <Image
              src={"/Laptop_in_mtn_landscape.webp"}
              alt="MacBook Pr in a Rocky Mountain landscape"
              fill={true}
              priority={true}
              className="object-cover"
            />
          </div>
          <div className="absolute h-full flex flex-col items-center justify-between">
            <div
              id="vwsLogoContainer"
              className="mt-4 flex w-32 flex-col items-center justify-center sm:w-40 md:w-52"
            >
              <Image
                src={"/logo-no-background.png"}
                alt="Vermeil Web Services logo"
                priority={true}
                width={1500}
                height={935}
                className="shadow-[0px_0px_4px_3px_#ffffff94]"
              />
              <h2 className="w-max text-center text-base font-semibold text-aqua drop-shadow-[1px_2px_3px_black] sm:text-lg ">
                Vermeil Web Solutions
              </h2>
            </div>
            <div className="text-center text-aqua drop-shadow-[1px_2px_3px_black] ">
              <p className="text-sm sm:text-base">
                {"Elevating Your Apps to New Heights"}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
