import React, { useRef } from 'react'
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
// import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from "emailjs-com";
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5hmed4c', 'template_3k1rhyr', form.current, 'rBroKvTKrseSKqbiQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">

                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>EMAIL</h4>
                        <h5>sahilgupta86046@gmail.com</h5>
                        <a href="mailto:sahilgupta86046@gmail.com">Send a message</a>
                    </article>
                    {/* <article className="contact__option">
                        <AiOutlineLinkedin className='contact__option-icon' />
                        <h4>LINKEDIN</h4>
                        <h5>sahilgupta86046@gmail.com</h5>
                        <a href="#">Send a message</a>
                    </article> */}
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WHATSAPP</h4>
                        <h5>8840318037</h5>
                        <a href="https://wa.me/918840318037?">Send a message</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTIONS  */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full name' required />
                    <input type="email" name='email' placeholder='Your email' required />

                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

                    <button type='submit' className='btn btn-primary'  >Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact