import {
  Benefits,
  Companies,
  Courses,
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
    </div>
  );
}
