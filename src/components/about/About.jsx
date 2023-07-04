import React from 'react'
import "./about.css";
import ME from '../../assets/ME_2.jpg'

import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BsPatchCheckFill } from 'react-icons/bs'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img style={{ borderRadius: '2rem' }} src={ME} alt="about" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards" >
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Web intern</small>
                        </article>

                        <article className='about__card'>
                            <BsPatchCheckFill className='about__icon' />
                            <h5>Certificates</h5>
                            <small>Full stack </small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>5+</small>
                        </article>
                    </div>

                    <p>
                        I'm Sahil Gupta, a passionate B.Tech Computer Science student with expertise in web development and Data Structures and Algorithms.I am well-versed in HTML, CSS, and JavaScript, and have experience working with popular frameworks like React.js. I am also proficient in using CSS frameworks like Bootstrap and Tailwind CSS, which enable me to create responsive and visually stunning websites with ease.
                        <p className='changedPara'>I have a basic understanding of backend development using Node.js and Express, and I'm currently expanding my skills in this area, particularly focusing on Node.js, Express, and MongoDB.</p>

                    </p>

                    <a href="#contact" className='btn btn-primary'>Lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About