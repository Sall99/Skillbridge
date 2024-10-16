"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

import { testimonialData } from "@/components/constants";
import { Typography } from "@/components/typography";
import { Button } from "../button";

interface CardProps {
  name: string;
  imageSrc: string;
  testimonial: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const Card = ({ name, imageSrc, testimonial }: CardProps) => {
  return (
    <motion.div
      className="flex min-h-_250 max-w-_629 flex-col justify-between bg-white p-_30 lg:p-10 2xl:h-_304 2xl:max-w-_783 2xl:p-_50"
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <Typography className="mb-5 text-gray-500 lg:mb-0">
        {testimonial}
      </Typography>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="relative h-_50 w-_50 2xl:h-_62 2xl:w-_62">
            <Image src={imageSrc} alt={name} fill />
          </div>
          <Typography>{name}</Typography>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="secondary" size="medium" className="w-_168 2xl:w-52">
            Read Full Story
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className="m-auto mb-_168 max-w-_1279 px-4 xl:px-0 2xl:max-w-_1596"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className="mb-_62 flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-_300"
        variants={itemVariants}
      >
        <div className="max-w-_1117">
          <Typography variant="h2">Our Testimonials</Typography>
          <Typography className="text-gray-500">
            We take pride in the feedback from our students. Their success
            stories highlight the quality of our courses and the impact on their
            careers.
          </Typography>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="secondary" size="medium" className="w-_168">
            View all
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={containerVariants}>
        <motion.ul className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
          {testimonialData.map(({ name, imageSrc, testimonial }, key) => (
            <motion.li key={key} variants={itemVariants}>
              <Card name={name} imageSrc={imageSrc} testimonial={testimonial} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};
