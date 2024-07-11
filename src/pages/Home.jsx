import { useState, Suspense, useEffect, useRef } from "react"; //used for renndering the loading screen
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Star from "../models/Star";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

//react-three-fiber-->react rendered for three.js

//to render something into a canvas it has to be a 3d property hence  we have to convert the loader to 3d
//#react-three/drei

//Glb for 3d model
//directional: light coming directly from the sun: brightness
//ambient: light coming from all directions: brightness
//point: light coming from a single point: brightness
//spot light in shape of a cone
//hemisphere: light coming from the sky or a gradient

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    //adjust the island size based on the screen size
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    //adjust the island size based on the screen size
    let screenScale = null;
    let screenPosition = null;
    //let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0 - 1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const dIntensity = isNight ? 2 : 0.5;
  const hIntensity = isNight ? 1 : 0.5;

  return (
    <section className="w-full h-screen relative bg-black">
      <div className="absolute top-28 left-0 right-0 z-10 flex item-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={
          "w-full h-screen bg-transparent $(isRotating ? 'cursor-grabbing' : 'cursor-grab'}"
        }
        camera={{ near: 0.1, far: 1000 }} //object with near and far properties wont be rendered
        //directional 2, ambinet 0.5, hemisphere 1,
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={dIntensity} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={hIntensity}
          /> 

          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Bird />
          {isNight? <Sky isRotating={isRotating} /> : <Star isRotating={isRotating} />}
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
          {/* mesh only takes pos and scale as real parametera */}
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="music"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      <div className="absolute bottom-2 right-2">
        <img
          src={!isNight ? sun : moon}
          alt="moon"
          className="w-10 h-10 cursor-pointer object-contain bg-slate-50 rounded-full p-1"
          onClick={() => setIsNight(!isNight)}
        />
      </div>
    </section>
  );
};

export default Home;
