import './App.css';
import {
  Canvas,
  useThree,
  extend,
  useFrame,
  ReactThreeFiber,
} from '@react-three/fiber';
import Box from './components/Box';
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

// OrbitControlsをラップした新しいコンポーネントを作成
const CameraControls: React.FC = () => {
  const { camera, gl } = useThree<ThreeCanvasProps>();
  const controlsRef = useRef<OrbitControls>(null);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};
const App: React.FC = () => {
  return (
    //   <>
    //     <div id="canvas-container">
    //       <Canvas>
    //         <Box position={[-1.6, 0, 0]} />
    //         <Box position={[1.6, 0, 0]} />
    //         <ambientLight intensity={0.5} />
    //         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    //         <pointLight position={[-10, -10, 10]} />
    //       </Canvas>
    //     </div>
    //     <h1>Threejs Fiber</h1>
    //     <a href="">もっと見る</a>
    //   </>
    // );
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <CameraControls />
      </Canvas>
      ;
    </div>
  );
};

export default App;
