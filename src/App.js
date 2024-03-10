import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NavbarW from './components/Navbar';
import ClickableBox from './components/ClickableBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnotherPage from './components/AnotherPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <NavbarW />
          <Canvas className="canvas" style={{ height: '700px' }}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ClickableBox />
          </Canvas>
        </>} />
        <Route path="/another-page" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
}
