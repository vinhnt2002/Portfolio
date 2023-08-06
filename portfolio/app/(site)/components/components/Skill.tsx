import React from "react";
import { SkillIcon } from "./SkillIcon";

type Icon = {
  name: string;
  imageSrc: string;
  content: string;
};

const Skill = () => {
  const iconList: Icon[] = [
    {
      name: "@HTML5",
      imageSrc: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      content: "HTML5 - Web markup language. "
    },
    {
      name: "@CSS3",
      imageSrc: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      content: "CSS3 - Web styling language. ",
    },
    {
      name: "@Sass",
      imageSrc: "https://tse3.mm.bing.net/th?id=OIP.bUVK5EiCXfTNgPt2vQu9agHaHa&pid=Api&P=0&h=180",
      content: "Sass - Powerful CSS preprocessor. ",
    },
    {
      name: "@JavaScript",
      imageSrc: "https://ictacademy.com.ng/wp-content/uploads/2020/02/92.-JavaScript-logo.png",
      content: "JavaScript - Interactive web language. ",
    },
    {
      name: "@TypeScript",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
      content: "TypeScript - Typed JavaScript superset. ",
    },
    {
      name: "@react",
      imageSrc: "https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png",
      content: "React - JavaScript UI library. The React Framework – @vercel.",
    },
    {
      name: "@Nextjs",
      imageSrc: "https://tse3.mm.bing.net/th?id=OIP.JgRe9P1av-SzGjJ2lxmmmgHaHa&pid=Api&P=0&h=180",
      content: "The React Framework – created and maintained by @vercel.",
    },
    {
      name: "@Redux Statement",
      imageSrc: "https://www.pinclipart.com/picdir/middle/202-2022380_however-redux-has-a-functional-programming-based-nature.png",
      content: "Redux - Predictable state container. The React Framework – @vercel.",
    },
    {
      name: "@Nodejs",
      imageSrc: "https://www.liblogo.com/img-logo/no6273n057-node-js-logo-nodejs-transparent-logo-google-search.png",
      content: "Node.js - Server-side JavaScript runtime. ",
    },
    {
      name: "@MongoDB",
      imageSrc: "https://pluspng.com/img-png/mongodb-png--770.png",
      content: "MongoDB - NoSQL database. ",
    },
    {
      name: "@MySQL",
      imageSrc: "https://tse1.mm.bing.net/th?id=OIP.saG0zQiHbaVDJZ4tKayaCgHaHa&pid=Api&P=0&h=180",
      content: "MySQL - Relational database. ",
    },
    {
      name: "@Git",
      imageSrc: "https://tse1.mm.bing.net/th?id=OIP.9MZPjSJLG4lgkEH4Qzqa2AHaEO&pid=Api&P=0&h=180",
      content: "Git - Version control system. ",
    },
  ];
  
  
  return (
    <section className="flex flex-col w-full rounded-sm border-2 bg-white p-4 shadow-lg mt-5">
      <h1 className="font-semibold text-lg">Skills</h1>
      <section className="flex flex-col md:flex-row justify-between">
        <div className="flex-[40%]">
           <div className="w-[90%] p-2">
           {iconList.map((icon) => (
              <SkillIcon key={icon.name} icon={icon} />
            ))}
           </div>
        </div>

        <div className="flex-[60%] flex justify-between gap-1 flex-col lg:flex-row text-slate-600">
          {/* language  */}
          <div className="flex flex-col gap-1 text-sm ">
            <h3>
              <span className="text-orange-500 font-bold">Backend</span>:
              NodeJS- ExpressJS
            </h3>
            <h3>
              <span className="text-orange-500 font-bold">Frontend</span>:
              ReactJS/NextJS/React Native
            </h3>
            <div className="ml-2 w-[300px] text-sm">
              <li>
                <span>State management: Redux - ReduxToolkit</span>
              </li>
              <li>
                <span>UI library: Bootstrap, Material UI, TailwindCSS</span>
              </li>
              <li>
                <span>Styling: CSS3, Sass, Styled Components</span>
              </li>
              <li>
                <span>API: RESTful API, GraphQL</span>
              </li>
              <li>
                <span>Responsive web design</span>
              </li>
              <li>
                <span>Basic SEO</span>
              </li>
            </div>
          </div>
          {/* order  */}
          <div className="text-sm">
            <h3 className="text-orange-500 font-bold">Order:</h3>
            <div className="ml-4 w-[300px] text-sm">
              <li>
                <span>State management: Redux - ReduxToolkit</span>
              </li>
              <li>
                <span>UI library: Bootstrap, Material UI, TailwindCSS</span>
              </li>
              <li>
                <span>Styling: CSS3, Sass, Styled Components</span>
              </li>
              <li>
                <span>API: RESTful API, GraphQL</span>
              </li>
              <li>
                <span>Responsive web design</span>
              </li>
              <li>
                <span>Basic SEO</span>
              </li>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skill;
