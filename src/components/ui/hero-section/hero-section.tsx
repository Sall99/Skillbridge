"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button, Typography } from "@/components";

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="m-auto mt-_50 max-w-_941 px-4 text-center xl:mt-20 2xl:mt-_100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Typography
          variant="h2"
          className="relative mb-5 flex items-center justify-center font-semibold"
        >
          <div className="absolute -top-8 left-_30 hidden lg:block 2xl:-top-10 2xl:left-2">
            <motion.div
              className="relative mr-3 h-_44 w-_39 2xl:h-_62 2xl:w-_62"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image src="/img/abstractLine.png" alt="abstract line" fill />
            </motion.div>
          </div>
          <motion.div
            className="relative mr-3 h-_44 w-_44 2xl:h-_62 2xl:w-_62"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/img/logo-opacity.png" alt="logo" fill />
          </motion.div>
          <span className="mr-3 text-primary-500">Unlock</span> Your Creative
          Potential
        </Typography>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography variant="h2" headingSize="md" className="mb-2">
          with Online Design and Development Courses.
        </Typography>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography variant="p" paragraphSize="sm">
          Learn from Industry Experts and Enhance Your Skills.
        </Typography>
      </motion.div>

      <motion.div
        className="mt-_50 flex justify-center gap-3 2xl:mt-_62"
        variants={itemVariants}
      >
        <Button variant="primary">Explore Courses</Button>
        <Button variant="secondary">View pricing</Button>
      </motion.div>
    </motion.section>
  );
};
