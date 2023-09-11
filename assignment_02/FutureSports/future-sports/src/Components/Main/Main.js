import React from "react";
import ContactUs from "./ContactUs"
import PhotoGallery from "./PhotoGallery";
import News from "./News";
import EventsBox from "./EventsBox";

const Main = () => {

    return (
        <div className="MainSection">
            <ContactUs />
            <PhotoGallery />
            <News />
            <EventsBox />

        </div>
    );
};

export default Main;