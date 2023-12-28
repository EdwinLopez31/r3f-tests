import React, { Suspense, useState } from "react";
import { Sky } from "../../models/sky";
import { Canvas } from "@react-three/fiber";
import Plane from "../../models/plane";
import Bird from "../../models/bird";
import Island from "../../models/island";
import Loader from "../Loader/Loader";

const IslandScene = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  return (
    <>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.5} />
        <hemisphereLight
          skyColor='#b1e1ff'
          groundColor='#000000'
          intensity={0.75}
        />

        <directionalLight position={[1, 1, 1]} intensity={2} />
        <Suspense fallback={<Loader />}>
          <Sky isRotating={isRotating} />
          <Plane isRotating={isRotating} setIsRotating={setIsRotating} />
          <Bird />
          <Island
            setCurrentStage={setCurrentStage}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default IslandScene;
