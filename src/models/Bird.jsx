import {useRef, useEffect} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {

  const birdRef = useRef();
  const {scene, animations} = useGLTF(birdScene)
  const {actions} = useAnimations(animations, birdRef);
  
  useEffect(() => {
        actions['Take 001'].play();
    }, []);
    //dependency array is empty because we only want to run this once, what changes should trigger this action

  useFrame(({clock, camera}) => {
    // birdRef.current.position.x += 0.15*delta;
    //update the y position simulate the flight if the bird to move in a wave pattern or sine which changes with inc time and hence bird gets smaller as it goes further
    birdRef.current.position.y = Math.sin(clock.elapsedTime)*0.2 + 2;

    //rotate the bird
    if(birdRef.current.position.x > camera.position.x + 10)
    {
        birdRef.current.rotation.y = Math.PI;//rotate 180 deg if it exits the camera
    }else if(birdRef.current.position.x < camera.position.x - 10)
    {
        birdRef.current.rotation.y = 0;//rotate 0 deg if it does not exits the camera
    }

    //depending upon the direction

    if(birdRef.current.rotation.y === 0){ //rot->0 dirn forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
    }
    else{//rot->180 dirn backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh ref = {birdRef} position = {[-5, 2, 1]} scale = {[0.003, 0.003, 0.003]}>
        <primitive object = {scene} />
    </mesh>
  );
}

export default Bird