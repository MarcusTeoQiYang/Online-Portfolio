import {FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa";
const Footer = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Marcus Teo</h4>
                    <h5>2022,Build and designed by Marcus Teo<br/>
                    using React, CSS and HTML<br/>
                    <FaReact size="1.5rem"/>
                    <FaCss3 size="1.5rem"/><FaHtml5 size="1.5rem"/></h5>
                </div>
                <div className="footer-col">
                    <h4>Site Map</h4>
                    <ul>
                        <li><a href="#aboutme">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#interest">Interest</a></li>
                        
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