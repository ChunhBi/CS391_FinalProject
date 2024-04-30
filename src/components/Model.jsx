import { useLoader } from '@react-three/fiber';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";


export default function Model({ obj }) {
    const input_obj = useLoader(OBJLoader, obj)

    return (
        <group>
            <primitive object={input_obj}/>
        </group>
    );
}
