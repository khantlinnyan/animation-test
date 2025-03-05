'use client'
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useScroll } from 'motion/react'
import { useFrame } from '@react-three/fiber'
import { IntervalHistogram } from 'node:perf_hooks'

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
  const { scrollYProgress } = useScroll();

  const [light, setLight] = useState(false)
  const intervalId = useRef<null | NodeJS.Timeout >(null); // Use a ref to store the interval ID

  const miqat = () => {
    intervalId.current = setInterval(() => {
      setLight((prev) => !prev);
    }, 200);
  };



  useEffect(() => {
    // Cleanup the interval when the component unmounts
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  useFrame(() => {
    if (scrollYProgress.get() > 0.95) {
      // Only start the interval if it hasn't been started yet
      if (!intervalId.current) {
        miqat(); // Start the interval and store the ID
      }
    } else {
      setLight(false);
      if (intervalId.current) {
        clearInterval(intervalId.current); // Clear the interval when scroll progress is less than 0.95
        intervalId.current = null;
      }
    }
  });

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
            {light && (
              <meshStandardMaterial
                emissive={"#aaaa55"}
                emissiveIntensity={3}
                color={"#ffffff"}
                toneMapped={false}
              />
            )}
            {light && (
              <spotLight
                color={"#ffffaa"}
                intensity={100}
                distance={100}
                angle={1}
                penumbra={10}
                position={[0, -8, 1]}
                target-position={[0, 0, 0]}
              />
            )}
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
