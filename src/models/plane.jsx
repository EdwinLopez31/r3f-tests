import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const Plane = ({ isRotating, setIsRotating, ...props }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF("/3d/plane.glb");
  const { actions } = useAnimations(animations, planeRef);

  const adjustPlaneForScreenSize = () => {
    let screenScale,
      screenPosition = null;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  useEffect(() => {
    isRotating ? actions["Take 001"].play() : actions["Take 001"].stop();
  }, [actions, isRotating]);

  return (
    <mesh
      {...props}
      scale={planeScale}
      position={planePosition}
      rotation={[0, 20, 0]}
      ref={planeRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
