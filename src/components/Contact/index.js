import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import contactAvatar from '../../purpleIcons/Copy Writing.png';
import bgContact from '../../images/stars-bg.jpg'

function Contact() {

    const starIcon = <FontAwesomeIcon icon={faStar}/>
    const SERVICE_ID = "service_exa8glv";
    const TEMPLATE_ID = "template_htesw4c";
    const USER_ID = "eFQQeKMwMk6NG4cRI";

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
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    event.target.reset()
    }
    return (
        <div className='contact-wrapper'  style={{
            backgroundImage: `url(${bgContact})`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center"
            }}>
            <section id="contact">
                {/* Box-1 */}
                <div className="contact-box-1" data-testid="h1tag" >
                    <div className='box-wrapper'>
                    <h2 className="glowText section-title">Contact me</h2>
                    <form id="contact-form" onSubmit={handleSubmit} >
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
                   
                    <button type='submit' class="btn-home">
                        Submit
                        <span className='btn-home-span'></span>
                     </button>
                </form>
                </div>
            </div>

            <div className='contact-box-2'>
            <img className='contact-img float' src={contactAvatar} alt="sasdaads" />
            </div>
            
        </section>
        </div>
       
    );
};

export default Contact