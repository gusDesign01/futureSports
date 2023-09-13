import React, { useState, useEffect } from "react";
import ContactUs from "./ContactUs"
import PhotoGallery from "./PhotoGallery";
import News from "./News";
import EventsBox from "./EventsBox";
import SplashWindow from "./SplashWindow"
import NewsLibrary from "./NewsLibrary"
//import '../../App.css';



const Main = () => {

    const [foundNewsArticle, setFoundNewsArticle] = useState(null);
    const [foundEventsArticle, setFoundEventsArticle] = useState(null);

    useEffect(() => {

    // Simulating API fetch with a delay of 1 second

    const fetchData = () => {

        setTimeout(() => {
            setFoundNewsArticle(NewsLibrary);
            setFoundEventsArticle(NewsLibrary);
            }, 1000);
            };
        
            fetchData();
            }, []);

    const handleSetFoundArticle = (article) => {
        setFoundNewsArticle(article);
        setFoundEventsArticle(article);
    }; 

    return (
        <div className="MainSection">
            
            
            <>
            <div>
                <h3>News Component</h3>
                <SplashWindow handleSetFoundArticle={handleSetFoundArticle} />
                {foundNewsArticle && <News article={foundNewsArticle} />}
            </div>
            
            <div>
                <h3>Photo Gallery</h3>
                <SplashWindow handleSetFoundArticle={handleSetFoundArticle} />
                {foundEventsArticle && <PhotoGallery article={foundEventsArticle} />}
            </div>

            <div>
                <h3>Events Component</h3>
                <SplashWindow handleSetFoundArticle={handleSetFoundArticle} />
                {foundEventsArticle && <EventsBox article={foundEventsArticle} />}
            </div>

            <ContactUs />
            </>

        </div>
    );
};

export default Main;

