import { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Box from './Box.jsx';

const backgrounds = [
    {
        id: 1,
        url: './sea.jpg',
    },
    {
        id: 2,
        url: './pool.jpg',
    },
    {
        id: 3,
        url: './snow.jpg',
    },
    {
        id: 4,
        url: './skyscraper.jpg',
    },
];

export default function Panorama() {
    const [activeBackground, setActiveBackground] = useState(1);
    const { url } = backgrounds.find(({ id }) => id === activeBackground);
    const background = useLoader(THREE.TextureLoader, url);

    function getActiveBackground() {
        var currentId = activeBackground + 1
        if (currentId === 5) {
            currentId = 1
        }
        return currentId
    }

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={background} side={THREE.BackSide} />
            </mesh>

            <group
                onClick={(e) => {
                    e.stopPropagation();
                    setActiveBackground(getActiveBackground());
                }}
            >
                <Box />
            </group>
        </group>
    );
}
