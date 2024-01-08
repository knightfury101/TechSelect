"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useOptionContext } from "../option-context";
import Image from "next/image";

const AnalysisPage = () => {
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
          Enter your primary design component below
        </h1>
      </MaxWidthWrapper>

      <div className="flex justify-center items-center p-5 z-10">
        <Card className="lg:max-w-md w-full rounded-3xl ml-5 mr-5">
          <CardHeader>
            <CardTitle>Learning Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              width={315}
              height={222}
              src="/Frame 20.jpg"
              alt="Card Image"
              className="w-full"
            />
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mt-5 mr-5 bg-blue-400",
              })}
              href="/options/optiona"
              target=""
            >
              {selectedOptionA || "Select"}
              {selectedOptionA ? null : <ArrowRight className="ml-2 h-5 w-5" />}
            </Link>
          </CardFooter>
        </Card>
        <Card className="lg:max-w-md w-full rounded-3xl ml-5 mr-5">
          <CardHeader>
            <CardTitle>Instructional Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              width={1574}
              height={1130}
              src="/pic2.jpg"
              alt="Card Image"
              className="w-full"
            />
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mt-5 mr-5 bg-blue-400",
              })}
              href="/options/optionb"
              target=""
            >
              {selectedOptionB || "Select"}
              {selectedOptionB ? null : <ArrowRight className="ml-2 h-5 w-5" />}
            </Link>
          </CardFooter>
        </Card>
        <Card className="lg:max-w-md w-full rounded-3xl ml-5 mr-5">
          <CardHeader>
            <CardTitle>Learning Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              width={1452}
              height={1166}
              src="/pic3.jpg"
              alt="Card Image"
              className="w-full"
            />
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mt-5 mr-5 bg-blue-400",
              })}
              href="/options/optionc"
              target=""
            >
              {selectedOptionC || "Select"}
              {selectedOptionC ? null : <ArrowRight className="ml-2 h-5 w-5" />}
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex items-center justify-center">
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 mr-5 bg-blue-400",
          })}
          href="/finalchoice"
          target=""
        >
          Submit <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
};

export default AnalysisPage;
