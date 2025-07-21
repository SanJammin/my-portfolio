const projects = [
  {
    id: 1,
    name: "Vanlife",
    slug: "vanlife",
    image: "/assets/img/vanlife.png",
    live: "https://vanlife-jammin.netlify.app/",
    code: "https://github.com/SanJammin/Vanlife",
    description:
      "A fully responsive React app for browsing and filtering van rentals, powered by Firebase. Includes dynamic routing with React Router and showcases clean, component-based UI.",
    stack: ["React", "Vite", "Firebase", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Assembly Endgame",
    slug: "assembly-endgame",
    image: "/assets/img/assembly.png",
    live: "https://assembly-endgame-hangman.netlify.app/",
    code: "https://github.com/SanJammin/assembly-endgame",
    description:
      "A coding-themed hangman game built with React. Features logic for repeated letters, dynamic language tiles, and fast gameplay. Built to reinforce React state management and conditional rendering.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
  },
  {
    id: 3,
    name: "Freddie’s Diner",
    slug: "freddies-diner",
    image: "/assets/img/diner.png",
    live: "https://restaurant-app-jammin.netlify.app/",
    code: "https://github.com/SanJammin/Restaurant-Ordering-App",
    description:
      "A fully functional menu ordering app using vanilla JavaScript. Includes a working cart, discount logic, and a simulated payment system for hands-on UX testing.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Chrome Extension",
    slug: "chrome-extension",
    image: "/assets/img/extension.png",
    live: "", // not deployed
    code: "https://github.com/SanJammin/Chrome-Extension",
    description:
      "A personalised Chrome extension that displays time, weather, a Korean word of the day, and a rotating Unsplash background. Built with vanilla JS and multiple APIs — still used daily.",
    stack: ["JavaScript", "HTML", "CSS", "APIs"],
  },
];

export default projects;
