import React from "react";
import { Button, Form } from 'react-bootstrap';

const SplashWindow = () => {

    return (
        <div className="splash-window">
            <div className="splash-content">
                <h1>Welcome To Future Sports!</h1>
                <p>fmkamlkfmkamfklfm</p>
                <Form>
                    <Form.Group controlId="searchForm" className="searchInputGroup">
                        <Form.Control type="text" placeholder="Enter your search" className="searchInputCnt"/>
                        <Button variant="primary" type="submit" className="splashSearchButton">Search</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
        );
    };

export default SplashWindow;