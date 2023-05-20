/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';



const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>

     <Center>
      
     </Center>
    </Canvas>
  )
}

export default CanvasModel