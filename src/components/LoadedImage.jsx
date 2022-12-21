import React, { useState, useEffect } from 'react'

const LoadedImage = ({ src, name, classes }) => {
    const [status, setStatus] = useState('pending');
    const [image, setImage] = useState();
    
    useEffect(() => {
        const image = new Image();
        image.onload = () => setStatus('success')
        image.onerror = () => setStatus('failure')
        image.src = src;
        setImage(image)
    }, [src])
    

    return (
        <>
            {status === 'success' ? (
                <img
                src={image?.src}
                alt={name} 
                loading='lazy'
                className={classes}
                />
            ) : (
                <div className={`bg-slate-300 animate-pulse ${classes}`}></div>
            )}
        </>
    )
}

export default LoadedImage