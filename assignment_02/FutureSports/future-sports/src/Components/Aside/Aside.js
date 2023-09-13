import React, { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import SplashWindow from "../Main/SplashWindow";
import NewsLibrary from "../Main/NewsLibrary.json"
import '../../App.css';

const Aside = () => {

    const [foundVideoArticle, setFoundVideoArticle] = useState(null);

    useEffect(() => {

    // Simulating API fetch with a delay of 1 second

    const fetchData = () => {

        setTimeout(() => {
            setFoundVideoArticle(NewsLibrary);
            }, 1000);
            };
        
            fetchData();
            }, []);

    const handleSetFoundArticle = (article) => {
        setFoundVideoArticle(article);
    }; 

    return (
        <div className="aside-section">
        <h3>Video</h3>
        <SplashWindow handleSetFoundArticle={handleSetFoundArticle} />
        {foundVideoArticle && <VideoBox article={foundVideoArticle} />}
        </div>
    );
};

export default Aside;