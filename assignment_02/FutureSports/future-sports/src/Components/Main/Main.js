import React from "react";
import ContactUs from "./ContactUs"
import PhotoGallery from "./PhotoGallery";
import News from "./News";
import NewsDict from "./NewsDict"
import EventsBox from "./EventsBox";

const Main = () => {

    const NewsDictText = `This is a web app to provide information about the local community for locals and tourists.`; 

    return (
        <div className="MainSection">
            <ContactUs />
            <PhotoGallery />
            <News />
                <div className="News">
                    <NewsDict text={NewsDictText}/>
                </div>
            <EventsBox />

        </div>
    );
};

export default Main;