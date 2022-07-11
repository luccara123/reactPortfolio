import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value });
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <section id="contact">
            <h1 data-testid="h1tag" className="section-title">CONTACT ME</h1>
            <div className="line"></div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flex">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="flex">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="flex">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div >
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit"  data-testid="submit-btn" className="flex">Submit</button>
            </form>
        </section>
    );
};

export default Contact