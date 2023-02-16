import { FaGithub } from "react-icons/fa";
import Port from '../images/PortJPEG.JPG'
import Soon from '../images/ComingSoon.jpg'
import VR from '../images/VrJPEG.JPG'
import MP from '../images/MP.JPG'
import YumWhat from '../images/YumWhat.JPG'
import React, {useEffect} from 'react';

const Projects = () => {
    
    return ( 
        <div className="proj">
            <h1><div className="highlight">Projects</div></h1>
            <div className="projcontainer">
                <h2>Personal projects</h2>
                <div className="myproj">
                <div className="box">
                <div className="projimage">
                    <img src={ Port } alt="Portfolio" />
                    </div>
                        <h3>Personal website</h3>
                        <p>I have created my first online portfolio website using ReactJS and HTML, 
                            and styled it with CSS.
                            I have also optimized the design for mobile devices to ensure the website is easily
                             accessible on any device.</p>
                        <div className="linkbox">
                        <a href="https://github.com/MarcusTeoQiYang/Online-Portfolio" target= "blank"><button>GitHub<FaGithub/></button></a>
                        </div>
                </div>


                <div className="box">
                <div className="projimage">
                    <img src={ YumWhat } id="Portfolio" />
                    </div>
                        <h3>YumWhat?!</h3>
                        <p>When it comes to deciding what to eat, I'm always indecisive. Hence I created YumWhat?!, 
                        YumWhat?! is a ReactJS and Google Maps API-based app that helps indecisive people find nearby
                         food options and offers a random picker.
                        </p>
                        <div className="linkbox">
                        <a href="https://github.com/MarcusTeoQiYang/YumWhat" target="blank"><button>GitHub<FaGithub/></button></a>
                        <a  href="https://yumwhat.web.app/" target="blank"><button>Check it out!</button></a>
                        </div>
                </div>

                <div className="box">
                <div className="projimage">
                    <div className="blur">
                    <img src={ Soon } alt="Portfolio" />
                    </div>
                    </div>
                        <h3>Coming soon</h3>
                        <p>Stay tuned!</p>
                        <div className="blur">
                        <p>More projects are to be made in the future by me, stay tuned!.</p>
                        <div className="linkbox">
                        <a  href="#"><button>GitHub<FaGithub/></button></a>
                        </div>
                        </div>
                </div>

                </div>
                <h2>School projects</h2>
            <div className="schproj">
                <div className="box">
                <div className="projimage">
                    <img src={ MP } alt="soon" />
                    </div>
                    <h3>EmBEDded IOT</h3>
                    <p>For my year 3 project at Temasek Polytechnic,
                         my group and I created a smart bed prototype
                          called EmBEDded for Apex Harmony Lodge.
                           EmBEDded uses sensors and a Raspberry Pi 
                           to monitor the movements of elderly residents at night.</p>
                    <div className="linkbox">
                        <a href="https://docs.google.com/document/d/1YKmXxZbrGsMoAgdf_3qFliQxU8c234kM/edit?usp=sharing&ouid=108693576352860861961&rtpof=true&sd=true" target="blank"><button>Report</button></a>
                        <a href="https://docs.google.com/presentation/d/1PYPQgOXhpAPwTGWbhekpWYJl5yQP9Y0j/edit?usp=sharing&ouid=108693576352860861961&rtpof=true&sd=true" target="blank"><button>Slides</button></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1BJunv7CULnovZCiyxmBXhUjMFJPXDY6A/view?usp=share_link" target="blank"><button>Awarded Certificate</button></a>
                </div>
                <div className="box">
                <div className="projimage">
                    <img src={ VR } alt="soon" />
                    </div>
                    <h3>Short Circuit VR</h3>
                    <p>
                    In my year 3 VR final project, my group and I created 'Short Circuit',
                     a VR simulation of an engineering lab. Using 3ds Max for modelling and C# 
                     in Unity for coding, we developed an experience that teaches participants 
                     about lab safety and circuit patching.
                    </p>
                    <div className="linkbox">
                        <a href="https://github.com/MarcusTeoQiYang/Short-Circuit-VR" target="blank"><button>GitHub<FaGithub/></button></a>
                        <a href="https://drive.google.com/file/d/10KOuSh0tcBcKh4AwJ4A0VY_5o3ZPf0Ub/view?usp=sharing" target="blank"><button>Demo</button></a>
                    </div>
                </div>
            </div>
                {/* <h2>OurCodeLab projects</h2>
                <div className="oclproj">
                <div className="box">
                <div className="projimage">
                    <img src={ MP } alt="soon" />
                    </div>
                    <h3>SIT Archives</h3>
                    <p>Test test test test test</p>
                    <div className="linkbox">

                    </div>
                </div>
                </div> */}
            </div> 
        </div>
     );
}
 
export default Projects;