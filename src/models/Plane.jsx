import {useRef, useEffect} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'

import planeScene from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {
const ref = useRef();
const {scene, animations} = useGLTF(planeScene)
const {actions} = useAnimations(animations, ref);//to enable animations

useEffect(() => {
    if(isRotating){
        actions['Take 001'].play();
    }
    else{
        actions['Take 001'].stop();
    }
}, [actions, isRotating])//taking animation from the planeScene in refernce to the model


  return (
    <mesh {...props} ref = {ref}>
        <primitive object = {scene} />
    </mesh>
  )
}

export default Plane