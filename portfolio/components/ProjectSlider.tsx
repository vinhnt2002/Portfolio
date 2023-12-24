import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface ProjectSliderProps {
  project: any;
}

const ProjectSlider = ({ project }: ProjectSliderProps) => {
    const [languages, setLanguages] = useState(project.languages);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prevIndex => 
            prevIndex === project.languages.length - 1 ? 0 : prevIndex + 1  
          );
        }, 3000);
        return () => clearInterval(interval);
      }, [project.languages.length]);
  return (
    <div>
      {languages.slice(index, index + 3).map((language: any, index: any) => (
        <Button
          key={index}
          variant={"secondary"}
          className="hover:bg-neutral-300"
        >
          {language}
        </Button>
      ))}
    </div>
  );
};

export default ProjectSlider;
