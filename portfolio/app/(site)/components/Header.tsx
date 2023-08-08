import Wrapper from "@/components/Wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Header = () => {
  return (
    <main className="w-full flex items-center justify-center shadow-2xl ">
      <Wrapper>
        <div className="lg:w-full md:w-full sm:w-full relative h-[250px] md:h-[200px]">
          <Image
            src="/image/background.jpg"
            alt="image"
            layout="fill"
            objectFit="fill"
            className="md:rounded-bl-xl md:rounded-br-xl"
          />
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

          <div className="w-full md:w-[40%] ml-4 text-center md:text-start">
            <div className="flex flex-col pr-2 ">
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
          <div className="flex justify-center md:justify-end w-full md:w-[40%]">
            right
          </div>
        </div>
        <Separator className="relative top-[-2.75rem]" />
      </Wrapper>
    </main>
  );
};

export default Header;
