import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME2 from "../../assets/ME1.png"
import HeaderSocials from './HeaderSocials';
const Header = () => {
    return (
        <header>
            <div id='home' className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Sahil Gupta</h1>
                <h5 className='text-light'>Full Stack Developer.</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME2} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header