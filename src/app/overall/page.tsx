"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useOptionContext } from "../option-context";
import DataTable from "./data-table";
import { columns } from "./columns";
import { data } from "@/lib/data";

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
        <h1 className="text-3xl font-bold sm:text-5xl">Overall Analysis</h1>
      </MaxWidthWrapper>
      <div className="flex items-center justify-center mt-10 mb-10">
        <h1 className="font-semibold text-2xl text-center">
          We are noticing some areas of alignment with the latest research, and
          others where you might strengthen your design or consider another
          design choice.
        </h1>
      </div>

      <div className="items-center text-3xl p-2 font-semibold justify-center flex">
        {selectedOptionA} <ArrowRight className="h-7 w-7 mr-5 ml-5" />{" "}
        {selectedOptionB} <ArrowRight className="h-7 w-7 mr-5 ml-5" />{" "}
        {selectedOptionC}
      </div>

      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <p className="text-center items-center flex text-2xl font-semibold justify-center mb-4">
          There are primary design pathways to consider when aligning learning
          outcomes at the remembering and understanding level to instructional
          strategies and learning technologies in order to ensure sound
          pedagogical alignment and effective instructional designs:
          <br />
          <br />
        </p>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="container py-10 mx-auto">
          <DataTable columns={columns} data={data} />
        </div>
        <div>
          <p className="font-semibold text-2xl text-center items-center flex justify-between ml-5 mr-5">
            <br />
            If your learning design matches one or more of the above pathways,
            you are on the right track with respect to appropriately leveraging
            the pedagogical affordances of learning technologies to support
            meaningful learning interactions. If not, you might want to consider
            adjusting your learning design accordingly. Hope this is useful
            feedback!
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 mr-5 bg-blue-400",
          })}
          href="/"
          target=""
        >
          Start Again <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
};

export default Page;
