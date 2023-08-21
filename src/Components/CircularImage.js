import React from 'react';
import './CircularImage.css';

const CircularImage = ({ src, alt, size = 100 }) => {
    return (
        <div className="circular-image" style={{ width: size, height: size }}>
            <img src={src} alt={alt} style={{height:"72%", width:"72%"}} />
        </div>
    );
}

export default CircularImage