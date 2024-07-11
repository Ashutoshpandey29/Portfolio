import {React, useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import laptopScene from '../assets/3d/laptop.glb'
import {useFrame} from '@react-three/fiber'

const Laptop = () => {
    const laptopRef = useRef();
    const laptop = useGLTF(laptopScene);

    // useFrame(() => {
    //     laptopRef.current.rotation.y += 0.15*delta;;
    // })

  return (
    <mesh>
        <primitive object={laptop.scene} />
    </mesh>
  )
}

export default Laptop