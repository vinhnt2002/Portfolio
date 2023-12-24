"use client";
import React, { useRef } from "react";
import Wrapper from "@/components/Wrapper";
import ContentNav from "@/components/ContentNav";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Project";


const Content: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const handleScrollToSecsion = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offset = window.innerHeight * 0.3;
      const targetPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="items-center flex justify-center">
      <Wrapper>
        {/* navigation */}
        <ContentNav
          onTabCLick={handleScrollToSecsion}
          aboutRef={aboutRef}
          skillRef={skillRef}
          projectRef={projectRef}
        />

        {/* content  */}
          <div ref={aboutRef} >
            <About />
          </div>
          <div ref={skillRef}>
            <Skill />
          </div>
          <div ref={projectRef}>
            <Projects />
          </div>
      </Wrapper>
    </div>
  );
};

export default Content;
