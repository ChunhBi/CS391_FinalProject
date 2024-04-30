import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Controls from "./Controls.jsx";
import Panorama from "./Panorama.jsx";
import Model from "./Model.jsx";


export default function SceneComponent() {
    const [userImage, setUserImage] = useState(null);
    const [userObj, setUserObj] = useState(null);

    const handleFileChange = event => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {  // Ensure it's an image
            // const objectURL = URL.createObjectURL(file);
            // setUserImage(objectURL);
            const reader = new FileReader();
            reader.onload = e => { // trigger when the file is read
                console.log("Data URL:", e.target.result);
                setUserImage(e.target.result);
            };
            reader.readAsDataURL(file); // read file
        } else {
            console.log("Invalid file type:", file.type);
        }
    };

    const handleObjFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.obj')) {  // Ensure it's an obj file
            const reader = new FileReader();
            reader.onload = e => { // trigger when the file is read
                console.log("Data URL:", e.target.result);
                setUserObj(e.target.result);
            };
            reader.readAsDataURL(uploadedFile); // read file
        } else {
            console.error('Please upload a valid .obj file.');
        }
    };


    return (
        <div id='Canvas-container' style={{height: "60%", width: "60%"}}>
            <Canvas>
                <Controls/>
                <Suspense fallback={null}>
                    <Panorama userImage={userImage}/>
                    <Model obj={userObj}/>
                </Suspense>

                <ambientLight intensity={0.5}/>

                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[-10, -10, -10]}/>
            </Canvas>

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