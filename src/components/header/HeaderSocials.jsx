import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/sahil-gupta-4700a5220/" target='_blank'>{<BsLinkedin />}</a>
            <a href="https://github.com/sahil974" target='_blank'> {<BsGithub />} </a>
            <a href="https://www.instagram.com/sahilgupta974/" target='_blank'>{<BsInstagram />}</a>
        </div>
    )
}

export default HeaderSocials