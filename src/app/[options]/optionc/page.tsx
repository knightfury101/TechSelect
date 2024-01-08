"use client";

import { useOptionContext } from "@/app/option-context";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Optionc = () => {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const { selectedOptionC, setSelectedOptionC } = useOptionContext();

  const handleOptionClick = (option: string) => {
    setSelectedOptionC(option);
    setSelectedOption(option);
  };

  const getOptionClassName = (option: string) => {
    return `gap-5 mb-10 rounded-md p-5 max-w-xs mr-5 ${
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
          Learning Technologies
        </h1>
      </MaxWidthWrapper>
      <div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <h3 className="font-semibold text-xl mb-5">
                Learning technologies is an umbrella term that describes
                Information and Communications Technologies and tools used to
                enhance learning, teaching and assessment.
              </h3>
              <p className="font-semibold text-xl mb-5">
                1. Content creation tools are primarily for instructional
                designers or instructors who are creating online instruction.
                These are tools that directly support how to create the content
                and deliver it.
                <br />
                <br /> 2. Collaboration and Communication tools in online
                settings can help to reduce the isolation that can go along with
                being an online student as well as personalize the learning
                experience.
                <br />
                <br /> 3. Knowledge representation tools are distinguished from
                tranditional computer learning applications in that users work
                with the technologies to represent their knowledge, versus
                learning from technology as is the case with traditional
                tutorial, drill and preactice, or any technology where the
                learner receives an already created product.
                <br />
                <br /> 4. Immersive tools refer to tools used to create a
                digital environment that allows participants to be totally
                &quot;immersed&quot; in the context that the environment
                represents.
                <br />
                <br /> 5. Technology tools that we use to search for resources
                on the internet or in specific knowledge repositories and ways
                of managing these resources are at the heart of many online
                learning activities. When learners need resources, they almost
                immediately turn to information search and resource management
                tools to find what they are looking for.
                <br />
                <br /> 6. Assessment is the process of collecting data to
                determine the extent to which a person&apos;s performance or
                program has met it&apos;s intended objective. Analytics refer to
                the review of a wide range of data produced by and gathered on
                behalf of students in order to access academic progress, predict
                future performances, and spot potential issues.
              </p>

              <Image
                src="/pic3.JPG"
                alt="Learning Technologies"
                className="h-auto max-w-full items-center justify-center"
              />

              <h3 className="font-semibold text-xl mb-5">
                <br />
                Choose Your Primary Instructional Strategy:
              </h3>
              <div className="p-5 justify-center items-center grid grid-cols-2">
                <div
                  className={getOptionClassName("Content Creation")}
                  role="button"
                  onClick={() => handleOptionClick("Content Creation")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Content Creation
                  </Link>
                </div>

                <div
                  className={getOptionClassName(
                    "Collaboration & Communication"
                  )}
                  role="button"
                  onClick={() =>
                    handleOptionClick("Collaboration & Communication")
                  }
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Collaboration & Communication
                  </Link>
                </div>

                <div
                  className={getOptionClassName(
                    "Information Search and Resource Management"
                  )}
                  role="button"
                  onClick={() =>
                    handleOptionClick(
                      "Information Search and Resource Management"
                    )
                  }
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Information Search and Resource Management
                  </Link>
                </div>
                <div
                  className={getOptionClassName("Immersive")}
                  role="button"
                  onClick={() => handleOptionClick("Immersive")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Immersive
                  </Link>
                </div>
                <div
                  className={getOptionClassName("Knowledge Representation")}
                  role="button"
                  onClick={() => handleOptionClick("Knowledge Representation")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Knowledge Representation
                  </Link>
                </div>

                <div
                  className={getOptionClassName("Assessment and Analytics")}
                  role="button"
                  onClick={() => handleOptionClick("Assessment and Analytics")}
                >
                  <Link href="" className="font-semibold text-xl mb-5">
                    Assessment and Analytics
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

export default Optionc;
