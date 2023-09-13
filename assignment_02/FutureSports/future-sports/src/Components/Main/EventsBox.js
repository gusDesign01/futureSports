import React from "react";
import '../../App.css';

const EventsBox = ({ article }) => {
     return (
        <div className="events-box">
            <h2>Events</h2>
            {article.events && article.events.length > 0 ? (

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {article.events.map((event, index) => (

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
