import { Canvas } from "@react-three/fiber";

export default function Unused1() {
  return (
    <>
      <div>____UNUSED1____</div>
      <Canvas
        shadows
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <mesh position={[0, -1, 0]} recieveShadow>
          <boxBufferGeometry args={[20, 1, 10]} />
          <meshPhysicalMaterial color='white' />
        </mesh>
      </Canvas>
    </>
  );
}
