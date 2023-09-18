import React from "react";
import '../../App.css';

//In this component once the user input is matched this will populate the relevant info into the table below

const EventsBox = ({ foundEventsArticle }) => {
    console.log("foundEventsArticle:", foundEventsArticle);

    if (!foundEventsArticle || !foundEventsArticle.info) {
        console.log("Invalid article or missing events property");
        return null;
    }
     return (
        <div className="events-box"> 
        <div className="events-heading">
            <h3 className="events-text">
                Upcoming Events
            </h3>
        </div>
            
            {foundEventsArticle && foundEventsArticle.info && foundEventsArticle.info.length > 0 ? (

                //  {/* Pulls in the data for table and then populates it with data matching the article */}

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {foundEventsArticle.info.map((event, index) => (

                            <tr key={index}>
                                <td>{event.date}</td>
                                <td>{event.name}</td>
                                <td>{event.location}</td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                    ) : (
                        <p>No events available.</p> //If no Event is found display this message 
                        )}
                        </div>
                        );
};


export default EventsBox;
