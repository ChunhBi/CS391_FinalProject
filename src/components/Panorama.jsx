import { useState, useMemo} from 'react';
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

export default function Panorama({ userImage }) {
    const [selectImage, setSelectImage] = useState(userImage); 
    console.log("Loading texture with URL:", userImage);
    const [activeBackground, setActiveBackground] = useState(1);
    // const { url } = backgrounds.find(({ id }) => id === activeBackground);
    // const { url } = userImage ? userImage : backgrounds.find(({ id }) => id === activeBackground);
    const url = useMemo(() => {
        return userImage || backgrounds.find(({ id }) => id === activeBackground).url;
    }, [userImage, activeBackground]);
    const background = useLoader(THREE.TextureLoader, url);
    const abc = selectImage? selectImage : './skyscraper.jpg'
    const texture = useLoader(THREE.TextureLoader, abc);

    // function getActiveBackground() {
    //     var currentId = activeBackground + 1
    //     if (currentId === 5) {
    //         currentId = 1
    //     }
    //     return currentId
    // }

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={background} side={THREE.BackSide} />
            </mesh>

            <group
                onClick={(e) => {
                    e.stopPropagation();
                    // setActiveBackground(getActiveBackground());
                }}
            >
                <Box />
            </group>
        </group>
    );
}
