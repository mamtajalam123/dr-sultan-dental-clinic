"use client";

import AboutIntro from "../components/about/AboutIntro";
import Breadcrumb from "../components/about/Breadcrumb";
import Certifications from "../components/about/Certifications";
import Founder from "../components/about/Founder";
import MissionVision from "../components/about/MissionVision";
import Process from "../components/about/Process";
import Stats from "../components/about/Stats";
import Story from "../components/about/Story";
import Team from "../components/about/Team";
import Technology from "../components/about/Technology";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";



export default function AboutPage() {
  return (
  <>

   <Breadcrumb />

   < AboutIntro/>

   <Story/>

   <MissionVision/>

   <WhyChooseUs/>

   <Founder/>

   <Team/>

   <Gallery/>

   <Technology />

   <Certifications/>

   <Process/>

   <Stats/>

   <Testimonials/>

   <FAQs/>

   <CTA/>
      

     </>
  );
}