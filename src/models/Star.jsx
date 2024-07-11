import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import starScene from '../assets/3d/stars.glb'

const Star = (props) => {
  const star = useGLTF(starScene)
  const starRef = useRef();

  useFrame((_, delta) => {
    starRef.current.rotation.y += 0.15*delta;
  })

  return (
    <mesh ref = {starRef}>
        <primitive object = {star.scene} />
    </mesh>
  )
}

export default Star
