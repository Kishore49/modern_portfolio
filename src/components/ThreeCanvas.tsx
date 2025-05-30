import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

const ParticleField = ({ count = 5000, color = '#3b82f6' }) => {
  const points = useRef<THREE.Points>(null!);
  
  // Generate random points in a sphere
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      positions[i * 3] = (2 * Math.cos(theta) * Math.sin(phi)) * Math.random();
      positions[i * 3 + 1] = (2 * Math.sin(theta) * Math.sin(phi)) * Math.random();
      positions[i * 3 + 2] = (2 * Math.cos(phi)) * Math.random();
    }
    
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    
    if (points.current) {
      // Rotate the points
      points.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      points.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.2;
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const ThreeCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;