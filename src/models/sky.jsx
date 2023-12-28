/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Paul (https://sketchfab.com/paul_paul_paul)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-skybox-in-the-cloud-b270497defe24f9cb497b9a075eeb28f
Title: FREE - SkyBox In The Cloud
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sky({ isRotating, ...props }) {
  const sky = useGLTF("/3d/sky.glb");
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

useGLTF.preload("/3d/sky.glb");