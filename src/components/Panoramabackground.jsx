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

export default function Panoramabackground() {
    const [activeBackground, setActiveBackground] = useState(1);
    const [userImage, setUserImage] = useState(null);
    const { url } = backgrounds.find(({ id }) => id === activeBackground);
    const backgroundurl = userImage || url;
    const background = useLoader(THREE.TextureLoader, backgroundurl);

    // function getActiveBackground() {
    //     var currentId = activeBackground + 1
    //     if (currentId === 5) {
    //         currentId = 1
    //     }
    //     return currentId
    // }

    const handleFileChange = event => {
        const file = event.target.files[0];
        // if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUserImage(e.target.result);  
            };
            reader.readAsDataURL(file);
        // } else {
        //     alert('Please select an image file.');
        // }
    };

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={background} side={THREE.BackSide} />
            </mesh>
            <input type="file" onChange={handleFileChange} accept="image/*" style={{ position: 'absolute', zIndex: 10 }} />

            {/* <group
                onClick={(e) => {
                    e.stopPropagation();
                    // setActiveBackground(getActiveBackground());
                }}
            >
                <Box />
            </group> */}
        </group>
    );
}
