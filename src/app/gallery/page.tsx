"use client";

import Technology from "../components/about/Technology";
import Awards from "../components/gallery/Awards";
import BeforeAfter from "../components/gallery/BeforeAfter";

import ClinicTour from "../components/gallery/ClinicTour";
import Gallery from "../components/gallery/Gallery";


import GalleryHero from "../components/gallery/Hero";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";



export default function Page() {
  return (
    <main>
      <GalleryHero />

   
      <Gallery />

     
      
      <BeforeAfter />

      <ClinicTour />

      <Technology/>

      <Awards/>

      <FAQs/>

      <CTA/>
     

    </main>
  );
}