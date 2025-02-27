'use client'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { Model } from './Model'
import { useScroll, useTransform } from 'motion/react'

// 1- camera.position.set(3,0,5) fov={15}
// 2- camera.position.set(-5,0,5) fov={15}
// 3- camera.lookAt(-0.8,0,0)
// camera.position.set(0,0,-5)
// 4- camera.lookAt(0,0,0)
// camera.position.set(4,2,6)
// 5-camera.lookAt(0,0,0)
// camera.position.set(0,0,-5)

const Scene = () => {
  const { camera } = useThree();
  const controlsRef = useRef(null);
  const { scrollYProgress } = useScroll();


  const px = useTransform(scrollYProgress, [0,0.25,0.5,0.75,1], [3,-5,0 ,4,0 ]); 
  const pz = useTransform(scrollYProgress, [0,0.25,0.5,0.75,1], [0,0 ,0 ,2,0 ]); 
  const py = useTransform(scrollYProgress, [0,0.25,0.5,0.75,1], [5,5 ,-5,6,5]); 
  const Lookx = useTransform(scrollYProgress, [0,0.25,0.5,0.75,1], [0,0,-0.8,0,0]); 
  const Lookz = useTransform(scrollYProgress, [0,0.25,0.5,0.75,1], [0,0,0,0,0]); 
  const Looky = useTransform(scrollYProgress, [0,0.25,0.5,0.75,1], [0,0,0,0,0]); 

  useFrame(() => {
    const xPos = px.get(); 
    const zPos = pz.get(); 
    const yPos = py.get(); 
    const xLook = Lookx.get(); 
    const zLook = Lookz.get(); 
    const yLook = Looky.get(); 
    camera.position.set(xPos, zPos, yPos);
    camera.lookAt(xLook, zLook, yLook);
    
    console.log('Camera Position:', camera.position);
  });

  return (
    <Physics>
      {/* <axesHelper args={[100]} /> */}
      <PerspectiveCamera makeDefault fov={20} position={[0, 2, 5]} />
      {/* <OrbitControls ref={controlsRef} />  */}
      <Environment preset="city" />

      {/* Ground Plane */}
      <RigidBody type="fixed">
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[100, 100, 1]} />
          <meshBasicMaterial color="gray" />
        </mesh>
      </RigidBody>

      {/* 3D Model */}
      <RigidBody colliders="trimesh"> 
        <Model />
      </RigidBody>
    </Physics>
  );
};

export default Scene;
