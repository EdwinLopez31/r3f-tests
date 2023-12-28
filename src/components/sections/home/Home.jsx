/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../../Loader/Loader";
import Island from "../../../models/island";
import { Sky } from "../../../models/sky";
import Plane from "../../../models/plane";
import Bird from "../../../models/bird";

import sakura from "../../../assets/sakura.mp3";
import { SpeakerOn } from "../../icons/speaker-on";
import { SpeakerOff } from "../../icons/speaker-off";
import { Html, OrbitControls } from "@react-three/drei";
import { Woodware } from "../../../models/woodware";
import IslandScene from "../../scenes/IslandScene";
import WoodwareScene from "../../scenes/WoodwareScene";

function Home() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(new Audio(sakura));

  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  useEffect(() => {
    let music = audioRef.current;
    if (isPlayingMusic) {
      music.play();
    }

    return () => {
      music.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className='w-full h-screen relative'>
      {/* Uncomment a scene to make it visible on screen, remember to comment out the other scene */}
      <IslandScene />
      {/* <WoodwareScene /> */}
      <button
        onClick={() => setIsPlayingMusic((prev) => !prev)}
        className='absolute rounded-full text-white shadow-md bg-emerald-600 bottom-2 left-2 object-contain p-2'
      >
        {isPlayingMusic ? <SpeakerOn /> : <SpeakerOff />}
      </button>
    </section>
  );
}

export default Home;
