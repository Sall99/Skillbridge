"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

import { Typography, SectionHeader } from "@/components";
import { Button } from "../button";
import { coursesData } from "@/constants";

interface CardProps {
  title: string;
  duration: string;
  level: string;
  description: string;
  imageUrl: string;
  instructor: string;
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

const Card = ({
  title,
  duration,
  level,
  description,
  imageUrl,
  instructor,
}: CardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="h-_554 w-full bg-white p-6 sm:h-_613 xl:w-_629 xl:p-10 2xl:h-_803 2xl:w-_783 2xl:p-_50"
    >
      <div className="relative m-auto h-_172 w-full xl:h-_266 2xl:h-_380 2xl:w-_683">
        <Image src={imageUrl} alt={title} fill />
      </div>

      <div className="mt-6 flex flex-col justify-between gap-_14 sm:flex-row sm:items-center sm:gap-_30 2xl:mt-_30">
        <div className="flex gap-_30">
          <div className="flex h-8 items-center justify-center rounded-lg border border-gray-100 px-4 text-sm text-gray-500 sm:h-_44 2xl:text-lg">
            {duration}
          </div>
          <div className="flex h-8 items-center justify-center rounded-lg border border-gray-100 px-4 text-sm text-gray-500 sm:h-_44 2xl:text-lg">
            {level}
          </div>
        </div>
        <Typography variant="p" paragraphSize="sm">
          {instructor}
        </Typography>
      </div>

      <div className="mt-6 2xl:mt-_30">
        <Typography
          variant="h3"
          headingSize="sm"
          className="mb-5 font-semibold"
        >
          {title}
        </Typography>
        <Typography variant="p" paragraphSize="sm">
          {description}
        </Typography>
      </div>

      <div className="mt-6 2xl:mt-_30">
        <Button variant="secondary" className="!w-full">
          Get it Now
        </Button>
      </div>
    </motion.div>
  );
};

export const Courses = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="m-auto mb-_50 max-w-_1279 px-4 lg:mb-_100 xl:px-0 2xl:max-w-_1596"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionHeader
          title={"Our Courses"}
          description={
            "Explore a variety of courses designed to enhance your skills and knowledge. Whether you are a beginner or looking to advance, we offer programs tailored to your needs."
          }
        />
      </motion.div>

      <motion.div variants={containerVariants}>
        <motion.ul className="grid justify-items-center gap-5 md:grid-cols-2">
          {coursesData.map(
            (
              { duration, imageUrl, level, instructor, title, description },
              key,
            ) => (
              <motion.li key={key} variants={itemVariants}>
                <Card
                  title={title}
                  duration={duration}
                  level={level}
                  description={description}
                  imageUrl={imageUrl}
                  instructor={instructor}
                />
              </motion.li>
            ),
          )}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};
