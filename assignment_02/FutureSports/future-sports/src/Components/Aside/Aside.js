import React, { useState } from "react";
import VideoBox from "./VideoBox";
import SplashWindow from "../Main/SplashWindow";

const Aside = () => {

    const [foundArticle, setFoundArticle] = useState(null);

    return (
        <div>
        <h3>Video</h3>
        <SplashWindow setFoundArticle={setFoundArticle} />
        {foundArticle && <VideoBox article={foundArticle} />}
        </div>
    );
};

export default Aside;