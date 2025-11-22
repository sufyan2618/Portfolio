import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { inSphere } from 'maath/random';

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const data = new Float32Array(6000);
    return inSphere(data, { radius: 1.5 });
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#34d399" 
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const FloatingShape = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} scale={0.6}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-black via-gray-900 to-black">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Stars />
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} intensity={1.5} color="#34d399" />
          <pointLight position={[-2, -2, -2]} intensity={1} color="#2dd4bf" />
          
          <group position={[0.8, 0.5, -1]}>
               <FloatingShape />
          </group>
          
          {/* Add fog for depth */}
          <fog attach="fog" args={['#000000', 1.5, 3.5]} />
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
