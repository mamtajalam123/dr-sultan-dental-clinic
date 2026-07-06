import Technology from "../components/about/Technology";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Categories from "../components/services/Categories";
import FeaturedServices from "../components/services/FeaturedServices";
import Hero from "../components/services/Hero";
import Pricing from "../components/services/Pricing";
import TreatmentProcess from "../components/services/TreatmentProcess";
import TreatmentsGrid from "../components/services/TreatmentsGrid";


export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedServices />
      <TreatmentsGrid />
      <WhyChooseUs />
      <TreatmentProcess />
      <Technology />
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  );
}