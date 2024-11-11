import React from "react";

import { Button, Typography, SectionHeader } from "@/components";
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
    <div className="rounded-md border border-gray-100 bg-gray-50 px-5 py-_30 md:px-_30 md:py-_50">
      <div className="md:px-_30">
        <div className="rounded-md border border-primary-200 bg-primary-100 py-3 text-center">
          <Typography variant="p">{planName}</Typography>
        </div>

        <div className="my-_50 text-center">
          <Typography variant="h2">
            {price}
            <span className="text-sm text-gray-600">/month</span>
          </Typography>
        </div>

        <div className="">
          <Typography variant="p" className="mb-_30 text-center">
            Available Features
          </Typography>

          <ul>
            {feature.map((content, key) => (
              <li
                key={key}
                className="mb-5 flex items-center gap-5 rounded-md border border-gray-100 p-_14"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-200">
                  <Check width={14} height={12} />
                </div>
                <Typography variant="p" className="w-_181 sm:w-full">
                  {content}
                </Typography>
              </li>
            ))}
          </ul>

          <ul>
            {exclusiveFeatures?.map(({ feature }, key) => (
              <li
                key={key}
                className="mb-5 flex items-center gap-5 rounded-md border border-gray-100 p-_14"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-200">
                  <X width={14} height={12} />
                </div>
                <Typography variant="p" className="w-_181 sm:w-full">
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button className="mt-5 w-full">Get Started</Button>
    </div>
  );
};

export const Pricing = () => {
  return (
    <section className="m-auto mb-40 max-w-_1279 px-4 xl:px-0 2xl:max-w-_1596">
      <div>
        <SectionHeader
          title={"Our Pricing"}
          description={
            " Discover a range of courses crafted to elevate your skills and expertise. Whether you re just starting out or aiming to advance, we provide programs customized to meet your learning goals."
          }
        />
      </div>
      <ul className="grid grid-cols-1 gap-5 rounded-md bg-white p-5 lg:grid-cols-2 lg:p-20">
        {pricingData.map(
          ({ planName, price, features, exclusiveFeatures }, key) => (
            <li key={key}>
              <Card
                planName={planName}
                price={price}
                feature={features}
                exclusiveFeatures={exclusiveFeatures}
              />
            </li>
          ),
        )}
      </ul>
    </section>
  );
};
