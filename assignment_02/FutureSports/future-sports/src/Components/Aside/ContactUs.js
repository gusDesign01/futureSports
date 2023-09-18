import React, { useState } from "react";

//In this component a contact form is used for when a user wants to contact Future sports

const ContactUs = () => {

    //Define the initial form data using a useState hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle the form field changes
    const handleChange = e => {
        setFormData([ ...formData, [e.target.name], e.target.value ]);
    };

    //Handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        //Reset the form to initial state after the form is submitted
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>

            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />

            <label htmlFor="email">Email:</label>

            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />

            <label htmlFor="message">message:</label>

            <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>

            <button type="submit">Submit</button>
        </form>
        </div>

    );
};

export default ContactUs;
