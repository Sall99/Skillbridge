"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { CompaniesData } from "@/components";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Companies = () => {
  const [displayCount, setDisplayCount] = useState(CompaniesData.length);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1072) {
        setDisplayCount(CompaniesData.length);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mb-20 mt-_100 px-4">
      <div className="m-auto bg-white py-6 xl:max-w-_1279">
        <motion.ul
          className="flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {CompaniesData.slice(0, displayCount).map(
            ({ name, img, width }, key) => (
              <motion.li
                key={key}
                className="border-r border-gray-100 px-5 py-5 last:border-0 md:px-10"
                variants={itemVariants}
              >
                <div
                  className="relative h-7"
                  style={{
                    width: `${width}px`,
                  }}
                >
                  <Image src={img} alt={name} fill />
                </div>
              </motion.li>
            ),
          )}
        </motion.ul>
      </div>
    </section>
  );
};
