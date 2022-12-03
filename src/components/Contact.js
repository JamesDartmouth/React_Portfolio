import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormText } from 'react-bootstrap';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';


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
        <section className="container">
            <h1 className="top-title">Contact Me</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        value={name}
                        name="name"
                        onChange={handleInputChange} placeholder="name" as="textarea" rows={1} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        value={email}
                        name="email"
                        onChange={handleInputChange} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Text area</Form.Label>
                    <Form.Control 
                        alue={message}
                        name="message"
                        onChange={handleInputChange} placeholder="message" as="textarea" rows={3} />
                </Form.Group>
                <Button onClick={handleFormSubmit} type="submit">
                    Submit
                </Button>
            </Form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )


}

export default ContactForm;



// return (
//     <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//             Submit
//         </Button>
//     </Form>
// );
