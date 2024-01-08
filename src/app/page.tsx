import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight, Bot } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div>
          <div className="gradient" />
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-5">
          Tech Select
        </h1>
        <h3 className="max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl mb-5">
          Feedback On Your Instructional Design
        </h3>
        <p className=" text-left mt-10 max-w-4xl text-zinc-700 sm:text-lg">
          You&apos;ve worked hard to create incredible training and learning
          experiences. Now see how well this stacks up with the latest best
          practices in Instructional Design. This website will analyze your
          instructional design and check for pedagogical alignment across three components: 
          <br /> 1. Learning Outcomes 
          <br /> 2. Instructional Strategies 
          <br /> 3. Learning Technologies
        </p>
        <div>
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5 mr-5 bg-yellow-500",
            })}
            href="/analysis"
            target=""
          >
            Begin Analysis <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </MaxWidthWrapper>

      <div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-6xl lg:p-4">
              <div className="ml-auto flex justify-between">
                <Link
                  href="https://cehd.gmu.edu/people/faculty/hfake/"
                  className="z-10"
                >
                  <Image
                    src="/helen.jpg"
                    alt="helen"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-full z-50"
                  />
                  <p className="text-3xl font-semibold items-center justify-center flex mt-10">
                    Dr. Helen E. Fake
                  </p>
                  <p className="text-center flex items-center justify-center text-md font-semibold mt-5">
                    Adjunct Professor <br /> Learning Design and Technology{" "}
                    <br /> George Mason University
                  </p>
                </Link>
                <Link
                  href="https://cehd.gmu.edu/people/faculty/ndabbagh/"
                  className="z-10"
                >
                  <Image
                    src="/nada.jpg"
                    alt="nada"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-full"
                  />
                  <p className="text-3xl font-semibold items-center justify-center flex mt-10">
                    Dr. Nada Dabbagh
                  </p>
                  <span className=" text-center flex items-center justify-center text-md font-semibold mt-5">
                    Professor and Director <br /> Learning Technologies
                    <br /> George Mason University
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/armaan-sahoo/"
                  className="z-10"
                >
                  <Image
                    src="/armaan.jpeg"
                    alt="armaan"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-full"
                  />
                  <p className="text-3xl mt-10 font-semibold items-center justify-center flex">
                    Armaan Sahoo
                  </p>
                  <span className=" text-center flex items-center justify-center text-md font-semibold mt-5">
                    Research Assistant <br /> UI/UX Designer and Developer
                    <br /> George Mason University
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
