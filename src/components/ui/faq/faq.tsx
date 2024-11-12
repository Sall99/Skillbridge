"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Typography } from "@/components";
import { faqData } from "@/constants";

export const Faq = () => {
  return (
    <motion.section
      className="m-auto max-w-_1279 px-4 xl:px-0 2xl:max-w-_1596"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="rounded-md bg-white p-6 sm:p-10 lg:p-20 2xl:p-_100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div
          className="flex flex-col justify-between gap-10 sm:flex-row lg:gap-20 2xl:gap-_120"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="md:w-_408"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography variant="h2">
              Frequently <br /> Asked Questions
            </Typography>

            <Typography variant="p" className="mt-3">
              Still you have any questions? Contact our <br />
              Team via support@skillbridge.com
            </Typography>

            <motion.button
              className="mt-10 2xl:mt-_50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              See All FAQs
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Disclo />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default function Disclo() {
  return (
    <motion.div
      className="xl:w-_631 2xl:w-_767"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.div
        className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {faqData.map(({ question, answer }, key) => (
          <Disclosure
            key={key}
            as="div"
            className="mb-5 border !border-gray-100 p-6"
            defaultOpen={key === 0 ? true : false}
          >
            <DisclosureButton className="group flex w-full justify-between">
              <motion.span
                className="text-base font-medium 2xl:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + key * 0.1 }}
              >
                {question}
              </motion.span>
              <motion.div
                className="size-5 group-data-[open]:rotate-180"
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + key * 0.1 }}
              >
                <ChevronDownIcon />
              </motion.div>
            </DisclosureButton>
            <DisclosurePanel className="mt-_50 text-gray-500 2xl:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + key * 0.1 }}
              >
                {answer}
              </motion.p>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </motion.div>
    </motion.div>
  );
}
