import Wrapper from "@/components/Wrapper";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <p>Copyright &copy; {new Date().getFullYear()} My Portfolio</p>
    </div>
  );
};

export default Footer;
