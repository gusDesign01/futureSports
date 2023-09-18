import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from 'react-bootstrap';
import NewsLibrary from "./NewsLibrary"
import EventsLibrary from "./EventsLibrary"
import PhotoLibrary from "./PhotoLibrary"
import VideoLibrary from "./VideoLibrary"
import Main from "./Main"
import Aside from "../Aside/Aside";

// In this component when the user first lands on the page they will be presented with this Splash Window which will
// allow the user to input the event they are looking for and then if it matches it will display the relevant article underneath

const SplashWindow = () => {

    //const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState(''); //   When an input isnt recognised display the following error

    const [showContent, setShowContent] = useState(false); //Controls the visibility of the content

    const [foundNewsArticle, setFoundNewsArticle] = useState(null); //Stores the found articles based on the Search term

    const [foundEventsArticle, setFoundEventsArticle] = useState(null); //Stores the found articles based on the Search term

    const [foundPhotoArticle, setFoundPhotoArticle] = useState(null); //Stores the found articles based on the Search term

    const [foundVideoArticle, setFoundVideoArticle] = useState(null); //Stores the found articles based on the Search term

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() =>{ //Hook to add a fade-in animation class to the Splash Window
        const splashWindow =
        document.querySelector('.splash-window');
        if (splashWindow) {
            splashWindow.classList.add('fade-in')
        }
    }, []);

    //console.log(NewsLibrary);

    const handleSubmit = (event) => { //This function called when the search form is submitted and then checks if search term is empty or a matching article isnt found
        event.preventDefault();

        //Handle search using the term searchTerm
        console.log(searchTerm)

        if (!searchTerm) {
            setErrorMessage('Please Enter a search term');
            return;
        }

        const foundVideo = VideoLibrary.find((article) => //Search for Photo Article

        article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const foundPhoto = PhotoLibrary.find((article) => //Search for Photo Article

        article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const foundEvents = EventsLibrary.find((article) => //Search for Events Article

        article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const foundNews = NewsLibrary.find((article) => //Search for News Article

        article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );


        if (foundNews || foundPhoto || foundEvents || foundVideo) { //If any matching articles are found, update the state variables
            setErrorMessage('');
            setShowContent(true);
            setFoundNewsArticle(foundNews || null);
            setFoundEventsArticle(foundEvents || null);
            setFoundPhotoArticle(foundPhoto || null);
            setFoundVideoArticle(foundVideo || null);
        } else {
            //If no matching articles are found set an error message and clear the state variable                            
            setErrorMessage('No Matching Article Found');
            setShowContent(false);
            setFoundNewsArticle(null);
            setFoundEventsArticle(null);
            setFoundPhotoArticle(null);
            setFoundVideoArticle(null);
        }
    };

    
   

return (
    <>
    {!showContent && (
        <div className="splash-window-container">
        <div className="splash-window fade-out">
            <div className="splash-content">
                <h1>Welcome To Future Sports!</h1>

                <p>
                    To begin in the search box below search any sporting event you would to learn more about.
                    Or if your not sure what you want you can always type in /Random to be surprised!
                </p>

                {/* Form for the user to input the keyword they want to search */}

                <Form onSubmit={handleSubmit} className="search-form"> 
                    <div className="search-group">
                        <Form.Control type="text" placeholder="Enter your Search Query" className="search-input" name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <Button variant="primary" type="submit" className="splashSearchButton">Search</Button>
                    </div>
                </Form>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div>
        </div>
        </div>
    )}
    { (<Main
        
        foundNewsArticle={foundNewsArticle}
        foundVideoArticle={foundVideoArticle}
        foundEventsArticle={foundEventsArticle}
        foundPhotoArticle={foundPhotoArticle}
        
        />)}
    <Aside
        foundVideoArticle={foundVideoArticle}
        />
    </>
);
}; //const splash window end


export default SplashWindow;


