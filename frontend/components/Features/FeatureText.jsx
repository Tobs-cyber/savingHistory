import React from "react";
import { features } from "../../data";
import Image from "next/image";

const FeatureText = () => {
  return (
    <div className="flex-col basis-1/2">
      {features.map((feature, index) => (
        <div key={index} className="md:my-16 my-10 lg:pr-16">
          <img
            src={feature.image}
            className="border-black border feature-icon"
          />
          <h1 className="text-2xl md:text-3xl lg:text-lg font-bold pt-5">
            {feature.heading}
          </h1>
          <p className="text-base md:text-2xl lg:text-base py-5">
            {feature.content}{" "}
          </p>
          <a
            href={feature.link}
            className="text-sm md:text-xl lg:text-sm mb-3 text-[#dda61d] underline"
          >
            {feature.subText}{" "}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureText;
