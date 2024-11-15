import {
  Benefits,
  Companies,
  Courses,
  Faq,
  HeroSection,
  HomeVideo,
  PricingCo,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Companies />
      <HomeVideo />
      <Benefits />
      <Courses />
      <Testimonials />
      <PricingCo />
      <Faq />
    </>
  );
}
