import Image from "next/image";
import React from "react";
import chatImg from "../public/assets/projects/chatGPT.png";
import nextchatImg from "../public/assets/projects/nextchat.png";
import scotorImg from "../public/assets/projects/scotor.png";
import jamatoImg from "../public/assets/projects/jamato.png";
import ProjectItem from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#6e6d6d]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Next JS & Tailwind CSS Landing Page"
            backgroundImg={scotorImg}
            projectUrl="/property"
            tech="Next JS and Tailwind "
          />
          <ProjectItem
            title="Food App"
            backgroundImg={jamatoImg}
            projectUrl="/"
            tech="Nextj JS"
          />
          <ProjectItem
            title="Chat App"
            backgroundImg={nextchatImg}
            projectUrl="/"
            tech="Nextj JS"
          />
          <ProjectItem
            title="chatGPT"
            backgroundImg={chatImg}
            projectUrl="/"
            tech="Nextj JS and Tailwind CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
