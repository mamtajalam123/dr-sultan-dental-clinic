import Technology from "@/app/components/about/Technology";
import BeforeAfter from "@/app/components/gallery/BeforeAfter";
import CTA from "@/app/components/home/CTA";
import FAQs from "@/app/components/home/FAQs";
import Testimonials from "@/app/components/home/Testimonials";
import Benefits from "@/app/components/services/Benefits";
import Hero from "@/app/components/services/Hero";
import Overview from "@/app/components/services/Overview";
import Procedure from "@/app/components/services/Procedure";


export default function GeneralDentistryPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Benefits />
      <Procedure />
      <Technology />
      <BeforeAfter />
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  );
}