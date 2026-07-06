import AppointmentForm from "../components/appointment/AppointmentForm";
import ClinicInfo from "../components/appointment/ClinicInfo";
import Hero from "../components/appointment/Hero";
import FAQs from "../components/home/FAQs";


export default function AppointmentPage() {
  return (
    <>
      <Hero />
      <AppointmentForm />
      <ClinicInfo />
      <FAQs />
    </>
  );
}