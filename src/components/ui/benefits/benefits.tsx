"use client";
import React, { useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "../button";
import { BenefitsData } from "@/components/constants";
import { Typography } from "@/components";

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
      className="h-_314 w-_358 bg-white p-_30 lg:h-_370 lg:w-_413 lg:p-10 2xl:h-_437 2xl:w-_519"
      variants={itemVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <Typography variant="h2" className="mb-_30 text-right lg:mb-10">
        0{id}
      </Typography>
      <Typography className="mb-3 !text-lg" variant="h3">
        {title}
      </Typography>
      <Typography className="mb-_30 text-gray-500 lg:mb-10">
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
      className="m-auto mb-_100 max-w-_1279 px-4 xl:px-0 2xl:max-w-_1596"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-_300"
        variants={itemVariants}
      >
        <div className="max-w-_1117">
          <Typography variant="h2" className="mb-4">
            Benefits
          </Typography>
          <Typography className="text-gray-500">
            Learn at your own pace with a flexible schedule that accommodates
            your commitments. Benefit from expert instruction provided by
            seasoned professionals in the field.
          </Typography>
        </div>

        <div>
          <Button variant="secondary" size="medium" className="w-_168">
            View all
          </Button>
        </div>
      </motion.div>

      <motion.ul
        variants={containerVariants}
        className="mt-20 grid grid-cols-1 items-center justify-items-center gap-5 lg:grid-cols-2 xl:grid-cols-3"
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
