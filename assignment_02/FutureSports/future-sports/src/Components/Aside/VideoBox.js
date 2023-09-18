import React from "react";
import Youtube from "react-youtube"
import "../Main/SplashWindow"
import "../Main/VideoLibrary.json"

//import VideoBox from "../Aside/Aside/VideoBox"

const VideoBox = ({ foundVideoArticle }) => {
    return (
        <div className="video-box">
            <div>
                {foundVideoArticle && (
                    <div>
                        <h2>{foundVideoArticle.title}</h2>
                        {foundVideoArticle.videoUrl && (
                            <div className="video-player">
                                <Youtube videoId={foundVideoArticle.videoUrl}/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoBox;