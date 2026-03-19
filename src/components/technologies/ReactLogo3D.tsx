// src/components/React3DLogo.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";

function ReactModel() {
  const gltf = useGLTF("/reactLogo.glb"); // Asegurate de que esté en /public
  return (
    <primitive object={gltf.scene} scale={0.9} rotation={[0, Math.PI / 6, 0]} />
  );
}

export default function React3DLogo() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className="w-full h-full flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <ReactModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
