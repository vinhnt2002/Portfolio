import Image from "next/image";
import Header from "./_components/Header";
import { Separator } from "@/components/ui/separator";
import Content from "./_components/Content";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main 
    className="w-full flex flex-col"
    >
      <Header />
      <Content/>
      <Footer/>
    </main>

  );
}
