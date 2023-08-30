"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCity, FaUniversity } from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import Image from "next/image";

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
        <div className="flex items-center gap-2 m-4 text-sm">
          <div>
            <FaCity />
          </div>
          <p>
            Lives in{" "}
            <span className="text-black font-medium">
              Ho Chi Minh City, Vietnam
            </span>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 m-4 text-sm">
          <div>
            <FaUniversity />
          </div>
          <p>
            Studied Sotfware Engineering at
            <Link
              href="https://hcmuni.fpt.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-black font-medium "
            >
              {" "}
              FPT University.{" "}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 m-4 text-sm">
          <div>
            <AiFillMail />
          </div>
          <a
            href="mailto:vinhntse2002@gmail.com"
            className="hover:underline font-medium"
          >
            vinhntse2002@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 m-4 text-sm">
          <div>
            <AiFillPhone />
          </div>
          <a href="tel:0382703625" className="hover:underline font-medium">
            0382703625
          </a>
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
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-14 p-1 bg-orange-500 rounded-full flex justify-center items-center ">
                <IoSchoolSharp className="text-white text-xl" />
              </div>
              <div className="w-[2px] h-full bg-orange-500"></div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-bold text-base">
                    Student - Major in Software Engineer
                  </h3>
                  <div className="flex justify-start md:justify-end gap-2 items-center">
                    <Image
                      src="/image/fpt_logo.jpg"
                      alt="logo"
                      width={30}
                      height={30}
                    />
                    <Link
                      href="https://uni.fpt.edu.vn/en-US/Default.aspx"
                      className="hover:underline font-bold text-sm text-black"
                    >
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
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 p-1 bg-orange-500 rounded-full flex justify-center items-center ">
                <PiBagFill className="text-white text-xl" />
              </div>
              <div className="w-[2px] h-full bg-orange-500"></div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-bold text-base">
                    Internship - Web Developer
                  </h3>
                  <div className="flex justify-start md:justify-end gap-2">
                    icon
                    <Link href="https://uni.fpt.edu.vn/en-US/Default.aspx">
                      Wishky
                    </Link>
                  </div>
                </div>
                <span>Time</span>
              </div>
              <p className="mt-2 w-[90%]">NextJs</p>
              <p className="mt-2 w-[90%]">
                {" "}
                Subject: OOP, Data Structure and Algorithms, UI/UX, Requirements
                Analysis and Design...
              </p>
              <p className="mt-2 w-[90%]">
                Animation/effect with css/scss, lottie
              </p>
              <p className="mt-2 w-[90%]">SEO support website in NextJS</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
