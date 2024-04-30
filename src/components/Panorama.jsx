

import { useMemo, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const backgrounds = [
    {
        id: 1,
        url: './sea.jpg',
    },
];

export default function Panorama({ userImage, obj }) {
    const url = useMemo(() => {
        return userImage || backgrounds.find(({ id }) => id === 1).url;
    }, [userImage]);
    {/* Handles the uploading of the 3d model Obj file*/}
    const background = useLoader(THREE.TextureLoader, url);
    const input_obj = useLoader(OBJLoader, obj);

    // State managing for the Y offset of model(for zoom in and out)
    const [yOffset, setYOffset] = useState(0);


    const { gl } = useThree();

    {/* Handles the Scroll wheel for changing the y0ffset*/}
    const handleWheel = (event) => {

        setYOffset((prev) => prev + event.deltaY * 0.01);
    };


    useMemo(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('wheel', handleWheel);


        return () => canvas.removeEventListener('wheel', handleWheel);
    }, [gl.domElement]);

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={background} side={THREE.BackSide} />
            </mesh>

            {/* Applies the scrolling y0ffset positions*/}
            <primitive object={input_obj} position={[0, yOffset, 0]} />
        </group>
    );
}
