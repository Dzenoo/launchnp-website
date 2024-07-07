"use client";
import React from "react";
import Rocket from "./Rocket";
import { Canvas } from "@react-three/fiber";

const Hero: React.FC = () => {
  return (
    <div className="h-full pt-28 flex justify-between gap-5">
      <div className="p-10 basis-1/2 flex flex-col gap-10">
        <div>
          <h1 className="text-7xl">
            We design and develop the{" "}
            <span className="text-[#F0427E]">digital</span> products of the{" "}
            <span className="text-[#F0427E]">future.</span>
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-xl font-light">
            Coupling state-of-the-art technology with stunning designs, we
            create memorable digital transformations and well-crafted software
            for everyone from startups to established brands.
          </p>
        </div>
        <div>
          <button className="p-5 rounded-full border border-black">
            Explore
          </button>
        </div>
      </div>
      <div className="basis-1/2">
        <Canvas camera={{ fov: 50 }}>
          <Rocket />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
