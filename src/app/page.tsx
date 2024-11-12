import {
  Benefits,
  Companies,
  Courses,
  // Faq,
  HeroSection,
  HomeVideo,
  Pricing,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Companies />
      <HomeVideo />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      {/*<Faq /> */}
    </div>
  );
}
