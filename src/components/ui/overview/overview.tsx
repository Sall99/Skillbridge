"use client";
import React from "react";
import { motion } from "framer-motion";

import { Typography } from "@/components";

interface Props {
  title: string;
  description: string;
}

export function Overview({ title, description }: Props) {
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="layout mt-_50 flex flex-col gap-4 md:flex-row lg:mt-20 lg:gap-20 2xl:mt-_100 2xl:gap-_100"
    >
      <motion.div variants={itemVariants} className="flex-1">
        <Typography variant="h2" headingSize="lg">
          {title}
        </Typography>
      </motion.div>
      <motion.div variants={itemVariants} className="flex-1">
        <Typography variant="p" paragraphSize="md">
          {description}
        </Typography>
      </motion.div>
    </motion.section>
  );
}
