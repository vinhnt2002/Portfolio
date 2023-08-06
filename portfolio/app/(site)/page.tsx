import Image from "next/image";
import Header from "./components/Header";
import { Separator } from "@/components/ui/separator";
import Content from "./components/Content";

export default function Home() {
  return (
    <main 
    // className="w-full flex flex-col "
    >
      <Header />
      <Content/>
    </main>

  );
}
