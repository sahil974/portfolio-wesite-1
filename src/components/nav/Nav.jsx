import React, { useState } from 'react'
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { PiBriefcaseDuotone } from 'react-icons/pi'
import { RiServiceLine } from 'react-icons/ri'
const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'active' : ''} href="#home"><AiOutlineHome /></a>
            <a onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
                href="#about"><AiOutlineUser /></a>
            <a onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''} href="#experience"><BiBook /></a>

            <a onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''} href="#services"><RiServiceLine /></a>

            <a onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''} href="#portfolio"><PiBriefcaseDuotone /></a>

            <a onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''} href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav