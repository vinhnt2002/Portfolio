import Image from "next/image";
import React from "react";

type ProjectData = {
  name: string;
  imageSrc: string;
  content: string;
  languages: string[];
  visit: string;
};

const Projects = () => {
  const allProjects: ProjectData[] = [
    {
      name: "Project 1",
      imageSrc: "/image/avatar.jpg",
      content: "Project 1 description...",
      languages: ["JavaScript", "React", "Nextjs"],
      visit: "https://project1.example.com",
    },
    {
      name: "Project 2",
      imageSrc: "/image/avatar.jpg",
      content: "Project 2 description...",
      languages: ["Typescript", "Nextjs"],
      visit: "https://project2.example.com",
    },
    {
      name: "Project 3",
      imageSrc: "/image/avatar.jpg",
      content: "Project 2 description...",
      languages: ["Typescript", "Nextjs"],
      visit: "https://project2.example.com",
    },
  ];

  return (
    <section>
      <h1 className="font-semibold text-lg m-5">My Projects</h1>

      <div className="grid grid-cols-2 gap-10 mb-10 m-6 mr-8 md:mr-10">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="relative  h-[400px] flex flex-col items-center justify-center
           md:col-span-1 col-span-2 rounded-2xl rounded-br-2xl border border-solid border-black bg-white p-6 dark:bg-white"
          >
            <div className="absolute top-0 -right-[11px] -z-10 h-[102%] w-[102%] rounded-[2rem] rounded-br-3xl bg-black dark:bg-white"></div>

            {/* Content */}
            <div className="w-full">
              <div className="overflow-hidden rounded-lg relative h-[35vh] top-[-2.75rem] w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>{project.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
