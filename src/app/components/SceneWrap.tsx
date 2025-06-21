"use client";
import React from "react";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
const SceneWrap = () => {
  return (
    <Canvas shadows className="pointer-events-none h-[900vh]">
      <Scene />
    </Canvas>
  );
};

export default SceneWrap;
