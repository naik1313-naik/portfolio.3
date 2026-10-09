import { useEffect, useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotionPref } from '../hooks/useMedia';

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function randomSpherePoint(radius: number, minY: number, maxY: number): [number, number, number] {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = radius * (0.92 + Math.random() * 0.16);
  let y = r * Math.cos(phi);
  if (y > maxY) y = maxY;
  if (y < minY) y = minY;
  const x = r * Math.sin(phi) * Math.cos(theta);
  const z = r * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

function PointsCloud({ count, radius, size, color, opacity }: { count: number; radius: number; size: number; color: string; opacity: number }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const [x, y, z] = randomSpherePoint(radius, -radius, radius);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count, radius]);

  return (
    <points geometry={geometry} frustumCulled={false}>
      <pointsMaterial size={size} color={color} transparent opacity={opacity} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Orbiter({ radius, speed, color, tilt, phase }: { radius: number; speed: number; color: string; tilt: [number, number, number]; phase: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * speed + phase;
    mesh.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.6) * radius * 0.35, Math.sin(t) * radius);
  });
  return (
    <group rotation={tilt}>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function Portrait() {
  const group = useRef<THREE.Group>(null);
  const q = useMemo(() => new THREE.Quaternion(), []);
  const portrait = useLoader(THREE.TextureLoader, '/assets/portrait.jpg');

  useEffect(() => {
    portrait.colorSpace = THREE.SRGBColorSpace;
    portrait.anisotropy = 4;
  }, [portrait]);

  useFrame(({ camera }) => {
    if (!group.current) return;
    camera.getWorldQuaternion(q);
    group.current.quaternion.copy(q);
  });

  return (
    <group ref={group}>
      <mesh scale={1.18} position={[0, 0, -0.02]}>
        <planeGeometry args={[2.2, 2.2]} />
        <meshBasicMaterial transparent blending={THREE.AdditiveBlending} depthWrite={false} opacity={0.9} />
      </mesh>
      <mesh>
        <circleGeometry args={[1.02, 96]} />
        <meshBasicMaterial map={portrait} transparent />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[1.06, 1.1, 128]} />
        <meshBasicMaterial color="#ff4b1f" transparent opacity={0.9} />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <ringGeometry args={[1.22, 1.235, 128]} />
        <meshBasicMaterial color="#f4f0e8" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function SceneOrb({ density, interactive }: { density: number; interactive: boolean }) {
  const spin = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotionPref();

  useEffect(() => {
    if (!interactive || reduced) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [interactive, reduced]);

  useFrame(({ clock, camera }, delta) => {
    const t = clock.getElapsedTime();

    if (spin.current) {
      spin.current.rotation.y += delta * 0.14;
      spin.current.rotation.z += delta * 0.02;
      if (reduced) spin.current.rotation.y = t * 0.12;
    }

    if (tilt.current && interactive && !reduced) {
      tilt.current.rotation.x += (pointer.current.y * 0.24 - tilt.current.rotation.x) * 0.05;
      tilt.current.rotation.y += (pointer.current.x * 0.34 - tilt.current.rotation.y) * 0.05;
    }

    const sc = clamp(window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight), 0, 1);
    if (spin.current) {
      spin.current.position.y = lerp(0, -0.9, sc);
      spin.current.scale.setScalar(lerp(1, 0.9, sc));
    }
    camera.position.z = lerp(7.6, 9.2, sc);
    camera.position.x = lerp(0, 0.3, sc);
    camera.lookAt(0, spin.current?.position.y ?? 0, 0);
  });

  return (
    <group ref={spin}>
      <group ref={tilt}>
        <PointsCloud count={density} radius={1.75} size={0.04} color="#f4f0e8" opacity={0.5} />
        <PointsCloud count={Math.round(density * 0.16)} radius={2.0} size={0.07} color="#ff4b1f" opacity={0.85} />
        <Portrait />
      </group>
      <mesh rotation={[1.15, 0.3, 0]}>
        <torusGeometry args={[2.35, 0.005, 8, 160]} />
        <meshBasicMaterial color="#f4f0e8" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[0.6, 1.3, 0.4]}>
        <torusGeometry args={[2.7, 0.003, 8, 160]} />
        <meshBasicMaterial color="#7c9cff" transparent opacity={0.18} />
      </mesh>
      <Orbiter radius={2.1} speed={0.3} color="#ff4b1f" tilt={[0.2, 0.5, 0]} phase={0} />
      <Orbiter radius={2.55} speed={-0.22} color="#7c9cff" tilt={[1.2, -0.4, 0.3]} phase={2} />
    </group>
  );
}

export default function Orb() {
  const reduced = useReducedMotionPref();
  const count = 3600;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
      frameloop={reduced ? 'demand' : 'always'}
      resize={{ scroll: false }}
    >
      <ambientLight intensity={1.4} />
      <pointLight position={[4, 3, 6]} intensity={60} color="#ff4b1f" />
      <pointLight position={[-6, -3, 4]} intensity={40} color="#7c9cff" />
      <Suspense fallback={null}>
        <SceneOrb density={count} interactive={!reduced} />
      </Suspense>
    </Canvas>
  );
}