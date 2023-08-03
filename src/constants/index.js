import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cplus,
  java,
  python,
  mysql,
  aws,
  linkedin,
  github,
  gmail,
  meta,
  starbucks,
  tesla,
  shopify,
  SDSC,
  carrent,
  jobit,
  tripguide,
  threejs,
  notetakingapp,
  foodrecommender,
  raytracing,
  roomestimation,
  ioschatapp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Social",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const socials = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/quocduyvu6262"
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/duyquocvu/"
  },
  {
    name: "Gmail",
    icon: gmail,
    link: "https://quocduyvu6262@gmail.com/"
  }
]

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "C++",
    icon: cplus
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IOS Developer",
    company_name: "San Diego Supercomputer Center",
    icon: SDSC,
    iconBg: "#ffffff",
    date: "Fall 2022 - Spring 2023",
    points: [
      "Worked with a team of 10 to create an IOS mobile app that enables non-medical communication between neuroscience residents and attending physicians.",
      "Developed a journals page with a built-in calendar using SwiftUI. This feature enables users to view and navigate between articles conveniently.",
      "Employed a Go web application and Docker to handle the client API and create a dynamic user comment section within a journals page.",
      "Managed notifications by sharing relevant data with other views in the IOS app, both when the app is running in the foreground and when the user interacts with a notification.",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "San Diego Supercomputer Center",
    icon: SDSC,
    iconBg: "#ffffff",
    date: "Summer 2022 - Fall 2022",
    points: [
      "Collaborated with a team of 6 to develop a roommate-finder app for Android and IOS in React Native while following the Agile Scrum methodology. My main focus was adding new features to the app's back end and integrating them with the front end.",
      "Created a user-filtering algorithm in Node.js that utilized MySQL queries on our Ubuntu server. This resulted in an improved user experience in finding suitable roommates.",
      "Implemented user authentication using Firebase Authentication, allowing users to sign up and log in to the application securely.",
      "Utilized Firebase Cloud to design and develop an in-app messaging system for real-time and direct user communication.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "iOS Chat App",
    description:
      "A messaging application that allows users to connect with others and start chatting.",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: ioschatapp,
    source_code_link: "https://github.com/quocduyvu6262/ChatAppIOS",
  },
  {
    name: "Note Taking App",
    description:
      "A Personal note-taking app that enables users to share their notes while maintaining their own notes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: notetakingapp,
    source_code_link: "https://github.com/cse110-fa22-group5/cse110-fa22-group5",
  },
  {
    name: "Ray Tracer",
    description:
      "Developed a basic ray tracer in C++ to simulate the interaction of light with objects in a virtual scene. Defined the scene, generated rays for each pixel in the image, and computed ray-object intersections to determine the color of each pixel.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OO Design",
        color: "green-text-gradient",
      },
      {
        name: "Data Structures",
        color: "pink-text-gradient",
      },
    ],
    image: raytracing,
    source_code_link: "https://github.com/quocduyvu6262/RayTracer",
  },
  {
    name: "Food Recommender System",
    description:
      "A recommender system that predicts the user's rating on a specific food recipe. Developed the Logistic Regression and Bag of Words model using user's review text and Natural Language Processings.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: foodrecommender,
    source_code_link: "https://docs.google.com/document/u/1/d/e/2PACX-1vTjr0JQBOxLO6BSF9dp_BA-t1CXNPaO-325MKb1rQtpIMFYgKge76dBD62CnfuiPg/pub",
  },
  {
    name: "Room Occupation Estimation",
    description:
      "A machine-learning model that accurately estimates and predicts the number of people in a room using a dataset collected at different times throughout 4 days from various types of sensors.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: roomestimation,
    source_code_link: "https://github.com/COGS118A/Group001-Wi23/blob/main/FinalProjectGroup001-Wi23.ipynb",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, socials, technologies, experiences, testimonials, projects };