import { useMemo} from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader.js";

const backgrounds = [
    {
        id: 1,
        url: './sea.jpg',
    },
];

export default function Scene({ userImage, obj }) {
    const url = useMemo(() => {
        return userImage || backgrounds.find(({ id }) => id === 1).url;
    }, [userImage]);
    const background = useLoader(THREE.TextureLoader, url);
    const input_obj = useLoader(OBJLoader, obj)

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={background} side={THREE.BackSide} />
            </mesh>

            <primitive object={input_obj}/>
        </group>
    );
}
