"use client";
import React, { useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "../button";
import { SectionHeader, Typography } from "@/components";
import { BenefitsData } from "@/constants";

interface CarProps {
  id: number;
  title: string;
  description: string;
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

const Card = ({ id, title, description }: CarProps) => {
  return (
    <motion.div
      className="h-_314 bg-white p-_30 md:w-_358 lg:h-_370 lg:w-_413 lg:p-10 2xl:h-_437 2xl:w-_519"
      variants={itemVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <Typography
        variant="h2"
        headingSize="md"
        className="mb-_30 text-right font-bold lg:mb-10"
      >
        0{id}
      </Typography>
      <Typography className="mb-3 !text-lg" variant="h3">
        {title}
      </Typography>
      <Typography variant="p" className="mb-_30 text-gray-500 lg:mb-10">
        {description}
      </Typography>

      <div className="flex justify-end">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="secondary" className="!bg-gray-200">
            <MoveUpRight color="#FF9500" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Benefits = () => {
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
      className="m-auto mb-_50 mt-_50 max-w-_1279 px-4 lg:mb-_100 lg:mt-_100 xl:px-0 2xl:max-w-_1596"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionHeader
          title={"Benefits"}
          description={
            "Learn at your own pace with a flexible schedule that accommodates your commitments. Benefit from expert instruction provided by seasoned  professionals in the field."
          }
        />
      </motion.div>

      <motion.ul
        variants={containerVariants}
        className="grid grid-cols-1 items-center justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {BenefitsData.map(({ id, title, description }) => (
          <motion.li key={id}>
            <Card id={id} title={title} description={description} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};
