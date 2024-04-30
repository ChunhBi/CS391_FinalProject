
import { useState } from 'react';




const ModelUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.obj')) {
            setFile(uploadedFile);
            // Optionally, you can read the file or send it to a server here
            console.log('File uploaded:', uploadedFile.name);
        } else {
            console.error('Please upload a valid .obj file.');
        }
    };




    return (

        <div>
            <input type="file" accept=".obj" onChange={handleFileChange} />
            {file && <p>File ready for processing: {file.name}</p>}
        </div>
    );
};

export default ModelUpload;


