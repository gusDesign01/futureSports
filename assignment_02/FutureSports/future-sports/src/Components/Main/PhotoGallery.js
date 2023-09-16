import React, { useState } from "react";
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  { Carousel } from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';

const PhotoGallery = ({ foundPhotoArticle }) => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    console.log("Photo:", foundPhotoArticle);

    if (!foundPhotoArticle || !foundPhotoArticle.photos) {
        console.log("Invalid article or missing photos property");
        return null;
    }

    const nextPhoto = () =>{
        setCurrentPhotoIndex((prevIndex) =>
        (prevIndex + 1) % foundPhotoArticle.photos.length
        );
    };

    const previousPhoto = () => {
        setCurrentPhotoIndex((prevIndex) =>
        (prevIndex -1 + foundPhotoArticle.photos.length) % foundPhotoArticle.photos.length
        );
    };

    return (
        <div className="photo-gallery">
            {foundPhotoArticle && foundPhotoArticle.photos.length > 0 ? (
                <CSSTransition in={true} timeout={500} classNames={{enter: "carousel-transition-enter", enterActive: "carousel-transition-enter-active", exit: "carousel-transition-exit", exitActive: "carousel-transition-exit-active",}}>
                    {(state) => (
                        <div>
                            <Carousel>
                                {foundPhotoArticle.photos.map((photo, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={photo} alt={`Photo ${index + 1}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <div>
                                {/* <Carousel.Prev onClick={previousPhoto} />
                                <Carousel.Next onClick={nextPhoto} /> */}
                            </div>
                        </div>
                    )}
                </CSSTransition>
            ) : (
                <p>No photos available</p>
            )}
        </div>
    );
};


export default PhotoGallery;