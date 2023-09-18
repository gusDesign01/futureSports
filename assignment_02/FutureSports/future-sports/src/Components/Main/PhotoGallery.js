import React, { useState } from "react";
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  { Carousel } from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';
import './PhotoLibrary.json'

//In this component once the user input is matched this will populate the Carousel with the relevant photos in the json file

const PhotoGallery = ({ foundPhotoArticle }) => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); //Define state for the current photo index

    console.log("Photo:", foundPhotoArticle);

    //Check to see if the photos are missing

    if (!foundPhotoArticle || !foundPhotoArticle.photoUrl || foundPhotoArticle.photoUrl.length === 0) {
        console.log("Cant find photo urls");
        return null;
    }

    return (

        <div className="photo-gallery-container">
            <div className="photo-heading-cotainer">
            <h3 className="photo-gallery-heading"> Photo Gallery </h3>
            </div>
        <div className="photo-gallery">
            {foundPhotoArticle && foundPhotoArticle.photoUrl.length > 0 ? (
                <CSSTransition in={true} timeout={500} classNames={{enter: "carousel-transition-enter", enterActive: "carousel-transition-enter-active", exit: "carousel-transition-exit", exitActive: "carousel-transition-exit-active",}}>
                    {(state) => (
                        <div>
                            <Carousel>
                                {foundPhotoArticle.photoUrl.map((url, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={url} alt={`Photo ${index + 1}`} />
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
        </div>
    );
};


export default PhotoGallery;