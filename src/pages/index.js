import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/component/Header";
import { ApiBlog } from "@/component/ApiBlog";
import { Footer } from "@/component/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" w-screen  xl:W-[1200PX] flex flex-col gap-[100px]">
      <Head />
      <Header />
      <ApiBlog />
      <Footer />
    </div>
  );
}
