"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Step {
  name: string;
  description: string;
  url: string;
}

const STEPS: Step[] = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
] as const;

export default function ConfigureSteps() {
  const pathname = usePathname();

  return (
    <ol className="mt-6 rounded-md border border-gray-200 bg-white lg:flex">
      {STEPS.map((step, index) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(index + 1).some((step) =>
          pathname.endsWith(step.url),
        );
        const imgPath = `/snake-${index + 1}.png`;

        return (
          <ConfigureStep
            key={step.name}
            Step={step}
            isCurrent={isCurrent}
            isCompleted={isCompleted}
            index={index}
            imgPath={imgPath}
          />
        );
      })}
    </ol>
  );
}

interface ConfigureStepProps {
  Step: Step;
  isCurrent: boolean;
  isCompleted: boolean;
  index: number;
  imgPath: string;
}

function ConfigureStep(props: ConfigureStepProps) {
  return (
    <li key={props.Step.name} className="relative flex-1">
      <StepBody {...props} />
      <StepProgressLine {...props} />
      {props.index !== 0 ? <StepSeparator /> : null}
    </li>
  );
}

function StepSeparator() {
  return (
    <div className="absolute inset-0 hidden w-3 lg:block">
      <svg
        className="h-full w-full text-gray-300"
        viewBox="0 0 12 82"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0.5 0V31L10.5 41L0.5 51V82"
          stroke="currentcolor"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function StepBody(props: ConfigureStepProps) {
  return (
    <span
      className={cn(
        props.index !== 0 ? "lg:pl-9" : "",
        "flex items-center px-6 py-4 text-sm font-medium",
      )}
    >
      <Image
        src={props.imgPath}
        width={80}
        height={80}
        className="flex h-20 w-20 object-contain"
        aria-hidden="true"
        alt=""
        role="presentation"
      />

      <span className="ml-4 flex flex-col text-sm">
        <span
          className={cn("font-semibold text-zinc-700", {
            "text-primary": props.isCompleted,
          })}
        >
          {props.Step.name}
        </span>
        <span className="text-zinc-500">{props.Step.description}</span>
      </span>
    </span>
  );
}

function StepProgressLine(props: ConfigureStepProps) {
  return (
    <span
      className={cn(
        "absolute bg-zinc-400",
        "left-0 top-0 h-full w-1",
        "lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
        {
          "bg-zinc-700": props.isCurrent,
          "bg-primary": props.isCompleted,
        },
      )}
      aria-hidden="true"
    />
  );
}
