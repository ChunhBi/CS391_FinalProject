import {Canvas, useLoader} from "@react-three/fiber";
import Controls from "./Controls.jsx";
import {Suspense, useState} from "react";
import Panorama from "./Panorama.jsx";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader.js";


export default function SceneComponent() {
    const [userImage, setUserImage] = useState(null);
    const [userObj, setUserObj] = useState(null);

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

    const handleObjFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.obj')) {
            const reader = new FileReader();
            reader.onload = e => {
                console.log("Data URL:", e.target.result);
                setUserObj(e.target.result);
            };
            reader.readAsDataURL(uploadedFile);
        } else {
            console.error('Please upload a valid .obj file.');
        }
    };


    return (
        <div id='Canvas-container' style={{height: "60%", width: "60%"}}>
            <Canvas>
                <Controls/>
                <Suspense fallback={null}>
                    <Panorama userImage={userImage} obj={userObj} />
                    {/* <Panoramabackground></Panoramabackground> */}
                </Suspense>

                <ambientLight intensity={0.5}/>

                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[-10, -10, -10]}/>
            </Canvas>


            {/* ========================================= */}
            <p style={{display: "inline"}}>Upload Background: </p>
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
            />

            <p style={{display: "inline"}}>Upload Obj: </p>
            <input
                type="file"
                onChange={handleObjFileChange}
                accept=".obj"
            />
        </div>
    )
}