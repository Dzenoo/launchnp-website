"use client";

import { Center, Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Rocket: React.FC = () => {
  const rocket = useGLTF("/models/rocket.glb");

  return (
    <Canvas camera={{ fov: 50 }}>
      <Environment preset="sunset" />
      <ambientLight color="#ffffff" intensity={0.5} />
      <directionalLight color="#ffffff" intensity={5} position={[-10, 5, 1]} />
      <spotLight
        color="#ffffff"
        intensity={5}
        angle={0.3}
        penumbra={0.5}
        position={[0, 5, 0]}
      />
      <Center>
        <primitive scale={0.05} object={rocket.scene} />
      </Center>
    </Canvas>
  );
};

export default Rocket;
