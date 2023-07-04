import React from 'react'
import "./services.css";
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What i can do</h5>
            <h2>Works</h2>

            <div className="container service__container">


                <article className="service">
                    <div className="service__head">
                        <h3>Websites Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Intuitive and user-friendly interface design.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Intuitive and user-friendly interface design.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Seamless navigation and effortless user experience.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Attention to detail and focus on interactive elements.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Incorporating modern design trends for engaging web experiences.</p>
                        </li>

                    </ul>
                </article>

                {/* END OF Websites Design  */}

                <article className="service">
                    <div className="service__head">
                        <h3>Frontend Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive and dynamic website development using HTML, CSS, and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Building interactive user interfaces with React.js.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Utilizing CSS frameworks like Bootstrap and Tailwind for efficient front-end development.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Customizing and optimizing website design for exceptional user experiences.</p>
                        </li>
                        {/* <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li> */}

                    </ul>
                </article>

                {/* END OF FRONTEND DEVELOPMENT  */}

                <article className="service">
                    <div className="service__head">
                        <h3>Backend Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Developing server-side applications using Node.js.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Creating APIs calls and handling data with Express.js.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Integrating MongoDB for database management.</p>
                        </li>
                        {/* <li>
                            <BiCheck className='service__list-icon' />
                            <p>Implementing basic authentication and authorization functionalities.</p>
                        </li> */}
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Building RESTful services for seamless communication between front-end and back-end.</p>
                        </li>

                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services