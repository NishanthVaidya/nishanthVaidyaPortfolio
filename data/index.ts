export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#workExperience" },
  { name: "Contact", link: "#contact" },

];

// export const gridItems = [
//   {
//     id: 1,
//     title: "I focus on delivering impactful results that resonate with people and businesses.",
//     description: "",
//     className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
//     imgClassName: "w-full h-full",
//     titleClassName: "justify-end",
//     img: "/b1.svg",
//     spareImg: "",
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 3,
//     title: "My tech stack",
//     description: "I constantly try to improve",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 4,
//     title: "Student | Software Engineer | Web Developer | Data Engineer | Prompt Engineer",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "/grid.svg",
//     spareImg: "/b4.svg",
//   },
//   {
//     id: 6,
//     title: "Do you want to start a project together?",
//     description: "",
//     className: "lg:col-span-3 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "Red Black Trees",
    des: "Implemented Red Black trees using C++. It handles all the addition and deletion logic of Red Black trees while balancing itsel perfectly.",
    img: "/p1.svg",
    iconLists: ["/cpp.svg"],
    link: "https://github.com/NishanthVaidya/RedBlackTrees",
  },
  {
    id: 2,
    title: "ExpertMock",
    des: "A platform that makes giving and taking interviews easier by leveraging AI and Peer reviewed rcorded interviews",
    img: "/ExpertMock.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Sentiment Based Music Recommendation System",
    des: "A Data Engineering project that used Spotify 2023 data procured from kaggle to create a dataset that could be used to predict data based on Sentiment Analysis done via K means clustering",
    img: "/Sentiment.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Uniconnect",
    des: "Uniconnect is a professional networking platform designed for university students, enabling seamless collaboration, messaging, and virtual connections through an intuitive interface",
    img: "/uniconnect.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const workExperience = [
{
  id: 1,
  title: "Software Development Consultant",
  desc: "Engineered scalable B2B/B2C platforms, AI-driven decision systems, and billing engines, optimizing business processes and enhancing user experiences for global clients.",
  className: "md:col-span-2",
  thumbnail: "/exp1.svg",
},
{
  id: 2,
  title: "Engineer, Industry Demos",
  desc: "Developed innovative proof-of-concepts, modernized Oracle Cloud templates, and leveraged AI to streamline workflows and improve operational efficiency across industries.",
  className: "md:col-span-2",
  thumbnail: "/exp2.svg",
},
{
  id: 3,
  title: "Software Engineer",
  desc: "Built enterprise-grade B2B platforms, optimized deployment pipelines, and delivered AI-driven solutions to improve sales, collaboration, and content generation for clients.",
  className: "md:col-span-2",
  thumbnail: "/exp3.svg",
},
{
  id: 4,
  title: "Technical Contributor",
  desc: "Authored insightful articles and solutions on GeeksforGeeks, simplifying complex data structures, algorithms, and programming concepts for a global developer community.",
  className: "md:col-span-2",
  thumbnail: "/exp4.svg",
},
];

export const socialMedia = [
  {
    id: 1,
    link: "www. linkedin.com",
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
