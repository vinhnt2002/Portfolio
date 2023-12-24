import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Header = () => {
  return (
    <main className=" flex items-center justify-center shadow-2xl ">
      <Wrapper>
        <div className="lg:w-full md:w-full sm:w-full relative h-[250px] md:h-[200px]">
          <Image
            src="/image/background.jpg"
            alt="image"
            layout="fill"
            objectFit="fill"
            className="md:rounded-bl-xl md:rounded-br-xl"
          />

          {/* here  */}
          <div className="container ">
            <div className="tail"></div>
            <span className="z-1">Z</span>
            <span className="z-2">Z</span>
            <span className="z-3">Z</span>
            <div className="rabbit-body">
              <div className="face-container">
                <div className="rabbit-face">
                  <div className="ear"></div>
                  <div className="eye-l"></div>
                  <div className="eye-r"></div>
                  <div className="mouth"></div>
                </div>
              </div>
              <div className="leaf"></div>
              <div className="carrot"></div>
              <div className="hand-l"></div>
              <div className="hand-r"></div>
            </div>
            <div className="shadow-rabbit"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-5 relative top-[-2.75rem] left-0 ">
          <div className="flex-shrink-0 w-40 h-40 relative p-1 bg-white rounded-full ">
            <Image
              src="/image/avatar.jpg"
              alt="vinhImg"
              fill
              className="rounded-full p-1"
            />
          </div>

          <div className="md:w-[40%] ml-4 text-center md:text-start">
            <div className="flex flex-col ">
              <h1>VINH NGUYEN</h1>
              <h5 className="text-orange-500 font-bold">
                Web Developer - Javascript/Typescript
              </h5>
              <p className="text-sm">
                I have a passion for web development and Im always looking for
                new challenges.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end md:w-[40%] mr-0 md:mr-8 my-4">
            <div className="flex flex-col">
              <h3 className="flex justify-center">
                <Button size={"lg"} variant={"primary"}>
                  My CV
                </Button>
              </h3>
            </div>
          </div>
        </div>
        <Separator className="relative top-[-2.75rem]" />
      </Wrapper>
    </main>
  );
};

export default Header;
