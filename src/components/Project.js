import React from "react";
import Portfolio from "./Portfolio";

const projects = [
  {
    id: 1,
    title: "Cocktails with Kanye",
    image: "/img/Cocktails.png",
    description: "A cocktail API featuring entertaining quotes from Kanye West.",
    repo: "https://github.com/JamesDartmouth/Cocktails-with-Kanye",
    deploy: "https://jamesdartmouth.github.io/Cocktails-with-Kanye/",
  },
  {
    id: 2,
    title: "JDA-Bank",
    image: "/img/Bank.png",
    description: "JDA Bank is a full stack development project that allows money transfers between accounts.",
    repo: "https://github.com/Nivix047/JDA-Bank",
    deploy: "https://Nivix047.github.io/JDA-Bank/",
  },
  {
    id: 3,
    title: "Text Editor",
    image: "/img/Jate.png",
    description: "A downloadable text editor web application that saves the users texts to a database.",
    repo: "https://github.com/JamesDartmouth/Text_Editor",
    deploy: "https://jamesdartmouth.herokuapp.com/",
  },
  {
    id: 4,
    title: "Weather Dasboard",
    image: "/img/Weather.png",
    description: "Weather dashboard that provides weather forecasts for all cities.",
    repo: "https://github.com/JamesDartmouth/challenge-6-weather",
    deploy: "https://jamesdartmouth.github.io/challenge-6-weather/ ",
  },
  {
    id: 5,
    title: "E-Commerce-Back-End",
    image: "/img/Ecommerce.png",
    description: "An application that demonstrates the back-end of an E-commerce platform.",
    repo: "https://github.com/JamesDartmouth/E-Commerce-Back-End",
    deploy: "https://jamesdartmouth.github.io/E-Commerce-Back-End/ ",
  },
  {
    id: 6,
    title: "Employee Tracker",
    image: "/img/Employee.png",
    description: "An application that assists companies with employee managing and tracking.",
    repo: "https://github.com/JamesDartmouth/Employee-Tracker",
    deploy: "https://jamesdartmouth.github.io/Employee-Tracker/",
  },
  
];

function Project() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Portfolio projects={projects} />
    </div>
  );
}

export default Project;  
