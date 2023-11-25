import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Box position={[-1.6, 0, 0]} />
          <Box position={[1.6, 0, 0]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, 10]} />
        </Canvas>
      </div>
      <h1>Threejs Fiber</h1>
      <a href="">もっと見る</a>
    </>
  );
}

export default App;
