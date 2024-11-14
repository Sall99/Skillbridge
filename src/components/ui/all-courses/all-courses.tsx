"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { SectionHeader, Typography } from "@/components";
import { courses } from "@/constants";

interface ImgContainerProps {
  images: string[];
  duration: string;
  level: string;
  instructor: string;
}

interface CuriculumProps {
  curriculum: string[];
}

const ImgContainer = ({
  images,
  duration,
  level,
  instructor,
}: ImgContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-_10 lg:gap-_20 2xl:gap-_30">
        {images.map((src, key) => (
          <div
            key={key}
            className="relative m-auto h-_100 w-24 overflow-hidden rounded-md sm:h-40 sm:w-48 md:h-_200 md:w-72 xl:h-_326 xl:w-_386 2xl:h-_422 2xl:w-_478"
          >
            <Image src={src} alt="" fill />
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col justify-between gap-_14 sm:flex-row sm:items-center sm:gap-_30 2xl:mt-_30">
        <div className="flex gap-_30">
          <div className="flex h-9 items-center justify-center rounded-lg border border-gray-100 px-4 text-sm text-gray-500 sm:h-_44 2xl:text-lg">
            {duration}
          </div>
          <div className="flex h-9 items-center justify-center rounded-lg border border-gray-100 px-4 text-sm text-gray-500 sm:h-_44 2xl:text-lg">
            {level}
          </div>
        </div>
        <Typography variant="p" paragraphSize="xs">
          {instructor}
        </Typography>
      </div>
    </motion.div>
  );
};

const Curiculum = ({ curriculum }: CuriculumProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 rounded-lg border border-gray-100 px-10 py-6 2xl:mt-10">
        <Typography variant="h2" headingSize="xs" className="mb-6">
          Curiculum
        </Typography>

        <div className="flex flex-col gap-_30 md:flex-row xl:gap-20 2xl:gap-_100">
          {curriculum.map((c, key) => (
            <div
              key={key}
              className="m-auto w-full border-b-2 border-gray-100 pb-4 md:border-0 md:pb-0 2xl:w-_200"
            >
              <Typography variant="h2" headingSize="md">
                0{key + 1}
              </Typography>
              <Typography variant="p" paragraphSize="sm" className="mt-5">
                {c}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Allcourses() {
  return (
    <section className="layout">
      <div className="flex flex-col gap-_50">
        {courses.map(
          (
            {
              title,
              description,
              images,
              instructor,
              level,
              duration,
              curriculum,
            },
            key,
          ) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.2 }}
              className="rounded-xl bg-white p-6 lg:p-10 2xl:p-_50"
            >
              <SectionHeader
                title={title}
                description={description}
                btnText="View Course"
                variant="md"
              />
              <ImgContainer
                images={images}
                duration={duration}
                level={level}
                instructor={instructor}
              />
              <Curiculum curriculum={curriculum} />
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
