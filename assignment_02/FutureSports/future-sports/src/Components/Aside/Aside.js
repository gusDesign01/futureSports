import React, { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import "../Main/SplashWindow";
//import VideoLibrary from "../Main/VideoLibrary"
import '../../App.css';

const Aside = ({ foundVideoArticle }) => {


    console.log('foundVideoArticle:', foundVideoArticle);

    return(
    <div className="video-section">
    {foundVideoArticle &&(
        <div className="video-section">
            <VideoBox article={foundVideoArticle} />
        </div>
    )}
    </div>
    );
};

export default Aside;