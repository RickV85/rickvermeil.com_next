"use client";

import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Image from "next/image";
import Testimonials from "../Components/Testimonials/Testimonials";

export default function Freelance() {
  return (
    <>
      <Nav section="freelance" />
      <main className="flex w-screen flex-col items-center font-vws ">
        <section
          id="heroSection"
          className="flex flex-col items-center xl:max-w-[1600px] "
        >
          <div
            id="heroImgContainer"
            className="relative h-[45vh] w-screen sm:h-[60vh] mdlg:h-[75vh] lg:h-[85vh] xl:max-w-[1600px]"
          >
            <Image
              src={"/Laptop_in_mtn_landscape.webp"}
              alt="MacBook Pr in a Rocky Mountain landscape"
              fill={true}
              priority={true}
              className="object-cover"
            />
          </div>
          <div className="absolute flex h-[45vh] flex-col items-center justify-between sm:h-[60vh] mdlg:h-[75vh] lg:h-[85vh]">
            <div
              id="vwsLogoContainer"
              className="mt-4 flex w-32 flex-col items-center justify-center sm:w-40 md:w-52 mdlg:w-64 "
            >
              <Image
                src={"/logo-no-background.png"}
                alt="Vermeil Web Services logo"
                priority={true}
                width={1500}
                height={935}
                className="shadow-[0px_0px_4px_3px_#ffffff94]"
              />
              <h2 className="w-max text-center text-lg font-semibold text-aqua drop-shadow-[1px_2px_3px_black] sm:text-2xl mdlg:text-3xl">
                Vermeil Web Solutions
              </h2>
            </div>
            <div className="mb-1 rounded-md bg-[#2a2a2a8e] p-1 text-center ">
              <p className="text-sm text-aqua drop-shadow-[1px_2px_3px_black] sm:text-base md:text-xl mdlg:text-2xl">
                {"Elevating Your Apps to New Heights"}
              </p>
            </div>
          </div>
        </section>
        <section
          id="testimonialsSection"
          className="mx-4 flex h-fit flex-col xl:max-w-[1600px]"
        >
          <div className=" w-max ">
            <h3 className=" mt-4 w-fit text-xl font-bold text-teal drop-shadow-md sm:text-2xl mdlg:text-3xl">
              Client Testimonials
            </h3>
            <hr className=" h-[1px] border-none bg-teal" />
          </div>
          <Testimonials />
        </section>
        <section
          id="servicesSection"
          className="flex h-fit w-screen flex-col px-6 text-sm mdlg:px-12 mdlg:text-base lg:px-20 xl:max-w-[1600px]"
        >
          <div className=" w-max ">
            <h3 className=" mt-4 text-xl font-bold text-teal drop-shadow-md sm:text-2xl mdlg:text-3xl">
              Services
            </h3>
            <hr className=" h-[1px] border-none bg-teal" />
          </div>
          <div className="flex flex-col ">
            <article id="webDevelopmentServices" className="">
              <h4 className=" mt-4 text-lg font-bold mdlg:text-2xl">
                Custom Web Development
              </h4>
              <p>{`With a strong foundation in Frontend Development and a natural flair for clear, effective communication, I excel in translating your ideas into captivating digital realities. My extensive experience in conveying technical concepts to non-technical stakeholders ensures that your vision is understood and brought to life just as you imagine it. Whether you're a startup, a small business, or an individual with a unique idea, my goal is to create a web presence that not only reflects your vision but also exceeds your expectations in functionality and design. Let's collaborate to build a website that's not just a digital space, but a true extension of your brand.`}</p>
              <ul className="my-4 ">
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Responsive Website Design
                  </h5>
                  Tailoring websites to perform seamlessly across all devices
                  and screen sizes.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Interactive User Interfaces
                  </h5>
                  Creating intuitive and engaging user interfaces that drive
                  user engagement.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Custom JavaScript Development
                  </h5>
                  Implementing unique JavaScript functionalities for dynamic and
                  interactive web experiences.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    E-commerce Solutions
                  </h5>
                  Building robust online stores with user-friendly interfaces,
                  integrating various payment systems and shopping cart
                  technologies.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">CMS Integration</h5>
                  Setting up and customizing content management systems for
                  effortless content management.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">SEO Optimization</h5>
                  Optimizing your website for better visibility and reach on
                  search engines.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Performance Optimization
                  </h5>
                  Enhancing website speed and performance for an optimal user
                  experience.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Cross-Browser Compatibility
                  </h5>
                  Ensuring consistent website performance across various web
                  browsers.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Accessibility Compliance
                  </h5>
                  Developing inclusive websites that adhere to ADA and WCAG
                  guidelines.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Maintenance and Support
                  </h5>
                  Offering ongoing support and updates to maintain your
                  website&apos;s efficiency and security.
                </li>
              </ul>
            </article>
            <article id="softwareDevelopmentServices" className="">
              <h4 className=" mt-4 text-lg font-bold mdlg:text-2xl">
                Custom Software Development
              </h4>
              <p>{`As a dedicated Software Developer, I extend my expertise beyond the realm of web development to provide comprehensive software development services. My proficiency in React.js, Next.js, JavaScript ES6, TypeScript, and more enables me to create software solutions that are not only innovative but also user-friendly and efficient. Whether you're looking for a standalone application, a complex system integration, or a unique tool, my goal is to deliver software that aligns perfectly with your unique needs.`}</p>
              <ul className="my-4 ">
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Application Development
                  </h5>
                  Building custom applications tailored to your specific
                  business needs, focusing on functionality, scalability, and
                  user experience.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Frontend Architectures
                  </h5>
                  Designing robust frontend architectures that ensure
                  scalability, maintainability, and seamless integration with
                  backend systems.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">API Integration</h5>
                  Connecting your application with third-party services and APIs
                  to enhance functionality and user experience
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">Data Visualization</h5>
                  Implementing data visualization tools and libraries to present
                  complex data in an accessible and understandable format.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Single Page Applications (SPA)
                  </h5>
                  Creating fast, responsive SPAs that offer a smooth, app-like
                  user experience
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Progressive Web Apps (PWA)
                  </h5>
                  Developing PWAs that combine the best of web and mobile apps
                  for an enhanced user experience, both online and offline.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Testing and Quality Assurance
                  </h5>
                  Ensuring the reliability and performance of your software
                  through comprehensive testing using Cypress, Mocha/Chai, and
                  Jest.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Code Refactoring and Optimization
                  </h5>
                  Improving existing codebases for better performance,
                  maintainability, and scalability.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Technical Consulting
                  </h5>
                  Providing expert advice and guidance on software development
                  best practices, tool selection, and technology strategy.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Ongoing Support and Maintenance
                  </h5>
                  Offering continuous support and maintenance services to keep
                  your software up-to-date and running smoothly.
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
