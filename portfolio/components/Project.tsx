import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import ProjectSlider from "./ProjectSlider";

type ProjectData = {
  name: string;
  imageSrc: string;
  content: Content;
  languages: string[];
  visit: string;
  githubProject: string;
};

type Content = {
  position: string;
  teamSize: string;
  desc: string;
};

const Projects = () => {
  const allProjects: ProjectData[] = [
    {
      name: "Homie Store",
      imageSrc: "/image/homie.png",

      content: {
        position: "Leader-FE",
        teamSize: "4",
        desc: "Our team worked with Ngan, Homie's owner. She wanted an e-commerce website so customers could view product in the store",
      },
      languages: ["JavaScript", "MySQL", "Nextjs"],
      visit: "https://tiemhomie.com/",
      githubProject: "https://github.com/vinhnt2002/Homie",
    },
    {
      name: "CMS Shop-Eccomerce-Admin",
      imageSrc: "/image/CMS-homie.png",
      content: {
        position: "Fullstack",
        teamSize: "1",
        desc: "Dashboard is Admin & API. Create, update, delete categories, products, filters. Upload & change product images. Search with pagination. Feature products. View orders, sales, revenue graphs. Learn Clerk auth, Stripe, MySQL, Prisma, PlanetScale.",
      },
      languages: ["Typescript", "Nextjs", "MySQL"],
      visit: "https://shop-eccomerce-admin.vercel.app/",
      githubProject: "https://github.com/vinhnt2002/shop-eccomerce-admin",
    },
    {
      name: "LMS system Nodejs",
      imageSrc: "/image/LMS.png",
      content: {
        position: "BE",
        teamSize: "1",
        desc: "An LMS built with Node.js, Express and MongoDB. Includes admin dashboard for managing courses, users and content. Implements JWT authentication, sendmail for emails and notifications.",
      },
      languages: ["Nodejs", "Express", "MongoDB", "JWT"],
      visit: "#",
      githubProject: "https://github.com/vinhnt2002/lms-nodejs",
    },
    {
      name: "Discord clone",
      imageSrc: "/image/threads.png",
      content: {
        position: "Fullstack",
        teamSize: "1",
        desc: "Built a fullstack Discord clone using Typescript, MySQL, and Next.js. Includes realtime messaging, channels, user profiles, and authentication. Solo developed the entire application to replicate core Discord functionality and UI.",
      },
      languages: ["Typescript","MySQL", "Nextjs"],
      visit: "https://threads-flax-eight.vercel.app/",
      githubProject: "https://github.com/vinhnt2002/discord-clone",
    },
    {
      name: "Social app",
      imageSrc: "/image/threads.png",
      content: {
        position: "Fullstack",
        teamSize: "1",
        desc: "The social app is a fullstack project built by a solo developer. It is built using Typescript, Next.js, and MongoDB. The app allows users to create threads and posts to share updates, thoughts, and media.",
      },
      languages: ["Typescript","MongoDB", "Nextjs"],
      visit: "https://threads-flax-eight.vercel.app/",
      githubProject: "https://github.com/vinhnt2002/Threads",
    },
  ];
  const handleSubmit = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section>
      <h1 className="font-semibold text-lg m-5">My Projects</h1>

      <div className="grid grid-cols-2 gap-10 mb-10 m-6 mr-8 md:mr-10">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="relative  h-[560px] sm:h-[480px] md:h-[500px] 
           md:col-span-1 col-span-2 rounded-2xl rounded-br-2xl border border-solid border-black bg-white p-6 dark:bg-white"
          >
            <div className="absolute top-0 -right-[11px] -z-10 h-[102%] w-[102%] rounded-[2rem] rounded-br-3xl bg-black dark:bg-white"></div>

            {/* Content */}
            <div className="w-full h-full flex flex-col">
              <div className="overflow-hidden rounded-lg relative h-[35vh]">
              <Link href={project.visit}>
              <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
              </div>
              <div className="mt-4 flex-1 ">
                {/* <Popover>
                  <PopoverTrigger>Open</PopoverTrigger>
                  <PopoverContent>
                    Place content for the popover here.
                  </PopoverContent>
                </Popover> */}

                <h1 className="ml-2 mb-2 font-bold mt-2">{project.name}</h1>
                <div className="flex gap-2 justify-center md:justify-start">
                  {project.languages.slice(0, 3).map((language, index) => (
                    <Button
                      key={index}
                      variant={"secondary"}
                      className="hover:bg-neutral-300"
                    >
                      {language}
                    </Button>
                  ))}

                  {/* <ProjectSlider project={project}/> */}
                </div>
                <h6 className="h-full mt-2 px-4 text-sm  text-cyan-800 ">
                  <ul className="list-disc">
                    <li>Team size: {project.content.teamSize}</li>
                    <li>Position: {project.content.position}</li>
                    <li>Description: {project.content.desc}</li>
                  </ul>
                </h6>
              </div>
              <div className="mt-4 flex justify-between ">
                <Button
                  onClick={() => handleSubmit(project.visit)}
                  value={project.visit}
                  variant={"link"}
                  className="hover:bg-neutral-300"
                >
                  Visit
                </Button>

                <div className="w-10 h-8 rounded-full bg-white hover:bg-slate-200 flex justify-center items-center">
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
