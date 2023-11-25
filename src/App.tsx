import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import BoxMoving from './components/BoxMoving';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isRotation, setIsRotation] = useState<boolean>(true);

  const changePage = () => {
    setIsRotation(!isRotation);
  };
  return (
    <>
      <div id="canvas-container">
        {isRotation ? (
          <Canvas>
            <Box position={[-1.6, 0, 0]} />
            <Box position={[1.6, 0, 0]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, 10]} />
          </Canvas>
        ) : (
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="orange" />
            </mesh>
            <BoxMoving />
          </Canvas>
        )}
      </div>
      <h1>Threejs Fiber</h1>
      {/* <a href="">もっと見る</a> */}
      <button className="change__page" onClick={changePage}>
        画面を切り替える（Rotate、マウスで動かす）
      </button>
    </>
  );
};

export default App;
