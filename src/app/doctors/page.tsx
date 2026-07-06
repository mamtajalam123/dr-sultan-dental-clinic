import Founder from "../components/about/Founder";
import Process from "../components/about/Process";
import Team from "../components/about/Team";
import Technology from "../components/about/Technology";
import Experience from "../components/doctors/Experience";
import Hero from "../components/doctors/Hero";
import Qualifications from "../components/doctors/Qualifications";
import Specialists from "../components/doctors/Specialists";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";
import Testimonials from "../components/home/Testimonials";



export default function DoctorsPage() {
  return (
    <main>
      <Hero />

      <Founder />


      <Specialists/>

      <Experience/>

      <Qualifications/>

      <Technology />

      <Process/>

      <Testimonials />

      <FAQs />

      <CTA />
    </main>
  );
}