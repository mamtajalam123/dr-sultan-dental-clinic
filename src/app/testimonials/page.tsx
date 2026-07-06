"use client";

import BeforeAfter from "../components/gallery/BeforeAfter";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";
import FeaturedReview from "../components/testimonials/FeaturedReview";
import GoogleReviews from "../components/testimonials/GoogleReviews";
import Hero from "../components/testimonials/Hero";
import PatientStories from "../components/testimonials/PatientStories";
import Statistics from "../components/testimonials/Statistics";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";



export default function Page() {
  return (
    <main>

     <Hero/>   

     <Statistics/>

     <FeaturedReview/>

     <TestimonialsGrid/>

     <BeforeAfter/>

     <GoogleReviews/>

     <PatientStories/>
  

      <FAQs/>

      <CTA/>
     

    </main>
  );
}