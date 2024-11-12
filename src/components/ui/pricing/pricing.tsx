"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typography, SectionHeader } from "@/components";
import { Check, X } from "lucide-react";
import { pricingData } from "@/constants";

interface CardProps {
  planName: string;
  price: string;
  feature: string[];
  exclusiveFeatures?: {
    feature: string;
    available: boolean;
  }[];
}

const Card = ({ planName, price, feature, exclusiveFeatures }: CardProps) => {
  return (
    <motion.div
      className="rounded-md border border-gray-100 bg-gray-50 px-5 py-_30 md:px-_30 md:py-_50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="md:px-_30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div
          className="rounded-md border border-primary-200 bg-primary-100 py-3 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="p">{planName}</Typography>
        </motion.div>

        <motion.div
          className="my-_50 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typography variant="h2">
            {price}
            <span className="text-sm text-gray-600">/month</span>
          </Typography>
        </motion.div>

        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="p" className="mb-_30 text-center">
            Available Features
          </Typography>

          <motion.ul>
            {feature.map((content, key) => (
              <motion.li
                key={key}
                className="mb-5 flex items-center gap-5 rounded-md border border-gray-100 p-_14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + key * 0.1 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-200">
                  <Check width={14} height={12} />
                </div>
                <Typography variant="p" className="w-_181 sm:w-full">
                  {content}
                </Typography>
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul>
            {exclusiveFeatures?.map(({ feature }, key) => (
              <motion.li
                key={key}
                className="mb-5 flex items-center gap-5 rounded-md border border-gray-100 p-_14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + key * 0.1 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-200">
                  <X width={14} height={12} />
                </div>
                <Typography variant="p" className="w-_181 sm:w-full">
                  {feature}
                </Typography>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <motion.button
        className="mt-5 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export const Pricing = () => {
  return (
    <motion.section
      className="m-auto mb-40 max-w-_1279 px-4 xl:px-0 2xl:max-w-_1596"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionHeader
          title={"Our Pricing"}
          description={
            " Discover a range of courses crafted to elevate your skills and expertise. Whether you re just starting out or aiming to advance, we provide programs customized to meet your learning goals."
          }
        />
      </motion.div>
      <motion.ul
        className="grid grid-cols-1 gap-5 rounded-md bg-white p-5 lg:grid-cols-2 lg:p-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {pricingData.map(
          ({ planName, price, features, exclusiveFeatures }, key) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + key * 0.1 }}
            >
              <Card
                planName={planName}
                price={price}
                feature={features}
                exclusiveFeatures={exclusiveFeatures}
              />
            </motion.li>
          ),
        )}
      </motion.ul>
    </motion.section>
  );
};
