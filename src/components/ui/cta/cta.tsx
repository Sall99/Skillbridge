"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button, Typography } from "@/components";

export function Cta() {
  return (
    <motion.section
      className="layout relative z-10 mt-20 flex flex-col justify-between rounded-xl bg-white p-_30 md:flex-row md:items-center lg:p-10 2xl:p-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative z-30"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Typography variant="h2">
          <motion.span
            className="text-primary-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Together
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            , lets shape the future of digital <br /> innovation
          </motion.span>
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Typography variant="p" paragraphSize="sm" className="mt-5">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </Typography>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-16 z-20 hidden md:right-64 md:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="2xl:w-_445 2xl:h-_445 relative h-52 w-52 lg:h-80 lg:w-80">
          <Image
            src="/img/shape-17.png"
            alt="shape"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button variant="primary" className="mt-10 h-12 md:mt-0 2xl:h-16">
          Join Now
        </Button>
      </motion.div>
    </motion.section>
  );
}
