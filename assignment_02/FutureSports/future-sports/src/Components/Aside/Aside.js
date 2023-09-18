import React, { useState, useEffect } from "react";
import VideoBox from "./videoBox";
import "../Main/SplashWindow";
//import VideoLibrary from "../Main/VideoLibrary"
import '../../App.css';
import ContactUs from "./ContactUs";

const Aside = ({ foundVideoArticle }) => {


    console.log('foundVideoArticle:', foundVideoArticle);

    return(
    <div className="video-section">
    {foundVideoArticle &&(
        <div className="video-player-section">
            <div className="video-player">
                <VideoBox foundVideoArticle={foundVideoArticle}/>
            </div>
        </div>
    )}

    <div className="contact-section">
        <div className="contact-heading-container">
            <h2 className="contact-heading-text">
                Contact Us
            </h2>
        </div>
        <ContactUs />
    </div>
    </div>
    );
};

export default Aside;