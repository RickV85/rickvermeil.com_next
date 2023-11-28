export default function Testimonials() {
  const davidBudd = {
    name: "David Budd",
    company: "David M. Budd Photography",
    quote: `I had a website based on a Wordpress design that worked well but didn't have the custom features that I wanted. Rick designed a website from the ground up that is fully customizable and exactly what I needed. It was a pleasure to collaborate with him, and he was always willing to clearly explain the workflow and SEO properties in a language I could understand. He kept me apprised of how much time was spent building the site a regular basis so there were no surprises in the end. Thanks again Rick!`,
  };
  const markWaldron = {
    name: "Mark Waldron",
    company: "Studio 27",
    quote: `We hadn’t updated our web site in over 10 years, it seemed like a daunting task. Working with Rick on our new website was a great experience! Rick kept us on track with goals and timelines. Collaborating with Rick, a skilled professional can truly elevate the quality of your projects. Rick understood what we were trying to accomplish and delivered exactly what we were looking for. His expertise and collaboration made the website development process smooth and successful. If you're looking for a personal website builder who values teamwork and delivers excellent results, Rick is a fantastic choice.`,
  };

  const testimonials = [davidBudd, markWaldron];

  const testimonialDisplay = () => {
    const display = testimonials.map((data, i) => {
      return (
        <article
          key={`testimonial-${i}`}
          id={`${data.name.split(" ")[1].toString().toLowerCase()}Testimonial`}
          className="my-4 rounded border border-solid border-teal p-4 text-sm sm:text-base mdlg:text-lg "
        >
          <p>{`"${data.quote}"`}</p>
          <p className="text-right font-semibold">
            - {data.name}, {data.company}
          </p>
        </article>
      );
    });
    return display;
  };

  return <div className="lg:flex lg:gap-4">{testimonialDisplay()}</div>;
}
