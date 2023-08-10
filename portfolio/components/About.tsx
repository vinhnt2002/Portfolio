"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const showAboutTimeout = setTimeout(() => {
      setShowAbout(true);
    }, 300);

    return () => clearTimeout(showAboutTimeout);
  }, []);

  return (
    <div className="flex gap-3 flex-col md:flex-row relative top-[-1rem]">
      {/* left  */}
      <div
        className={`flex-[37%] h-full rounded-sm border-2 bg-white p-4 shadow-lg transform ${
          showAbout
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } transition-transform duration-500 ease-linear`}
      >
        <h1 className="font-semibold text-lg">About me</h1>
        <span className="text-sm flex items-center justify-center mt-5">
          Success is based on your own efforts.
        </span>
        <div className="flex gap-2 m-4 text-sm">
          <div>icon</div>
          <p>Lives in Ho Chi Minh City, Vietnam.</p>
        </div>
        <div className="flex gap-2 m-4 text-sm">
          <div>icon</div>
          <p>Lives in Ho Chi Minh City, Vietnam.</p>
        </div>
      </div>
      {/* {right  } */}
      <div
        className={`flex-[63%]  h-full rounded-sm border-2 bg-white p-4 shadow-lg transform ${
          showAbout
            ? "-translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-transform duration-500 ease-linear`}
      >
        <h1 className="font-semibold text-lg">Journey</h1>

        <section>
        <section className="flex gap-2 m-4 text-sm">
            <div className="flex flex-col items-center">
              <div>icon</div>
              <div className="w-[2px] h-full bg-orange-500"></div>
            </div>
            <div >
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3>Student - Major in Software Engineer</h3>
                  <div className="flex justify-start md:justify-end gap-2">
                    icon
                    <Link href="https://uni.fpt.edu.vn/en-US/Default.aspx">
                      FPT University
                    </Link>
                  </div>
                </div>
                <span>Time</span>
              </div>
              <p className="mt-2 w-[90%]">
                Subject: OOP, Data Structure and Algorithms, UI/UX, Requirements
                Analysis and Design...
              </p>

            </div>
          </section>
          <section className="flex gap-2 m-4 text-sm">
            <div className="flex flex-col items-center">
              <div>icon</div>
              <div className="w-[2px] h-full bg-orange-500"></div>
            </div>
            <div >
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3>Student - Major in Software Engineer</h3>
                  <div className="flex justify-start md:justify-end gap-2">
                    icon
                    <Link href="https://uni.fpt.edu.vn/en-US/Default.aspx">
                      FPT University
                    </Link>
                  </div>
                </div>
                <span>Time</span>
              </div>
              <p className="mt-2 w-[90%]">
                Subject: OOP, Data Structure and Algorithms, UI/UX, Requirements
                Analysis and Design...
              </p>
              <p className="mt-2 w-[90%]">
                Subject: OOP, Data Structure and Algorithms, UI/UX, Requirements
                Analysis and Design...
              </p>
              <p className="mt-2 w-[90%]">
                Subject: OOP, Data Structure and Algorithms, UI/UX, Requirements
                Analysis and Design...
              </p>
              <p className="mt-2 w-[90%]">
                Subject: OOP, Data Structure and Algorithms, UI/UX, Requirements
                Analysis and Design...
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
