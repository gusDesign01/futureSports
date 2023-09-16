import React from "react";
import '../../App.css';

const EventsBox = ({ foundEventsArticle }) => {
    console.log("foundEventsArticle:", foundEventsArticle);

    if (!foundEventsArticle || !foundEventsArticle.info) {
        console.log("Invalid article or missing events property");
        return null;
    }
     return (
        <div className="events-box">
            
            {foundEventsArticle && foundEventsArticle.info && foundEventsArticle.info.length > 0 ? (

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
                        <p>No events available.</p>
                        )}
                        </div>
                        );
};


export default EventsBox;
