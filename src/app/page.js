"use client"
import Image from "next/image";
import { Kalam , Cabin } from "next/font/google";
import Typing from "./components/Typing";
import Hero from "./components/Hero";
import DownloadCV from "./components/DownloadCV";

const cobin = Cabin({subsets:["latin"]})
const kalam = Kalam({subsets:["latin"] , weight:["400"]})


export default function Home() {
  return (
    <>
    <div className={` flex flex-col gap-y-5 p-5 md:p-10`}>
    <Image src={"/1.jpg"} width={50} height={90} alt="Seyed Ehsan Hosseini" className="rounded-md shadow-2xl"></Image>
    <h1 className={`${cobin.className} text-4xl md:text-6xl font-medium`}>Seyed Ehsan Hosseini</h1>
      <h2 className={`${kalam.className} text-3xl md:text-4xl font-semibold text-slate-200`}>Frontend Developer</h2>
      <Typing/>
      <Hero/>
    </div>
    </>
  );
}
