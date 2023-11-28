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
              <h2 className="w-max text-center text-lg font-semibold text-aqua drop-shadow-[1px_2px_3px_black] sm:text-2xl mdlg:my-2 mdlg:text-3xl">
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
        {/* ****************** TESTIMONIALS SECTION ****************** */}
        <section
          id="testimonialsSection"
          className="mx-6 flex h-fit flex-col mdlg:mx-12 xl:max-w-[1600px]"
        >
          <div className=" w-max">
            <h3 className=" mt-4 w-fit text-xl font-bold text-teal drop-shadow-md sm:text-2xl mdlg:text-3xl">
              Client Testimonials
            </h3>
            <hr className=" h-[1px] border-none bg-teal" />
          </div>
          <Testimonials />
        </section>
        {/* ****************** SERVICES SECTION ****************** */}
        <section
          id="servicesSection"
          className="mb-6 flex h-fit flex-col rounded-md bg-darkBlue p-6 text-sm mdlg:mx-12 mdlg:text-base lg:px-12 xl:max-w-[1600px]"
        >
          <div className=" w-max ">
            <h3 className=" mt-4 text-xl font-bold text-aqua drop-shadow-md sm:text-2xl mdlg:text-3xl">
              Services
            </h3>
            <hr className=" h-[1px] border-none bg-aqua" />
          </div>
          <div className="flex flex-col text-beige ">
            <article id="webDevelopmentServices" className="">
              <h4 className=" mt-4 text-lg font-bold text-aqua mdlg:text-2xl">
                Custom Web Development
              </h4>
              <p>
                With a strong foundation in Frontend Development, project
                management, and e-commerce, I excel in translating your ideas
                into captivating digital realities. My extensive experience in
                conveying technical concepts to non-technical stakeholders
                ensures that your vision is understood and brought to life just
                as you imagine it. Whether you&apos;re a startup, a small
                business, or an individual with a unique idea, my goal is to
                create a web presence that not only reflects your vision but
                also exceeds your expectations in functionality and design.
                Let&apos;s collaborate to build a website that&apos;s a true
                extension of your brand.
              </p>
              <ul className="my-4 ">
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Interactive User Interfaces
                  </h5>
                  Creating intuitive and engaging user interfaces that drive
                  user engagement.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Responsive Website Design
                  </h5>
                  Tailoring websites to display flawlessly across all devices
                  and screen sizes.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Custom JavaScript Development
                  </h5>
                  Implementing unique JavaScript functionalities for dynamic and
                  interactive elements.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    E-commerce Solutions
                  </h5>
                  Building online stores with user-friendly interfaces,
                  integrating Shopify or other e-comm platforms into an existing
                  website or building within their native platforms.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">CMS Integration</h5>
                  Setting up and customizing content management systems, like
                  WordPress, for effortless content management.
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
                  Increasing website speed and performance for an optimal user
                  experience.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Accessibility Compliance
                  </h5>
                  Updating existing websites to adhere to ADA and WCAG
                  guidelines for an inclusive experience for any user.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Maintenance and Support
                  </h5>
                  Offering ongoing support to update and maintain your
                  website&apos;s content, security, and other ongoing needs.
                </li>
              </ul>
            </article>
            <article id="softwareDevelopmentServices" className="">
              <h4 className=" mt-4 text-lg font-bold text-aqua mdlg:text-2xl">
                Custom Web Application Development
              </h4>
              <p>
                As a dedicated Software Developer, I extend my expertise beyond
                the realm of web development to provide comprehensive software
                development services. My proficiency in React.js, Next.js,
                JavaScript ES6, TypeScript, Node.js and more enables me to
                create software solutions that are not only innovative but also
                user-friendly and efficient. Whether you&apos;re looking for a
                customized application, a complex system integration, or a
                unique tool for your business, my goal is to deliver software
                that aligns perfectly with your unique needs.
              </p>
              <ul className="my-4 ">
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Application Development
                  </h5>
                  Building custom web full-stack applications tailored to your
                  specific business needs, focusing on functionality and user
                  experience.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">API Integration</h5>
                  Connecting your application with third-party services and APIs
                  to enhance functionality and user experience.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">Data Visualization</h5>
                  Implementing data visualization tools and libraries to present
                  your data in an understandable format.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Single Page Applications (SPA)
                  </h5>
                  Creating fast, responsive SPAs that offer a smooth, app-like
                  user experience with React.js and Next.js.
                </li>
                <li className="my-2 ">
                  <h5 className="text-lg font-semibold">
                    Progressive Web Apps (PWA)
                  </h5>
                  Developing PWAs that combine the best of web and mobile apps
                  to add offline functionality to an application.
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
                  Improving existing applications for better performance,
                  maintainability, and scalability.
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
