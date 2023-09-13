import React from "react";
import '../../App.css';

const PhotoGallery = ({ article }) => {
    return (
        <div className="photo-gallery">
            {article && article.photos && article.photos.length > 0 ? (
                <PhotoGallery photos={article} />
            ) : (
                <p>No photos available</p>      
            )}
        </div>
    );
};

export default PhotoGallery;