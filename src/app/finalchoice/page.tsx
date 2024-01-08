"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useOptionContext } from "../option-context";

const Page = () => {
  const {
    selectedOptionA,
    selectedOptionB,
    selectedOptionC,
    setSelectedOptionA,
    setSelectedOptionB,
    setSelectedOptionC,
  } = useOptionContext();
  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl z-10">
        <div className="z-10 pointer-events-none">
          <div className="gradient" />
        </div>
        <h1 className="text-6xl font-bold sm:text-7xl">
          Thank You For Submitting
        </h1>
      </MaxWidthWrapper>
      <div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 items-center justify-center">
          <div className="mt-16 flow-root sm:mt-24 items-center justify-center">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 mr-2 items-center justify-center">
              <h3 className="font-semibold text-2xl mb-5">
                Here Are Your Primary Selections:
              </h3>
              <div className="items-center justify-center">
                <ul className="mr-2 font-semibold text-xl mb-5 items-center justify-center">
                  <li>1. {selectedOptionA}</li>
                  <li>2. {selectedOptionB}</li>
                  <li>3. {selectedOptionC}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 mr-5 bg-blue-400",
          })}
          href="/overall"
          target=""
        >
          Click here for feedback <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
};

export default Page;
