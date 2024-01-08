"use client";

import { useOptionContext } from "@/app/option-context";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Optiona = () => {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const { selectedOptionA, setSelectedOptionA } = useOptionContext();

  const handleOptionClick = (option: string) => {
    setSelectedOptionA(option);
    setSelectedOption(option);
  };

  const getOptionClassName = (option: string) => {
    return `rounded-md p-4 max-w-xs mr-5 ${
      selectedOption === option
        ? "bg-green-500 text-white"
        : "bg-gray-500/50 hover:bg-gray-800 hover:text-white"
    }`;
  };

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl z-10">
        <div className="z-10 pointer-events-none">
          <div className="gradient" />
        </div>
        <h1 className="text-6xl font-bold sm:text-7xl">Learning Outcomes</h1>
      </MaxWidthWrapper>
      <div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <h3 className="font-semibold text-xl mb-5">
                Learning outcomes describe the measurable skills, abilities,
                knowledge or values that learners should be able to demonstrate
                as a result of completing instruction or training.
              </h3>
              <div className="items-center justify-center flex flex-col">
                <Link
                  href="https://latist.gmu.edu/?page_id=1952"
                  target="_blank"
                >
                  <Image
                    src="/Frame 20.jpg"
                    alt="Bloom's Taxonomy"
                    width={400}
                    height={400}
                    className="h-auto max-w-full items-center justify-center"
                  />
                </Link>
                <p className="font-regular text-1xl mb-5">
                  Click the image for more information.
                </p>
              </div>

              <h3 className="font-semibold text-xl mb-5">
                Choose Your Primary Learning Outcome:
              </h3>
              <div className="flex p-5 justify-between items-center">
                <div
                  className={getOptionClassName(
                    "Remembering and Understanding"
                  )}
                  role="button"
                  onClick={() =>
                    handleOptionClick("Remembering and Understanding")
                  }
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Remembering and Understanding
                  </Link>
                </div>
                <div
                  className={getOptionClassName("Applying and Analyzing")}
                  role="button"
                  onClick={() => handleOptionClick("Applying and Analyzing")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Applying and Analyzing
                  </Link>
                </div>
                <div
                  className={getOptionClassName("Evaluating and Creating")}
                  role="button"
                  onClick={() => handleOptionClick("Evaluating and Creating")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Evaluating and Creating
                  </Link>
                </div>
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
          href="/analysis"
          target=""
        >
          Submit <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
};

export default Optiona;
