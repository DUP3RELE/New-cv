import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";
import { useControls } from "leva";

export default function Model() {
	const { nodes } = useGLTF("/models/torrus.glb");
	const mesh = useRef<Mesh>(null);
	const { viewport } = useThree();

	const torusMesh = nodes.Torus002 as Mesh;

	useFrame(() => {
		if (mesh.current) {
			mesh.current.rotation.x += 0.015;
		}
	});

	const materialProps = {
		thickness: 0.2,
		roughness: 0,
		transmission: 1,
		ior: 1.2,
		chromaticAberration: 0.02,
		backside: true,
	};

	return (
		<group scale={viewport.width / 3.5}>
			<Text
				font={"/font/Nunito-VariableFont_wght.ttf"}
				position={[0, 0, -1]}
				fontSize={0.5}
				color='white'
				anchorX='center'
				anchorY='middle'
			>
				Witaj
			</Text>
			<mesh
				ref={mesh}
				geometry={torusMesh.geometry}
				material={torusMesh.material}
			>
				<MeshTransmissionMaterial {...materialProps} />
			</mesh>
		</group>
	);
}
