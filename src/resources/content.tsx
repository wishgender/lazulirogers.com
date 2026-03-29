import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Lazuli",
  lastName: "Rogers",
  name: `Lazuli A. Rogers`,
  role: "Computer Programmer",
  avatar: "/images/avatar.webp",
  email: "contact@lazulirogers.com",
  location: "US/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Japanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/wishgender",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lazuli-rogers",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/@lazuli.iluzal",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Integrating passion for broadcast media with web design and programming</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Laz, a programmer and web manager at Black Squirrel Entertainment, where I keep the BSE website in top condition.
      <br /> After hours, I build my own projects, from web apps to cosplays and lots in between.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Lazuli is an Ohio-based computer programmer and web designer with a love for nerdy things and broadcast media.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Black Squirrel Entertainment",
        timeframe: "January 2026 - Present",
        role: "TV Executive Producer",
        achievements: [
          <>
            Oversee all five TV shows on Black Squirrel Entertainment, providing guidance and advice to showrunners
          </>,
          <>
            Communicate and coordinate with other student media departments, especially Production & Film Distribution to ensure shows go as planned
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Black Squirrel Entertainment",
        timeframe: "August 2025 - Present",
        role: "Web Manager",
        achievements: [
          <>
            Maintains the Black Squirrel Entertainment website and addresses any
            issues that may arise, from bugs in the code to ensuring accurate
            credits and new episodes are displayed in a timely manner.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Kent State Student Media Production & Film Distribution",
        timeframe: "August 2025 - Present",
        role: "Newscast Director",
        achievements: [
          <>
            Direct the Friday newscast during the Fall 2025 semester and the Monday newscast during the Spring 2026 semester
          </>,
          <>
            Won the Golden Tape for Most Improved Show of the Fall 2025 semester
          </>
        ],
        images: [
          {
            src: "/images/about/fridayNewscast.webp",
            alt: "Crew of the Fall 2025 KSTV Friday Newscast",
            width: 16,
            height: 9
          },
          {
            src: "/images/about/mostImprovedShow.webp",
            alt: "Lazuli Rogers holding the Golden Tape award for Most Improved Show",
            width: 9,
            height: 9
          }
        ]
      },
      {
        company: "KardoAI",
        timeframe: "Summer 2025",
        role: "Software Development Intern",
        achievements: [
          <>
            Developed a backend API for collecting and returning contact information for
            use with company marketing.
          </>,
          <>
            Took over frontend web app development after a fellow intern unexpectedly had
            to leave early.
          </>,
        ],
        images: [

        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kent State University",
        timeframe: "Fall 2022 - Present",
        description: <>Currently pursuing a Bachelor's Degree in Computer Science and minoring in Japanese</>,
      },
      {
        name: "Shaker Heights High School",
        timeframe: "Fall 2021 - Spring 2022",
        description: <>High school diploma from Shaker Heights High School (Class of 2022)</>
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML/CSS",
        description: (
          <>Have worked with HTML/CSS for 3+ years</>
        ),
        tags: [
          {
            name: "HTML5",
            icon: "html",
          },
          {
            name: "CSS3",
            icon: "css"
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/devSite/devSite1.webp",
            alt: "My Development Site",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/norseMyths/myths.webp",
            alt: "A Norse Mythology Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React.js",
        description: (
          <>Building web apps with React.js and SQL or MongoDB databases</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/thisDay/thisDay1.webp",
            alt: "This Day in Pokémon History",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/sleep/sleep1.webp",
            alt: "Mareep Counter",
            width: 16,
            height: 9,
          }
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Sharing my thoughts on programming and broadcast media...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    { src: "/images/gallery/fridayNewsCrew.webp", alt: "Fall 2025 KSTV Friday Newscast crew; from left to right, Morgan Hall (filled in for audio), Maria Nelson (tech manager), Lynne Wheatley (Video Playback), Lazuli Rogers (Director), Drew Pike (Floor Crew), Ben Lanter (Floor Crew), Jillian Arthur (Technical Director), Sara Mitchell (CG)", orientation: "horizontal" },
    { src: "/images/gallery/bestHosts.webp", alt: "Lazuli Rogers & Cassandra Switzer won the Fall 2025 Black Squirrel Entertainment Golden Tapes for Best Hosts", orientation: "horizontal" },
    { src: "/images/gallery/blurbGrabBag.webp", alt: "Lazuli Rogers pictured with the participants in a crossover discussion panel between The Blurb and Grab Bag", orientation: "horizontal" },
    { src: "/images/gallery/mostImprovedShow.webp", alt: "Lazuli Rogers pictured with the Production & Film Distribution Golden Tape for Most Improved Show", orientation: "vertical" },
    { src: "/images/gallery/presentingWebStats.webp", alt: "Lazuli Rogers presenting the web analytics of the Black Squirrel Entertainment website at the Fall 2025 end-of-semester banquet", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
// export { person, social, home, about, work, blog, newsletter };