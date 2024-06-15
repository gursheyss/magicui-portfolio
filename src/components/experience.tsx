"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef, createRef } from "react";
import { RESUME_DATA } from "@/data/resume-data";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-3 w-3 items-center justify-center rounded-full border-2 bg-gray-300 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = RESUME_DATA.experience.map(() =>
    createRef<HTMLDivElement>()
  );

  return (
    <>
      <div className="text-2xl font-bold mb-4 tracking-tight text-primary">
        Work Experience
      </div>
      <div
        className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-2"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between overflow-x-auto">
            {[...RESUME_DATA.experience].reverse().map((experience, index) => (
              <div key={index} className="flex flex-col items-center mx-2">
                <div className="text-sm text-secondary-foreground">
                  {experience.startDate}
                </div>
                <Circle ref={circleRefs[index]} />
                <div className="mt-2 text-sm text-center space-y-1 text-secondary-foreground">
                  <div className="font-semibold text-primary">
                    {experience.company}
                  </div>
                  <div className="italic">{experience.role}</div>
                  <div className="text-muted-foreground">
                    {experience.location}
                  </div>
                  <div className="max-w-xs">{experience.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {circleRefs.length > 1 && (
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={circleRefs[0]}
            toRef={circleRefs[circleRefs.length - 1]}
          />
        )}
      </div>
    </>
  );
}
