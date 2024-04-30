import { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const backgrounds = [
    {
        id: 1,
        url: './sea.jpg', // default image
    },
];

export default function Panorama({ userImage }) {
    const url = useMemo(() => {
        return userImage || backgrounds.find(({ id }) => id === 1).url;
    }, [userImage]); // cache between rerender
    const background = useLoader(THREE.TextureLoader, url);

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={background} side={THREE.BackSide} />
            </mesh>
        </group>
    );
}
