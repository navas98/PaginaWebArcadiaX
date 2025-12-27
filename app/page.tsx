import { Navbar } from "@/components/layaout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { WhatIs } from "@/components/home/WhatIs";
import { Architecture } from "@/components/home/Architecture";
import { Advances } from "@/components/home/Advances"
import { Exclusive } from "@/components/home/Exclusive";
import { Footer } from "@/components/home/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      
     
      <Advances />
     
      <Footer />
    </>
  );
}
