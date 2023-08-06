"use client";
import StickyNav from "@/components/StickyNav";
import React, { useEffect, useState } from "react";

interface ContentNavProps {
  onTabCLick: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}

const ContentNav: React.FC<ContentNavProps> = ({
  onTabCLick,
  aboutRef,
  skillRef,
  projectRef,
}) => {
  const [selectTab, setSelectTab] = useState<Number>(0);

  const handleTabClick = (index: Number) => {
    setSelectTab(index);
    switch (index) {
      case 0:
        onTabCLick(aboutRef);
        // console.log("click");
        break;
      case 1:
        onTabCLick(skillRef);
        break;
      case 2:
        onTabCLick(projectRef);
        break;
      default:
        break;
    }
  };
  return (
    <StickyNav>
      <div
        className={`hover:bg-slate-200 p-2 m-1   ${
          selectTab === 0 ? "border-b-4  border-orange-500 text-orange-500" : ""
        }`}
        onClick={() => handleTabClick(0)}
      >
        <h4>About me</h4>
      </div>
      <div
        className={`hover:bg-slate-200 p-2 m-1 ${
          selectTab === 1 ? "border-b-4 border-orange-500 text-orange-500" : ""
        }`}
        onClick={() => handleTabClick(1)}
      >
        <h4>Skills</h4>
      </div>
      <div
        className={`hover:bg-slate-200 p-2 m-1 ${
          selectTab === 2 ? "border-b-4 border-orange-500 text-orange-500" : ""
        }`}
        onClick={() => handleTabClick(2)}
      >
        <h4>Projects</h4>
      </div>
    </StickyNav>
  );
};

export default ContentNav;
