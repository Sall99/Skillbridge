"use client";
import React from "react";
import Slider from "react-slick";

import { Card, Typography } from "@/components";
import { testimonialData } from "@/constants";
import { MoveLeft, MoveRight } from "lucide-react";
import { SignUpForm } from "@/components/ui/form/signup-form";

export default function Signup() {
  return (
    <section className="layout mb-_100 mt-_50 flex flex-col-reverse gap-10 lg:mt-20 lg:flex-row lg:gap-0 2xl:mt-_100">
      <div className="lg:py-_100 lg:pr-20 2xl:py-_150 2xl:pr-_100">
        <Typography
          variant="h2"
          headingSize="sm"
          className="mb-3 font-semibold"
        >
          Students Testimonials
        </Typography>
        <Typography variant="p" paragraphSize="sm">
          Hear from our students about their experiences and how our courses
          helped them grow in their careers. Discover their success stories and
          what they loved the most about learning with us!
        </Typography>
        <div className="carroussel-container 2xl:max-w-_829 m-auto mt-_60 md:w-_478 xl:w-_629">
          <Carroussel />
        </div>
      </div>

      <SignUpForm />
    </section>
  );
}

const Carroussel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <MoveRight />,
    prevArrow: <MoveLeft />,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialData.map(({ name, imageSrc, testimonial }, key) => (
        <li key={key} className="overflow-hidden rounded-md">
          <Card name={name} imageSrc={imageSrc} testimonial={testimonial} />
        </li>
      ))}
    </Slider>
  );
};
