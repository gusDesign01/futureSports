import React from "react";
//import VideoBox from "../Aside/Aside/VideoBox"

const VideoBox = ({ article}) => {
    return (
        <div className="news">
            <p>{article.videoUrl}</p>
        </div>
    );
};

export default VideoBox;