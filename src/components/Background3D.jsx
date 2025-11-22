import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 3000, color = "#10b981", size = 0.002, radius = 1.5 }) => {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const CyberShape = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[1, 1]} ref={meshRef} scale={0.8}>
        <meshStandardMaterial
          color="#059669"
          emissive="#064e3b"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.3}
          roughness={0}
          metalness={1}
        />
      </Icosahedron>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <fog attach="fog" args={['#000000', 1, 5]} />
        
        {/* Background Stars */}
        <ParticleField count={4000} color="#059669" size={0.003} radius={2.5} />
        
        {/* Foreground Particles */}
        <ParticleField count={300} color="#34d399" size={0.008} radius={1.5} />

        {/* Hero Object - Moved to be more visible */}
        <group position={[1, 0, -0.5]}>
             <CyberShape />
        </group>

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      </Canvas>
      
      {/* Vignette & Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
};

export default Background3D;
