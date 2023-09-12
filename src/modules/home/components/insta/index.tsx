"use client";
import React, {useEffect, useState} from 'react';
import {fetchMedia, InstagramImage} from "@lib/insta";
import "styles/insta.css"

const Insta = () => {
    const [images, setImages] = useState<InstagramImage[]>([]);
    useEffect(() => {
        // Call the fetchInstagramImages function and update state
        fetchMedia()
            .then((data) => {
                setImages(data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);


    return (
        <div className="instagram-feed">
            {images.slice(0, 9).map((image) => (
                <div key={image.id} className="instagram-item">
                    <a href={image.permalink} target="_blank" rel="noopener noreferrer">
                        <div className="image-container">
                            <img src={image.media_url} alt="" />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Insta