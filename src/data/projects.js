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
    details: [
      "Built with React Router for fast, seamless navigation between pages.",
      "Custom filtering logic allows users to view van types by category.",
      "Firebase handles backend data and authentication (in development).",
      "Designed to mimic a real-world rental platform with a polished, responsive UI.",
      "Gave me my first exposure to component reuse and route-based layout patterns."
    ]
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
    details: [
      "Theme inspired by programming languages as ‘lives’ in a hangman format.",
      "Letters guessed update dynamically via component state.",
      "Handled tricky cases like repeated letters and win/lose detection.",
      "Great project for mastering conditional rendering in React.",
      "Styled using CSS modules for visual clarity."
    ]
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
    details: [
      "Built entirely with vanilla JS — no libraries or frameworks.",
      "Includes dynamic cart logic and deal-based discounts.",
      "Features basic form validation and fake payment processing.",
      "Great practice in modular JS and DOM manipulation.",
      "Clean, restaurant-style design with emoji-driven UI for fun UX."
    ]
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
    details: [
      "Fetches random images from Unsplash’s API to update background on load.",
      "Displays Korean vocabulary with live translation on hover.",
      "Local weather data fetched using a geolocation-based API.",
      "Time updates in real-time using `setInterval`.",
      "Developed and bundled manually as a `.crx` for local install — still use it every day."
    ]
  },
];

export default projects;
