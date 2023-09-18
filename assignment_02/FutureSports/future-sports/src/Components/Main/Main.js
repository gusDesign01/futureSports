import React from "react";
import PhotoGallery from "./PhotoGallery";
import News from "./News";
import EventsBox from "./EventsBox";
//import ContactUs from "../Aside/ContactUs";

//In this component all the other components are imported and then rendered on the webpage once showContent is triggered as true



const Main = ({ foundNewsArticle, foundEventsArticle, foundPhotoArticle}) => {
    console.log('foundNewsArticle:', foundNewsArticle); //Logs wether the library is present 
    console.log('foundEventsArticle:', foundEventsArticle); //Logs wether the library is present 
    console.log('foundPhotoArticle:', foundPhotoArticle); //Logs wether the library is present 


    return (
    <div className="article-section">
    {foundNewsArticle &&(
        <div className="news-section">
            <News foundNewsArticle={foundNewsArticle} /> 
            {/* Renders the news component */}
        </div>
    )}

{foundEventsArticle &&(
        <div className="events-section">
            <EventsBox foundEventsArticle={foundEventsArticle} />
            {/* Renders the Events component */}
        </div>
    )}

{foundPhotoArticle &&(
        <div className="photo-section">
            <PhotoGallery foundPhotoArticle={foundPhotoArticle} />
            {/* Renders the Photo  Gallery component */}
        </div>
    )}
        
    </div>
    );
};



export default Main;

