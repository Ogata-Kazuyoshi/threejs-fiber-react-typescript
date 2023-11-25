import React from 'react';
import { Boxpostion } from '../interface/global';
import {
  Canvas,
  useThree,
  extend,
  useFrame,
  ReactThreeFiber,
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useRef } from 'react';
import { Camera, WebGLRenderer } from 'three';
extend({ OrbitControls });

// useThreeフックから返されるglオブジェクトの型
interface ThreeCanvasProps {
  camera: Camera;
  gl: WebGLRenderer;
}

// OrbitControlsの型定義
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

const BoxMoving: React.FC = () => {
  const { camera, gl } = useThree<ThreeCanvasProps>();
  const controlsRef = useRef<OrbitControls>(null);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

export default BoxMoving;
