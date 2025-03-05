'use client'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    s14_Material010_0: THREE.Mesh
    s14_Material001_0: THREE.Mesh
    s14_Material002_0: THREE.Mesh
    s14_Material005_0: THREE.Mesh
    s14_Material003_0: THREE.Mesh
    s14_Material006_0: THREE.Mesh
    s14_Material004_0: THREE.Mesh
    s14_Material007_0: THREE.Mesh
    s14_Material008_0: THREE.Mesh
    s14_Material009_0: THREE.Mesh
  }
  materials: {
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

export function Model(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/silva/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, -9.276, -35.343]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[26.145, 24.845, 24.845]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material010_0.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material005_0.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material006_0.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name='lights'

            castShadow
            receiveShadow
            geometry={nodes.s14_Material004_0.geometry}
            material={materials['Material.004']}
          >
            <meshStandardMaterial
              emissive={"#aaaa55"}
              emissiveIntensity={5}
              color={"#ffffff"}
              toneMapped={false}
            />

            <spotLight
              color={"#ffffaa"}
              intensity={100}
              distance={100}
              angle={1}
              penumbra={10}
              position={[0, -8, 1]}
              target-position={[0, 0, 0]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material008_0.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s14_Material009_0.geometry}
            material={materials['Material.009']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/silva/scene.gltf')
