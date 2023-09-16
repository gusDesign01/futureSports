import React from "react";
import PhotoGallery from "./PhotoGallery";
import News from "./News";
import EventsBox from "./EventsBox";

// import NewsLibrary from "./NewsLibrary"
// import EventsLibrary from "./EventsLibrary"
// import PhotoLibrary from "./PhotoLibrary"
// import VideoLibrary from "./VideoLibrary"
//import '../../App.css';



const Main = ({ foundNewsArticle, foundEventsArticle, foundPhotoArticle}) => {
    console.log('foundNewsArticle:', foundNewsArticle);
    console.log('foundEventsArticle:', foundEventsArticle);
    console.log('foundPhotoArticle:', foundPhotoArticle);


    return (
    <div className="article-section">
    {foundNewsArticle &&(
        <div className="news-section">
            <News foundNewsArticle={foundNewsArticle} />
        </div>
    )}

{foundEventsArticle &&(
        <div className="events-section">
            <EventsBox foundEventsArticle={foundEventsArticle} />
        </div>
    )}

{foundPhotoArticle &&(
        <div className="photo-section">
            <PhotoGallery foundPhotoArticle={foundPhotoArticle} />
        </div>
    )}    
    </div>
    );
};



export default Main;

