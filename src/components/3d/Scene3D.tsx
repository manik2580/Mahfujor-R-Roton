import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, PerspectiveCamera, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-4, 2, -5]}>
          <MeshDistortMaterial
            color="#a855f7"
            speed={2}
            distort={0.3}
            radius={1}
            roughness={0.1}
            metalness={0.9}
            emissive="#a855f7"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[5, -3, -8]}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            wireframe 
            emissive="#3b82f6"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, -5, -10]}>
          <torusKnotGeometry args={[1.5, 0.4, 64, 16]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            roughness={0.2} 
            metalness={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
    </>
  );
}

export function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ 
        powerPreference: "high-performance",
        alpha: true,
        antialias: false,
        stencil: false,
        depth: true
      }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.2} />
        
        {/* Main highlight light */}
        <spotLight
          position={[15, 20, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#a855f7"
          castShadow
        />
        
        {/* Fill light */}
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />
        
        {/* Rim light for edge highlighting */}
        <directionalLight position={[0, 5, -5]} intensity={0.5} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <FloatingShapes />
        
        <fog attach="fog" args={['#050505', 10, 30]} />
      </Suspense>
    </Canvas>
  );
}
