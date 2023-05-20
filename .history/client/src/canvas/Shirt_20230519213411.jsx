/* eslint-disable no-unused-vars */
import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLF, useTexture } from '@react-three/drei'

import state from '../store'
import { Group } from 'three'

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);


  return (
    <group>
      <mesh
      castShadow
      geometry={node.T_Shirt.geometry}
      material={node.T_Shirt.lambert1}
      material-roughness={1}
      dispose={null}
      >

      </mesh>
    </group>
    )
}

export default Shirt