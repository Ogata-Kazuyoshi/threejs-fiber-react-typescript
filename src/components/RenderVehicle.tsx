import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// import macralen from '../assets/car/mclaren/scene';

const macralen = '../assets/car/mclaren/scene.gltf';
const Model = () => {
  const gltf = useGLTF(macralen);
  return <primitive object={gltf.scene} />;
};

const RenderVehicle = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
};

export default RenderVehicle;
