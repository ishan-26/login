import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col top-20 items-start max-w-sm mx-auto p-4 relative h-[30rem] overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 top-2 left-2 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 bottom-2 left-2 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 top-2 right-2 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 bottom-2 right-2 dark:text-white text-black" />
      <EvervaultCard />
    </div>
  );
}

export default EvervaultCardDemo;
