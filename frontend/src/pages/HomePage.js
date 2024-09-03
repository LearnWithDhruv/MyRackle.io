import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import TextBox from '../components/TextBox';
import DescribeButton from '../components/DescribeButton';

const HomePage = () => {
    const [images, setImages] = useState([]);
    const [context, setContext] = useState('');
    

    const handleDescribeClick = async () => {
        const formData = new FormData();
        images.forEach(image => formData.append('images', image));
        formData.append('context', context);

        try {
            const response = await fetch('http://localhost:8000/api/describe', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Failed to fetch", error);
        }
    };

    return (
        <div>
            <h1>Test Case Generator</h1>
            <ImageUploader onImagesChange={setImages} />
            <TextBox onTextChange={setContext} />
            <DescribeButton onClick={handleDescribeClick} />
        </div>
    );
};

export default HomePage;
