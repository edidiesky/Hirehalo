"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideup, LargeSlideup } from "@/constants/framer";

// animattions to staggerText
const AnimateTextWord = ({ children, type }: { children: React.ReactNode, type?: string }) => {
  const AnimateTextRef = useRef(null);
  const inView = useInView(AnimateTextRef, {
    margin: "0px 100px -120px 0px",
  });
  if (type === "bigtext") {
    return (
      <span
        ref={AnimateTextRef}
        className="flex gap-[5px] flex-wrap w-full items-center relative"
      >
        {children?.split(" ")?.map((data:string, index:number) => {
          return (
            <div key={index} className="inline-flex hide relative">
              <motion.span
                variants={LargeSlideup}
                custom={index}
                initial="initial"
                animate={inView ? "animate" : "exit"}
              >
                {data === " " ? "\u00A0" : data}
              </motion.span>
            </div>
          );
        })}
      </span>
    );
  }
  if (type === "bigtext_Center") {
    return (
      <span
        ref={AnimateTextRef}
        className="flex md:inline-block gap-[5px] flex-wrap w-full items-center md:space-x-4 md:items-center relative"
      >
        {children?.split(" ")?.map((data: string, index: number) => {
          return (
            <div key={index} className="inline-flex hide relative">
              <motion.span
                variants={LargeSlideup}
                custom={index}
                initial="initial"
                animate={inView ? "animate" : "exit"}
              >
                {data === " " ? "\u00A0" : data}
              </motion.span>
            </div>
          );
        })}
      </span>
    );
  }
  return (
    <span
      ref={AnimateTextRef}
      className="flex gap-[3px] flex-wrap w-full items-center relative"
    >
      {children?.split(" ")?.map((data:string, index:number) => {
        return (
          <div key={index} className="inline-flex  hide relative">
            <motion.span
              variants={slideup}
              custom={index}
              initial="initial"
              animate={inView ? "animate" : "exit"}
            >
              {data === " " ? "\u00A0" : data}
            </motion.span>
          </div>
        );
      })}
    </span>
  );
};

export default AnimateTextWord;
