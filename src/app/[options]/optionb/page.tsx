"use client";

import { useOptionContext } from "@/app/option-context";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const optionb = () => {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const { selectedOptionB, setSelectedOptionB } = useOptionContext();

  const handleOptionClick = (option: string) => {
    setSelectedOptionB(option);
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
        <h1 className="text-6xl font-bold sm:text-7xl">
          Instructional Strategies
        </h1>
      </MaxWidthWrapper>
      <div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <h3 className="font-semibold text-xl mb-5">
                Instructional strategies are what instructors, instructional
                designers, or instructional systems do to facilitate student
                learning.
              </h3>
              <p className="font-semibold text-xl mb-5">
                1. Supportive instructional strategies are strategies typically
                enacted by the expert, coach, mentor, instructor, or embedded
                performance support system, with the goal of modeling the
                desired performance, skill, or process, and observing and
                supporting learners during their implementation of a learning
                task.
                <br />
                <br /> 2. Dialogic instructional strategies are strategies that
                promote dialogic or discursive type activities such as engaging
                students in articulation, collaboration and social negotiation,
                and reflection.
                <br />
                <br /> 3. Exploratory instructional strategies are strategies
                that promote exploratory-type activities such as engaging
                students in problem solving, exploration and creation,
                hypotheses testing, and role-playing.
                <Image
                  width={1574}
                  height={1130}
                  src="/pic2.JPG"
                  alt="Instructional Strategies"
                  className="h-auto max-w-full items-center justify-center"
                />
              </p>
              <h3 className="font-semibold text-xl mb-5">
                Choose Your Primary Instructional Strategy:
              </h3>
              <div className="flex p-5 justify-between items-center">
                <div
                  className={getOptionClassName("Dialogic Strategies")}
                  role="button"
                  onClick={() => handleOptionClick("Dialogic Strategies")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Dialogic Strategies
                  </Link>
                </div>
                <div
                  className={getOptionClassName("Exploratory Strategies")}
                  role="button"
                  onClick={() => handleOptionClick("Exploratory Strategies")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Exploratory Strategies
                  </Link>
                </div>
                <div
                  className={getOptionClassName("Supportive Strategies")}
                  role="button"
                  onClick={() => handleOptionClick("Supportive Strategies")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Supportive Strategies
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

export default optionb;
