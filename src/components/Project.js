import React from "react";
import Portfolio from "./Portfolio";

const projects = [
  {
    id: 0,
    title: "Cocktails with Kanye",
    image: "/img/cwk.png",
    description: "A cocktail API featuring quotes form Kanye West.",
    repo: "https://github.com/JamesDartmouth/Cocktails-with-Kanye",
    deploy: "https://jamesdartmouth.github.io/Cocktails-with-Kanye/",
  },
  {
    id: 1,
    title: "JDA-Bank",
    image: "/img/jda.png",
    description: "JDA Bank is a full stack development project that allows money transfers between accounts.",
    repo: "https://github.com/Nivix047/JDA-Bank",
    deploy: "https://Nivix047.github.io/JDA-Bank/",
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
