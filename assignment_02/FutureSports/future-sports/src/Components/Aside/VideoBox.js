import React from "react";
import "../Main/SplashWindow"
import "../Main/VideoLibrary.json"

//import VideoBox from "../Aside/Aside/VideoBox"

const VideoBox = ({ foundVideoArticle }) => {
    return (
        <div className="video-box">
            <div>
                <h3>Video Component</h3>
                {foundVideoArticle && <VideoBox foundVideoArticle={foundVideoArticle} />}
            </div>
        </div>
    );
};

export default VideoBox;