import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from 'react-bootstrap';
import NewsLibrary from "./NewsLibrary.json";
import News from "./News";
import VideoBox from "../Aside/VideoBox";

const SplashWindow = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [showContent, setShowContent] = useState(false);

    const [foundArticle, setFoundArticle] = useState(null);

    useEffect(() =>{
        document.querySelector('.splash-window').classList.add('fade-in');
    }, []);

    console.log(NewsLibrary);

    const handleSearch = (event) => {
        event.preventDefault();

        if (!searchTerm) {
            setErrorMessage('Please Enter a search term');
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

        
    };
   

return (
    <>
    {!showContent && (
        <div className="splash-window fade-out">
            <div className="splash-content">
                <h1>Welcome To Future Sports!</h1>

                <Form onSubmit={handleSearch} className="search-form">
                    <div className="search-group">
                        <Form.Control type="text" placeholder="Enter your Search Query" className="search-input" value={searchTerm} onChange={(e) => 
                        setSearchTerm(e.target.value)
                        }/>
                        <Button variant="primary" type="submit" className="splashSearchButton">Search</Button>
                    </div>
                </Form>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div>
        </div>
    )}
    {showContent && foundArticle && <News article={foundArticle} />}
    </>
);
}; //const splash window end


export default SplashWindow;


