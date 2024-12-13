import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import loginbg from "../assets/loginbg.jpg";

export function EvervaultCardDemo() {
  return (
    <>
      <img
        src={loginbg}
        alt="Demo Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative flex items-center justify-center h-screen"> {/* Center the content */}
        <div className="relative bg-black bg-opacity-90 border border-black/[0.2] dark:border-white/[0.2] rounded-lg w-full max-w-sm p-4 h-[30rem]"> {/* Card Container */}
          {/* Icons */}
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

          {/* Evervault Card */}
          <EvervaultCard />
        </div>
      </div>
    </>
  );
}

export default EvervaultCardDemo;
