import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import contactAvatar from '../../purpleIcons/Copy Writing.png';
import bgContact from '../../images/stars-bg.jpg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Fade , JackInTheBox, Bounce , Roll } from "react-awesome-reveal";
import Footer from '../Footer/index';

function Contact() {
    const SERVICE_ID = "service_0a0c3f7";
    const TEMPLATE_ID = "template_htesw4c";
    const USER_ID = "eFQQeKMwMk6NG4cRI";

    const [isBlank, setIsBlank] = useState(false)
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const [isEmailValidaded, setIsEmailValidaded] = useState(false);
    const [isNameValidaded, setIsNameValidaded] = useState(false);
    const [isMessageValidaded, setIsMessageValidaded] = useState(false);

    function handleChange(event) {
        if (event.target.name === 'email') {
           const isValid = validateEmail(event.target.value);
          
            if(!isValid || event.target.email === '') {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
                setIsEmailValidaded(true);
            }
        }
         else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } if(event.target.name != ''){
                setIsNameValidaded(true)
            } if(event.target.message != ''){
                setIsMessageValidaded(true)
            }
                else {
                setErrorMessage(''); 
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value });
        }
    }

    function validade (event){
        event.preventDefault();
       if(isEmailValidaded && isNameValidaded && isMessageValidaded){
         handleSubmit(event)
       } else{
        setErrorMessage('Please fill out the required information'); 
       }
    }

    function handleSubmit(event) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      } , 
        (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
            })
          });
    }

   
    return (
        <div className='contact-wrapper'  style={{
            backgroundImage: `url(${bgContact})`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center"
            }}>
            <Fade cascade>
            <section id="contact">
                {/* Box-1 */}
               
                <div className="contact-box-1" data-testid="h1tag" >
              
                    <div className='box-wrapper'>
                        <div>
                    <Fade delay={200}><h2 className="glowText section-title">Contact me</h2></Fade>
                    <form id="contact-form" onSubmit={validade}>
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
              
            </div>
           
            
                <div className='contact-box-2'>
                <img className='contact-img float' src={contactAvatar} alt="sasdaads" />
                </div>
           
           
            
        </section>
        </Fade>
      
       <Link  smooth spy to="home">
       <div className='circle-wrapper'>
                <div className='whiteCircle'>
                        <p className='arrowIcon arrowRight'>
                        </p>
                        <p className='arrowIcon arrowLeft'>
                        </p>
                        <div className='circle'></div>
                        <div className='circle-bottom'></div>
                    </div>
                </div>   
             </Link>
             <Footer></Footer>
        </div>
   
    );
};

export default Contact