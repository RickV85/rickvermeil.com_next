export const data = [
  {
    appTitle: "SendTemps",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Google OAuth",
      "NextAuth",
      "Google Maps API",
      "Vercel Storage",
      "CSS",
      "HTML",
      "Git",
      "GitHub"
    ],
    bgColor: "bg-[#2A3C43]",
    titleFontStyle: "font-fugaz font-[400] text-[#00B2FF]",
    ytLink: "",
    img: "/sendtemps.jpeg",
    descFontStyle: "text-[#FFFFFF] text-lg",
    description: `In June 2023, I created a simple application to retrieve forecasts for my favorite local climbing, mountain biking and snowboarding locations. What began as a basic utility grew into a full-fledged application, specifically designed for Colorado Front Range outdoor sport enthusiasts. SendTemps has evolved into a comprehensive full-stack Next.js 14 application, providing accurate and detailed NOAA forecasts for backcountry locations, far exceeding my initial vision for the project.

    At its core, SendTemps stands out with its user-centric features. It boasts real-time NOAA weather forecasts specifically tailored for the backcountry terrain, outshining typical weather apps that focus on urban areas. It's seamless integration of Google OAuth and NextAuth offers a smooth and secure user experience, with an interactive mapping system powered by Google Maps API. This intuitive system allows users to effortlessly create and manage custom locations for their adventures. Underneath this user-friendly interface lies a robust Node.PostgreSQL backend, ensuring reliable storage and management of location data as well as retrieving NOAA weather forecasts and OpenAI analysis of the forecasts.`,
    linkLogoColor: "EF8354",
    deployedLink: "https://sendtemps.vercel.app",
    ghLink: "https://github.com/RickV85/sendtemps",
  },
  {
    appTitle: "Ride Ready",
    tech: [
      "React",
      "JavaScript",
      "Sass",
      "CSS",
      "HTML",
      "Cypress",
      "Strava OAuth2.0 API",
      "Node.js",
      "Express",
      "SQL",
      "Git",
      "GitHub"
    ],
    bgColor: "bg-[#2F4858]",
    titleFontStyle: "font-rrlogo font-[400] text-[#F6AE2D]",
    ytLink: "https://www.youtube.com/embed/WvRA8F9EQsI",
    img: "",
    descFontStyle: "text-[#F6AE2D] text-lg",
    description: `The concept for Ride Ready struck me as I was rebuilding my mountain bike suspension. I was pondering a problem that most mountain bikers are all too familiar with - trying to recall the last service date of their suspension and then trying to make an educated guess on whether or not it was due for service. Typically, suspension manufacturers recommend the service intervals in an amount of hours ridden since the last rebuild was performed, which is difficult to keep track of.

    For the 3rd quarter final project at Turing's School of Software and Design, I took on the challenge of building an app that addresses this problem within a tight 6-day deadline on my own. In this venture, I not only pushed my limits but also got my hands dirty with some technology that was new to me, such as OAuth2.0. The success I achieved in building this application made me reflect on how far I had come as a developer. Not long before, I couldn't fathom building a complex application that solves a real-world problem, especially in such a short time frame.
    
    Please note, this application requires a Strava account and the tracking of mountain bike rides for accurate operation. For those who do not mountain bike or do not use Strava in this way, I invite you to watch the video above and welcome you to reach out for a personal demonstration.`,
    linkLogoColor: "F26419",
    deployedLink: "https://www.ridereadybike.com",
    ghLink: "https://github.com/RickV85/RideReady-FE",
  },
  {
    appTitle: "Backcountry Bookings",
    tech: [
      "React.js",
      "Typescript",
      "Rails",
      "Ruby",
      "Sass",
      "CSS",
      "HTML",
      "Cypress",
      "Google Maps API",
      "AWS S3 Bucket",
      "Git",
      "GitHub",
      "GitHub Actions"
    ],
    bgColor: "bg-[#283618]",
    titleFontStyle: "font-backcountry text-[#FBFAF5] font-bold",
    ytLink: "https://www.youtube.com/embed/4Q1fa0x7wao",
    img: "",
    descFontStyle: "font-backcountry text-[#FBFAF5] text-lg",
    description: `Backcountry Bookings is the ultimate destination for all of your camping needs! It's a comprehensive research and review platform with National Park campground information from around the country, designed to help you find the perfect campsite for your next adventure. Awarded first place in Turing's “Demo Comp” by a panel of judges in the software industry. This application was built by a full-stack team of seven students for the group's final Capstone project at the Turing School of Software and Design.
    
    This application is designed to allow a user to research US National Park campgrounds by a variety of options including by state, park name, campground name and their current location. The user is presented with search result options which they can browse and then select one for more information or add to their favorites which will appear on the home page. On the details page for a campground, they will receive vital information about the campground that will help them plan their trip.

    The campground seeker can browse images of the selected campground, an interactive map provided by Google Maps API, attributes of the campground and a review section that allows a user to submit their opinion of the campground as well as a photo which is stored in an Amazon S3 Bucket. Finally, the user can click links to either be navigated directly to the campground from their location with Google Maps or book a site on the NPS reservation system, Recreation.gov.`,
    linkLogoColor: "F9A03F",
    deployedLink: "https://backcountrybookings.herokuapp.com/",
    ghLink: "https://github.com/Backcountry-Bookings/backcountry_fe",
  },
  {
    appTitle: "LavLink",
    tech: [
      "React.js",
      "JavaScript",
      "Redux",
      "Sass",
      "CSS",
      "HTML",
      "Cypress",
      "REST API",
      "Google Maps API",
      "Git",
      "GitHub",
    ],
    bgColor: "bg-[#31c6e0]",
    titleFontStyle: "font-lavlink text-[#034277] font-bold",
    ytLink: "",
    img: "https://user-images.githubusercontent.com/113261334/221386610-b01bd089-a587-49bf-bd4d-c2ef6916606f.gif",
    descFontStyle: "font-lavlink text-[#034277] text-lg",
    description: `Finding a bathroom in public can be tricky, but for people with particular accessibility needs, it can be a nightmare!

    LavLink allows a user to search for public restrooms in their area that meet their criteria. Users can stipulate whether they need a wheelchair accessible bathroom, a unisex bathroom, or a restroom with a changing table. This ensures that trans people, caregivers, and people with mobility equipment know exactly where they need to go when they need to go!
    
    LavLink users can allow the app to use their current location to find restrooms in their immediate area, or plan ahead by entering a zip code to search. They are provided with a list of results along with a map showing each one. By clicking on a listed restroom or map marker, they are redirected to a page to view further information about the bathroom (address, map, comments, upvotes, etc.) and a way to leave the app to pull up directions to the restroom from their current location.
    
    This app was designed "mobile-first" and is primarily intended for a user on a mobile device, but also features a responsive UI design for larger screens.`,
    linkLogoColor: "f6c28b",
    deployedLink: "https://lav-link-smithkirsten.vercel.app/",
    ghLink: "https://github.com/RickV85/lav-link",
  },
  {
    appTitle: "Funky Flix",
    tech: ["React.js", "JavaScript", "CSS", "HTML", "Cypress", "REST API", "Git", "GitHub"],
    bgColor: "bg-[#222121]",
    titleFontStyle: "font-funkyflix text-[#f95738] font-bold",
    ytLink: "",
    img: "https://user-images.githubusercontent.com/109977562/218594737-f5ef70de-cdd0-4681-9204-b62db32136c6.gif",
    descFontStyle: "text-[#f0dfa3]",
    description: `This was a two week, partner project assigned to students in Mod 3 of the Turing School of Software & Design's Front-End Engineering program. Our goal was to create a user-friendly application that displays all available movies available from a Turing created API along with their Funky Flix rating. The purpose of our application is to assist users in determining if a movie is worth watching by providing them with information about each movie, similar to "Rotten Tomatoes".

    Our functionality was inspired by popular movie viewing and reviewing web applications, and provides a comprehensive browsing experience where users can sort how the movies are displayed or search for a particular movie by name. By clicking on a movie, users are redirected to that movie's page, which includes the movie's trailer and additional details about the movie that may be of interest to the user, such as the movie's duration and genre.

    This project served as a valuable learning opportunity for us, as it was our first project that incorporated React, Cypress testing, and a multi-page user experience using the React Router.`,
    linkLogoColor: "f95738",
    deployedLink: "https://rickv85.github.io/Funky-Flix/",
    ghLink: "https://github.com/RickV85/Funky-Flix",
  },
];
