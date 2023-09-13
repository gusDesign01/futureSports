import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from 'react-bootstrap';
import NewsLibrary from "./NewsLibrary.json";
import News from "./News";
import VideoBox from "../Aside/VideoBox";
import EventsBox from "./EventsBox";
import '../../App.css';
import PhotoGallery from "./PhotoGallery";


const SplashWindow = ({ handleSetFoundArticle }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [showContent, setShowContent] = useState(false);

    const [foundArticle, setFoundArticle] = useState(null);

    useEffect(() =>{
        document.querySelector('.splash-window').classList.add('fade-in');
    }, []);

    //console.log(NewsLibrary);

    const handleSubmit = (event) => {
        event.preventDefault();
        //Handle search using the term searchTerm
        console.log(searchTerm)
        

        if (!searchTerm) {
            setErrorMessage('Please Enter a search term');
            setShowContent(false);
            setFoundArticle(null);
            return;
        }

        const foundArticle = NewsLibrary.find((article) =>

        article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (foundArticle) {
            setErrorMessage('');
            setShowContent(true);
            setFoundArticle(foundArticle);
        } else {
            setErrorMessage('No Matching Article Found');
            setShowContent(false);
            setFoundArticle(null);
        }

        handleSetFoundArticle(searchTerm);
        setSearchTerm(''); //Clearing the search term after submission
        
    };

    
   

return (
    <>
    {!showContent && (
        <div className="splash-window fade-out">
            <div className="splash-content">
                <h1>Welcome To Future Sports!</h1>

                <p>
                    To begin in the search box below search any sporting event you would to learn more about.
                    Or if your not sure what you want you can always type in /Random to be surprised!
                </p>

                <Form onSubmit={handleSubmit} className="search-form">
                    <div className="search-group">
                        <Form.Control type="text" placeholder="Enter your Search Query" className="search-input" name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <Button variant="primary" type="submit" className="splashSearchButton">Search</Button>
                    </div>
                </Form>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div>
        </div>
    )}
    {showContent && (
        <>
        <News article={foundArticle} />
        <VideoBox article={foundArticle} />
        <EventsBox article={foundArticle} />
        <PhotoGallery article={foundArticle} />
        </>
    )}
    </>
);
}; //const splash window end


export default SplashWindow;


