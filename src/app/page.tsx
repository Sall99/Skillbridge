import {
  Benefits,
  Companies,
  Courses,
  HeroSection,
  HomeVideo,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Companies />
      <HomeVideo />
      <Benefits />
      <Testimonials />
      <Courses />
    </div>
  );
}
