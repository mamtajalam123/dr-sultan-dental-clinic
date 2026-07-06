import AboutUs from "../components/home/AboutUs";
import CTA from "../components/home/CTA";
import Doctors from "../components/home/Doctors";
import FAQs from "../components/home/FAQs";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";



export default function HomePage() {
  return (
    <>
   
      <Hero />

      <Services/>

      <AboutUs/>

      <WhyChooseUs/>

      <CTA/>

      <Doctors/>

      <Testimonials/>

      <Gallery/>

      <FAQs/>
    </>
  );
}