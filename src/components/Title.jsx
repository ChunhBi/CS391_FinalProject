
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';

import Jersey from '../assets/Jersey15_Regular.json';
import {Text3D} from "@react-three/drei";

extend({ TextGeometry });

export default function Title() {
    const font = new FontLoader().parse(Jersey);

    return (
        <mesh>
            <Text3D font={font} args={['Online 3D Reader', {font, size: 2, height: .2}]}>
                Hello world!
                <meshNormalMaterial />
            </Text3D>
            <textGeometry args={['Online 3D Reader', {font, size: 2, height: .2}]} />
            <meshStandardMaterial attach={'material'}  color={'white'}></meshStandardMaterial>
        </mesh>
    )
}