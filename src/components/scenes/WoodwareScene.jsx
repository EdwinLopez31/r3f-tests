import { Canvas } from "@react-three/fiber";
import React from "react";
import { Woodware } from "../../models/woodware";

const WoodwareScene = () => {
  return (
    <Canvas shadows>
      {/* <OrbitControls /> */}
      <directionalLight position={[1, 1, 4]} />
      <ambientLight />
      <Woodware />
    </Canvas>
  );
};

export default WoodwareScene;
