import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

const ParticleField = ({ count = 3000, color = '#3b82f6' }) => {
  const points = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  
  // Generate random points in a sphere with better distribution
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create more natural distribution
      const radius = Math.random() * 3 + 1;
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, [count]);

  // Mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    if (points.current) {
      // Gentle rotation with mouse interaction
      points.current.rotation.x = Math.sin(time * 0.1) * 0.1 + mouse.current.y * 0.1;
      points.current.rotation.y = Math.sin(time * 0.15) * 0.1 + mouse.current.x * 0.1;
      points.current.rotation.z = Math.sin(time * 0.05) * 0.05;
      
      // Subtle breathing effect
      const scale = 1 + Math.sin(time * 0.5) * 0.1;
      points.current.scale.setScalar(scale);
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingParticles = ({ count = 50 }) => {
  const points = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i) * 0.001;
        positions[i3] += Math.cos(time + i) * 0.0005;
      }
      
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const ThreeCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ParticleField count={window.innerWidth < 768 ? 1500 : 3000} />
          <FloatingParticles count={window.innerWidth < 768 ? 25 : 50} />
          <ambientLight intensity={0.1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;