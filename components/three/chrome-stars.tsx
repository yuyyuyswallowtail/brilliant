"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

function Star({ side, animate, progress }: { side: -1 | 1; animate: boolean; progress: MotionValue<number> }) {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const s = new THREE.Shape();
    for (let k = 0; k < 4; k++) {
      const a = Math.PI / 2 + (k * Math.PI) / 2;
      const b = a + Math.PI / 2;
      const m = (a + b) / 2;
      if (k === 0) s.moveTo(Math.cos(a), Math.sin(a));
      s.quadraticCurveTo(Math.cos(m) * 0.18, Math.sin(m) * 0.18, Math.cos(b), Math.sin(b));
    }
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, {
      depth: 0.25, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.1, bevelSegments: 10, curveSegments: 48,
    });
    g.center();
    return g;
  }, []);

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const p = animate ? progress.get() : 0;
    m.position.set(side * viewport.width * (0.34 - 0.2 * p), viewport.height * (0.18 - 0.3 * p), 0);
    m.scale.setScalar(0.72 + 0.3 * p);
    m.rotation.y = animate ? state.clock.elapsedTime * 0.4 * side + p * Math.PI * 2 * side : 0;
  });

  return (
    <Float speed={animate ? 1.5 : 0} floatIntensity={animate ? 0.4 : 0} rotationIntensity={0}>
      <mesh ref={ref} geometry={geometry}>
        <meshStandardMaterial color="#d9deea" metalness={1} roughness={0.12} envMapIntensity={1.4} />
      </mesh>
    </Float>
  );
}

export default function ChromeStars({ animate, progress }: { animate: boolean; progress: MotionValue<number> }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.75]} frameloop={animate ? "always" : "demand"}>
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 3, 3]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#FF6B2C" position={[-5, 0, -2]} scale={[2, 6, 1]} />
        <Lightformer form="rect" intensity={3} position={[5, -2, 2]} scale={[2, 5, 1]} />
      </Environment>
      <Star side={-1} animate={animate} progress={progress} />
      <Star side={1} animate={animate} progress={progress} />
    </Canvas>
  );
}
