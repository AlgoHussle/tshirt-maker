import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGTLF, useTexture } from '@react-three/drei'

import state from '../store'

const Shirt = () => {
  const snap = useSnapshot(state);
const { nodes, materials } = useGLTF('/shirt_baked.glb');

const logoTexture = useTexture(snap.logoDecal);
const fullTexture = useTexture(snap.fullDecal);


  return (
    <Group>
      <mesh
      castShadow
      geometry={nodes.T_}
      >

      </mesh>
    </Group>
    )
}

export default Shirt