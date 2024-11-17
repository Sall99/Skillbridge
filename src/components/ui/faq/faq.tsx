"use client";

import React from "react";

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
    <section className="m-auto mt-_50 max-w-_1279 px-4 lg:mt-_100 xl:px-0 2xl:mt-_150 2xl:max-w-_1596">
      <div className="rounded-md bg-white p-6 sm:p-10 lg:p-20 2xl:p-_100">
        <div className="flex flex-col justify-between gap-10 sm:flex-row lg:gap-20 2xl:gap-_120">
          <div className="md:w-_408">
            <Typography variant="h2">
              Frequently <br /> Asked Questions
            </Typography>

            <Typography variant="p" paragraphSize="sm" className="mt-3">
              Still you have any questions? Contact our <br />
              Team via support@skillbridge.com
            </Typography>

            <button className="mt-10 2xl:mt-_50">See All FAQs</button>
          </div>

          <div>
            <Disclo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Disclo() {
  return (
    <div className="xl:w-_631 2xl:w-_767">
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
        {faqData.map(({ question, answer }, key) => (
          <Disclosure
            key={key}
            as="div"
            className="mb-5 border !border-gray-100 p-6"
            defaultOpen={key === 0 ? true : false}
          >
            <DisclosureButton className="group flex w-full justify-between">
              <span className="text-base font-medium 2xl:text-lg">
                {question}
              </span>
              <div className="size-5 group-data-[open]:rotate-180">
                <ChevronDownIcon />
              </div>
            </DisclosureButton>
            <DisclosurePanel className="mt-_50 text-gray-500 2xl:text-base">
              <p>{answer}</p>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
