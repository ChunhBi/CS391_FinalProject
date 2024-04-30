import {Canvas} from "@react-three/fiber";
import Controls from "./Controls.jsx";
import {Suspense, useState} from "react";
import Panorama from "./Panorama.jsx";
import Helicopter from "./Helicopter.jsx";

export default function SceneComponent() {
    const [userImage, setUserImage] = useState(null);

    const handleFileChange = event => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {  // Ensure it's an image
            // const objectURL = URL.createObjectURL(file);
            // setUserImage(objectURL);
            const reader = new FileReader();
            reader.onload = e => {
                console.log("Data URL:", e.target.result);
                setUserImage(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            console.log("Invalid file type:", file.type);
        }
    };

    return (
        <div id='Canvas-container' style={{height: "60%", width: "60%"}}>
            <Canvas>
                <Controls/>
                <Suspense fallback={null}>
                    <Panorama userImage={userImage}/>
                    {/* <Panoramabackground></Panoramabackground> */}
                    <Helicopter/>
                </Suspense>

                <ambientLight intensity={0.5}/>

                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[-10, -10, -10]}/>
            </Canvas>


            {/* ========================================= */}
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{
                    position: 'absolute',
                    zIndex: 10,
                    pointerEvents: 'auto'
                }}  // Ensure the input is visible and accessible
            />
            <img src={userImage} alt="Preview"/>
            {/* ========================================= */}
        </div>
    )
}