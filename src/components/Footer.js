import {FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa";
import {Link} from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Marcus Teo</h4>
                    <h5>2022,Build and designed by Marcus Teo<br/>
                    using ReactJS, CSS and HTML<br/>
                    <FaReact size="1.5rem"/>
                    <FaCss3 size="1.5rem"/><FaHtml5 size="1.5rem"/></h5>
                </div>
                <div className="footer-col">
                    <h4>Site Map</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/AboutMe'>About</Link></li>
                        <li><Link to='/Projects'>Projects</Link></li>
                        <li><Link to='/Experience'>Experience</Link></li>
                        {/* <li><Link to='/Interest'>Ideas!!</Link></li> */}      
                        {/* <li><a href="#contactme">Contact me</a></li> */}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Me</h4>
                        <div className="social-links">
                            <ul>
                                <a href="https://github.com/MarcusTeoQiYang" target="blank">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/marcus-teo-8b6484240/" target = "blank">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/potarteos/" target = "blank">
                                    <FaInstagram />
                                </a>
                                <a href="mailto:marcus.teo.sg@gmail.com" target = "blank">
                                    <FaEnvelope />
                                </a>
                            </ul>
                        </div>
                </div>
            </div>  
        </div>
    );
}
 
export default Footer;