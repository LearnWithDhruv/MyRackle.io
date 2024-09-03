import React from 'react';

const TextBox = ({ onTextChange }) => {
    return (
        <div>
            <textarea 
                placeholder="Optional context" 
                onChange={(e) => onTextChange(e.target.value)}
            />
        </div>
    );
};

export default TextBox;
