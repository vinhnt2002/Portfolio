import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
type ProjectData = {
  name: string;
  imageSrc: string;
  content: string;
  languages: string[];
  visit: string;
  githubProject: string;
};

const Projects = () => {
  const allProjects: ProjectData[] = [
    {
      name: "Project 1",
      imageSrc: "/image/avatar.jpg",
      content:
        "Project 1 description... Project 1 description...Project 1 description... ",
      languages: ["JavaScript", "React", "Nextjs"],
      visit: "https://homie-seven.vercel.app",
      githubProject: "https://github.com/vinhnt2002/Homie",
    },
    {
      name: "Project 2",
      imageSrc: "/image/avatar.jpg",
      content: "Project 2 description...",
      languages: ["Typescript", "Nextjs"],
      visit: "https://project2.example.com",
      githubProject: "https://github.com/vinhnt2002/Homie",
    },
  ];

  const handleSubmit = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section>
      <h1 className="font-semibold text-lg m-5">My Projects</h1>

      <div className="grid grid-cols-2 gap-10 mb-10 m-6 mr-6 md:mr-10">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-[480px] md:h-[500px] 
           md:col-span-1 col-span-2 rounded-2xl rounded-br-2xl border border-solid border-black bg-white p-6 dark:bg-white"
          >
            <div className="absolute top-0 -right-[11px] -z-10 h-[102%] w-[102%] rounded-[2rem] rounded-br-3xl bg-black dark:bg-white"></div>

            {/* Content */}
            <div className="w-full">
              <div className="overflow-hidden rounded-lg relative h-[35vh] ">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 ">
                <h6 className="h-14 text-sm text-center text-cyan-800">
                  {project.content}
                </h6>
                {/* <Popover>
                  <PopoverTrigger>Open</PopoverTrigger>
                  <PopoverContent>
                    Place content for the popover here.
                  </PopoverContent>
                </Popover> */}

                <h1 className="ml-2 mb-2 font-bold">{project.name}</h1>
                <div className="flex gap-2 ">
                  {project.languages.slice(0, 3).map((language, index) => (
                    <Button
                      key={index}
                      variant={"secondary"}
                      className="hover:bg-neutral-300"
                    >
                      {language}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <Button
                    onClick={() => handleSubmit(project.visit)}
                    value={project.visit}
                    variant={"link"}
                    className="hover:bg-neutral-300"
                  >
                    Visit
                  </Button>

                    <div className="rounded-full bg-white hover:bg-slate-200">
                    <Link href={project.githubProject}>
                    <Avatar className="flex items-center justify-center">
                      <AvatarImage
                        src="https://tse4.mm.bing.net/th?id=OIP.POcdOfdtgoclBbzq4W3xbAHaGS&pid=Api&P=0&h=180"
                        className=" w-6 h-6 hover:scale-105 transition-transform duration-300"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Link>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
