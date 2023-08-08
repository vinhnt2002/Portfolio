import Wrapper from "@/components/Wrapper";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <>
      <main className="w-full flex items-center justify-center m-5">
        <Wrapper>
          <Separator className="w-[95%] bg-slate-400" />
          <div className="flex justify-between mt-5">
            <div>Vinh Nguyen</div>
            <div className="mr-10 md:mr-16">ICON</div>
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default Footer;
