import React from 'react'
import "./footer.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi';
const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>SAHIL</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>


            </ul>

            <div className="footer__socials">
                <a href="https://instagram.com/sahilgupta974/" target='blank'><AiOutlineInstagram /></a>

                <a href="mailto:sahilgupta86046@gmail.com" target='blank'><FiMail /></a>

                <a href="https://www.linkedin.com/in/sahil-gupta-4700a5220/" target='blank'><BsLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; SAHIL. All rights reserved. </small>
            </div>
        </footer>
    )
}

export default Footer