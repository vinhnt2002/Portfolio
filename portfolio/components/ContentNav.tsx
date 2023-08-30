import React, { useState, useEffect, useRef, useCallback } from "react";

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
  const [selectTab, setSelectTab] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(false);
  const [clickScroll, setClickScroll] = useState(false);
  const mobileSticky = 480;
  const desktopSticky = 380;

  const tabs = [
    { label: "About me", ref: aboutRef },
    { label: "Skills", ref: skillRef },
    { label: "Projects", ref: projectRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold =
        window.innerWidth <= 480 ? mobileSticky : desktopSticky;
      setIsSticky(window.scrollY > scrollThreshold);

      if (!clickScroll) {
        const components = [aboutRef, skillRef, projectRef];
        const currentTab = components.findIndex((ref) => {
          const element = ref.current;
          if (element) {
            const rect = element.getBoundingClientRect();
            return (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            );
          }
          return false;
        });

        if (currentTab !== -1) {
          setSelectTab(currentTab);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, skillRef, projectRef, clickScroll]);

  const handleTabClick = useCallback(
    (index: number) => {
      const tabRefs = [aboutRef, skillRef, projectRef];
      onTabCLick(tabRefs[index]);

      
      setClickScroll(true);
      setSelectTab(index);

      setTimeout(() => {
        setClickScroll(false);
      }, 500);
    },
    [aboutRef, skillRef, projectRef, onTabCLick]
  );

  return (
    <>
      <div
        className={`flex justify-center items-center gap-8 cursor-pointer text-sm font-medium ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow transition-transform duration-300 z-10"
            : "relative transform -translate-y-11 z-0 transition-transform duration-300"
        }`}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`p-2  rounded-sm ${
              selectTab === index
                ? "border-b-4 border-orange-500 text-orange-500"
                : "hover:bg-slate-200"
            } ${!isSticky && "m-1"}`}
            onClick={() => handleTabClick(index)}
          >
            <h4>{tab.label}</h4>
          </div>
        ))}
      </div>
      {isSticky && <div className="h-[3.5rem]"></div>}
    </>
  );
};

export default ContentNav;
