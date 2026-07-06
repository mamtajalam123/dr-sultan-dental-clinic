
import AppointmentInfo from "../components/contact/AppointmentInfo";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import EmergencyContact from "../components/contact/EmergencyContact";
import Hero from "../components/contact/Hero";
import Map from "../components/contact/Map";
import OpeningHours from "../components/contact/OpeningHours";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";




export default function Page() {
  return (
    <main>

     <Hero/>

     <ContactCards />   

     <ContactForm/>

     <AppointmentInfo/>

     <Map/>

     <OpeningHours/>

     <EmergencyContact/>
  
      <FAQs />

      <CTA />
    </main>
  );
}