export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#workExperience" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "I focus on delivering impactful results that resonate with people and businesses.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comfortable with async work and flexible time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "MSCE Student | Software Engineer | Backend & Full-Stack Developer",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sentiment-Based Music Recommendation (Data & NLP)",
    des: "Data pipeline: Spotify 2023 data and K-means sentiment analysis. NLP pipeline: suggests 1–5 songs from user text using RoBERTa and sentence-transformers over ~955K tracks for tone and mood matching.",
    img: "/Music%20rec.jpg",
    iconLists: ["/re.svg", "/grid.svg", "/stream.svg"],
    link: "https://github.com/NishanthVaidya/Sentiment-Based-AI-Music-recommendation-system",
  },
  {
    id: 2,
    title: "Balekai",
    des: "Full-stack Trello-style task manager: Spring Boot, Next.js, JWT + Google Sign-In, PostgreSQL. Boards, lists, cards, drag-and-drop.",
    img: "/Balekai.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "https://github.com/NishanthVaidya/balekai-app",
  },
  {
    id: 3,
    title: "Space Invaders — Rainbow DQN",
    des: "Rainbow DQN agent for Atari Space Invaders: prioritised replay, n-step, Noisy Nets, C51. Python/PyTorch; training, evaluation, watch scripts.",
    img: "/spaceinvaders.jpg",
    iconLists: ["/re.svg", "/grid.svg", "/stream.svg", "/app.svg"],
    link: "https://github.com/NishanthVaidya/Space-Invaders-Rainbow",
  },
  {
    id: 4,
    title: "HirePay",
    des: "Hiring and payment management: Spring Boot, React, JWT, RBAC, document/umbrella agreement workflow, Google Drive integration.",
    img: "/hirepay.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/dock.svg"],
    link: "https://github.com/NishanthVaidya/jr-hirepay-backend",
  },
  {
    id: 5,
    title: "Dice-Blackjack",
    des: "Two-player iOS game (SwiftUI): dice + blackjack-style target 16, betting slider, animations, rules modal.",
    img: "/diceblackjack.jpg",
    iconLists: ["/s.svg", "/grid.svg", "/app.svg"],
    link: "https://github.com/NishanthVaidya/Dice-Blackjack",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern · CXTec",
    desc: "I worked on enterprise data engineering and database reliability, cleaning and restructuring large-scale production data to improve system integrity and reporting accuracy.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer Intern · Just Results",
    desc: "I built secure backend infrastructure and workflow systems, enforcing business rules, access control, and auditability in a production-grade Spring Boot platform.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer / Consultant · Deloitte",
    desc: "I developed enterprise automation and decision systems, designing rule engines and REST services that powered complex quote-to-order business processes.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Solutions Engineer · Oracle",
    desc: "I built integration platforms and analytics systems that connected enterprise applications, enforced governance, and accelerated engineering productivity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Software Engineer · Tech Mahindra",
    desc: "I engineered high-performance backend systems and real-time data pipelines, scaling APIs and orchestration layers to support large transaction volumes and industrial monitoring use cases.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/nishanthvaidya",
    img: "/link.svg",
  },
  {
    id: 2,
    link: "https://github.com/NishanthVaidya",
    img: "/git.svg",
  },
  {
    id: 3,
    link: "https://www.instagram.com/nisvaidya/",
    img: "/insta.svg",
  },
];
