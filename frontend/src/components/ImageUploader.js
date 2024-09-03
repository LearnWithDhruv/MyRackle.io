import React, { useState } from 'react';

const ImageUploader = ({ onImagesChange }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        onImagesChange(files);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleImageChange} />
            <div>
                {images.map((img, idx) => (
                    <p key={idx}>{img.name}</p>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;
