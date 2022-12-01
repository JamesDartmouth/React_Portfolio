import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };


    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or username is invalid');
            return;
        }
        if (!message) {
            setErrorMessage(
                `Please enter a message`
            );
            return;
        }
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
    };


    // First we check to see if "edit" prop exists. If not, we render the normal form
    // If the prop "edit" exists, we know to render the update form instead
    return (

        <div>
            <h2>Contact Me</h2>
            <form className="form">
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )


}

export default ContactForm;


