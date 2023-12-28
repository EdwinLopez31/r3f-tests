import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Bird = () => {
  const { scene, animations } = useGLTF("/3d/bird.glb");
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);
  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const easeRotation = (currentRotation, targetRotation, easingFactor) => {
    // Calculate the difference between the target and current rotation
    const rotationDiff = targetRotation - currentRotation;

    // Define a step based on the difference and the easing factor
    const rotationStep = rotationDiff * easingFactor;

    // If the absolute difference is smaller than the step, directly set the target rotation
    if (Math.abs(rotationDiff) < Math.abs(rotationStep)) {
      return targetRotation;
    }

    // Otherwise, increment the current rotation towards the target
    return currentRotation + rotationStep;
  };

  useFrame(({ clock, camera }, delta) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 6) {
      birdRef.current.rotation.y = 0;
    }
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
