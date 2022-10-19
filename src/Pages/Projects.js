import { FaGithub } from "react-icons/fa";
import Port from '../images/PortJPEG.JPG'
import Soon from '../images/ComingSoon.jpg'
import VR from '../images/VrJPEG.JPG'
import MP from '../images/MP.JPG'

const Projects = () => {
    return ( 
        <div className="proj">
            <h1><div className="highlight">My projects</div></h1>
            <div className="projcontainer">
                <h2>Personal Projects</h2>
                <div className="myproj">
                <div className="box1">
                <div className="projimage">
                    <img src={ Port } alt="Portfolio" />
                    </div>
                        <h3>Personal website</h3>
                        <p>This is my first online portfolio website
                        which I have build using React and HTML,
                        I have also styled it using CSS.</p>
                        <div className="linkbox1">
                        <a href="https://github.com/MarcusTeoQiYang/Online-Portfolio" target= "blank"><button>GitHub<FaGithub/></button></a>
                        </div>
                </div>


                <div className="box1">
                <div className="projimage">
                    <div className="blur">
                    <img src={ Soon } alt="Portfolio" />
                    </div>
                    </div>
                        <h3>Coming soon</h3>
                        <p>Stay tuned!</p>
                        <div className="blur">
                        <p>More projects are to be made in the future by me, stay tuned!.</p>
                        <div className="linkbox4">
                        <a><button>GitHub<FaGithub/></button></a>
                        </div>
                        </div>
                </div>
                
                <div className="box1">
                <div className="projimage">
                    <div className="blur">
                    <img src={ Soon } alt="Portfolio" />
                    </div>
                    </div>
                        <h3>Coming soon</h3>
                        <p>Stay tuned!</p>
                        <div className="blur">
                        <p>More projects are to be made in the future by me, stay tuned!.</p>
                        <div className="linkbox4">
                        <a><button>GitHub<FaGithub/></button></a>
                        </div>
                        </div>
                </div>

                <div className="box1">
                <div className="projimage">
                    <div className="blur">
                    <img src={ Soon } alt="Portfolio" />
                    </div>
                    </div>
                        <h3>Coming soon</h3>
                        <p>Stay tuned!</p>
                        <div className="blur">
                        <p>More projects are to be made in the future by me, stay tuned!.</p>
                        <div className="linkbox4">
                        <a><button>GitHub<FaGithub/></button></a>
                        </div>
                        </div>
                </div>

                <div className="box1">
                <div className="projimage">
                    <div className="blur">
                    <img src={ Soon } alt="Portfolio" />
                    </div>
                    </div>
                        <h3>Coming soon</h3>
                        <p>Stay tuned!</p>
                        <div className="blur">
                        <p>More projects are to be made in the future by me, stay tuned!.</p>
                        <div className="linkbox4">
                        <a><button>GitHub<FaGithub/></button></a>
                        </div>
                        </div>
                </div>

                <div className="box1">
                <div className="projimage">
                    <div className="blur">
                    <img src={ Soon } alt="Portfolio" />
                    </div>
                    </div>
                        <h3>Coming soon</h3>
                        <p>Stay tuned!</p>
                        <div className="blur">
                        <p>More projects are to be made in the future by me, stay tuned!.</p>
                        <div className="linkbox4">
                        <a><button>GitHub<FaGithub/></button></a>
                        </div>
                        </div>
                </div>

                </div>
                <h2>School projects</h2>
            <div className="schproj">
                <div className="box2">
                <div className="projimage">
                    <img src={ MP } alt="soon" />
                    </div>
                    <h3>EmBEDded IOT</h3>
                    <p>For our Year 3 major project, my group collaborated 
                        with Apex Harmony Lodge to tackle a problem statement 
                        by constructing a prototype out of Raspberry Pi and 
                        sensors that improves nurses' deployment to elders 
                        at night.</p>
                    <div className="linkbox2">
                        <a href="https://docs.google.com/document/d/1YKmXxZbrGsMoAgdf_3qFliQxU8c234kM/edit?usp=sharing&ouid=108693576352860861961&rtpof=true&sd=true" target="blank"><button>Report</button></a>
                        <a href="https://docs.google.com/presentation/d/1PYPQgOXhpAPwTGWbhekpWYJl5yQP9Y0j/edit?usp=sharing&ouid=108693576352860861961&rtpof=true&sd=true" target="blank"><button>Slides</button></a>
                    </div>
                </div>
                <div className="box2">
                <div className="projimage">
                    <img src={ VR } alt="soon" />
                    </div>
                    <h3>VR Final project</h3>
                    <p>
                    This project was created in 3ds Max and coded in C# in Unity. 
                    This VR experience simulates an engineering lab, where participants may learn about 
                    lab safety and circuit patching.
                    </p>
                    <div className="linkbox3">
                        <a href="https://github.com/MarcusTeoQiYang/Short-Circuit-VR" target="blank"><button>GitHub<FaGithub/></button></a>
                        <a href="https://drive.google.com/file/d/10KOuSh0tcBcKh4AwJ4A0VY_5o3ZPf0Ub/view?usp=sharing" target="blank"><button>Demo</button></a>
                    </div>
                </div>
            </div>
            </div> 
        </div>
     );
}
 
export default Projects;