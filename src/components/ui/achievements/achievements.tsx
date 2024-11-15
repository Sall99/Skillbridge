"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Typography } from "@/components";
import { features } from "@/constants";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  w: number;
  h: number;
  index: number;
}

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Card = ({ icon, title, description, w, h, index }: CardProps) => {
  return (
    <motion.div
      className="ga rounded-xl bg-white p-_30 lg:p-10 2xl:p-_50"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-md border border-primary-200 bg-primary-100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.1 + 0.2,
        }}
      >
        <div
          className="relative"
          style={{
            width: `${w}px`,
            height: `${h}px`,
          }}
        >
          <Image src={`/img/${icon}.png`} alt="icon" fill />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        <Typography
          variant="h2"
          headingSize="sm"
          className="mt-_30 font-semibold"
        >
          {title}
        </Typography>
        <Typography variant="p" headingSize="sm" className="mt-_14">
          {description}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <section className="layout">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" headingSize="sm" className="font-semibold">
          Achievements
        </Typography>
        <Typography variant="p" paragraphSize="sm">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </Typography>
      </motion.div>

      <div className="mt-20 grid gap-_30 md:grid-cols-2">
        {features.map(({ icon, title, description, w, h }, key) => (
          <Card
            key={key}
            icon={icon}
            title={title}
            description={description}
            w={w}
            h={h}
            index={key}
          />
        ))}
      </div>
    </section>
  );
};
