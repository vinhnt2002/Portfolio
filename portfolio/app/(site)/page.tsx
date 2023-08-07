import Image from "next/image";
import Header from "./components/Header";
import { Separator } from "@/components/ui/separator";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main 
    // className="w-full flex flex-col "
    >
      <Header />
      <Content/>
      <Footer/>
    </main>

  );
}
