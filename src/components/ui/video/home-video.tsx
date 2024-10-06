"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const HomeVideo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="m-auto max-w-_1596 px-4 lg:px-20 2xl:px-0">
      <div
        className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-contain bg-center bg-no-repeat 2xl:bg-contain"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1728230673/skillbridge/Container_2_udjtet.png)",
        }}
        ref={ref}
      >
        <motion.div
          className="relative h-_54 w-_54 hover:cursor-pointer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{ scale: [null, 1.1, 1.1] }}
        >
          <Image src="/img/Button.png" alt="Play button" fill />
        </motion.div>
      </div>
    </section>
  );
};
