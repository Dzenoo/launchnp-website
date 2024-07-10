"use client";

import { Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Rocket: React.FC = () => {
    const { nodes } = useGLTF("/models/rocket.glb") as any;

    const rocket = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (rocket.current) {
            const elapsed = state.clock.getElapsedTime();
            rocket.current.position.y = 1 + Math.sin(elapsed) * 0.1;
            rocket.current.rotation.z = Math.sin(elapsed * 2) * 0.05;
        }
    });

    return (
        <>
            <Environment preset="sunset" />
            <ambientLight color="#ffffff" intensity={0.5} />
            <directionalLight
                color="#ffffff"
                intensity={5}
                position={[-10, 5, 1]}
            />
            <spotLight
                color="#ffffff"
                intensity={5}
                angle={0.3}
                penumbra={0.5}
                position={[0, 5, 0]}
            />
            <group position={[0, 1.0, 0]} ref={rocket} scale={0.05}>
                <mesh geometry={nodes.Top.geometry}>
                    <meshStandardMaterial color="#F01289" />
                </mesh>
                <mesh geometry={nodes.Rocket_Hollow.geometry}>
                    <meshStandardMaterial color="#F18D52" />
                </mesh>
                <mesh geometry={nodes.Smoke_Hollow.geometry}>
                    <meshStandardMaterial color="#EF6670" />
                </mesh>
            </group>
        </>
    );
};

export default Rocket;
