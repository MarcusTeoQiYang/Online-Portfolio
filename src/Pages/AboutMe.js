import React from 'react';
import Me from '../images/PhotoMe.PNG'
import { FaPython,FaReact,FaJava,FaUnity, FaCss3, FaHtml5 } from 'react-icons/fa';
import { DiJavascript } from "react-icons/di";
import { SiFirebase,SiCsharp,SiSelenium,SiApachejmeter } from "react-icons/si"
import LVSS from '../images/LVSS.png'
import TP from '../images/TP.png'

const Aboutme = () => {
    
    return ( 
        <div className="me">
            <div className="biocontainer">
                <h1><div className="highlight">About Me</div></h1>
                <div className="me-top">
                        <div className="bioimage">
                            <img src={ Me } alt="me" />
                        </div>
                        <div className="bio-text">
                                <h2 className='bio2'>Making things work is my passion!&#128161;</h2>
                                <div className="bio-sect">
                                <p>Hello, I'm Marcus, a third-year Computer Engineering student at Temasek Polytechnic. I have always been fascinated in the world of technology, I am a firm believer in the concept of lifelong learning and constantly work on personal projects to enhance my skills and to solve day-to-day problem that I face. Check out the cool stuff that I have been doing/working on!</p>
                        </div>
                    </div>
                    </div>
                <div className="me-bottom">
                        <div className="skills">
                            <h2>My Skills</h2>
                        </div>
                        <div className="skillicons">
                            <div className="sect1">
                            <div className="skills-col">
                                <h2><u>Language</u></h2>
                                <ul>
                                    <FaPython size = '2rem'/>
                                    <SiCsharp size = '2rem'/>
                                    <DiJavascript size = '2rem'/>
                                    <FaJava size = '2rem'/>
                                    <FaCss3 size = '2rem'/>
                                    <FaHtml5 size ='2rem'/>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h2><u>Web Development</u></h2>
                                <ul>
                                    <FaReact size = '2rem'/>
                                    
                                    <SiFirebase size = '2rem'/>
                                </ul>
                            </div>
                            </div>
                            <div className="sect2">
                            <div className="skills-col">
                                <h2><u>VR Programming</u></h2>
                                <ul>
                                    <FaUnity size = '2rem'/>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h2><u>Automation Testing</u></h2>
                                <ul>
                                    <SiSelenium size = '2rem'/>
                                    <SiApachejmeter size = '2rem'/>
                                </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="me-edu">
                            <h2>Education</h2>
                            <div className="edu-body">
                            <div className="bio-sect2">
                                
                            <div className="schimg">
                                <img src={ TP } alt="sch" />
                                <h3>Temasek Polytechnic</h3>
                                <p>April 2020 - May 2023</p>
                            </div>
                                <p>During my first year at Temasek Polytechnic, I enrolled in the Common Engineering programme.
                                    As I progressed through my first year, I became interested in programming and decided 
                                    to pursue Computer Engineering as my area of focus for my second and third years of study.<br/><br/>
                                    My time in Computer Engineering diploma was well spent, during my studies I have learned various
                                     coding languages such as Python, Java and C#. I have also gain experience in 3D modelling and VR 
                                     Programming via Autodesk 3ds and Unity respectively. With my current skill set, I am confident that
                                      I can play a part in Singapore's drive towards greater digitalization.</p>
                        </div>
                        <div className="bio-sect2">
                                <div className="schimg">
                                    <img src={ LVSS } alt="sch" />
                                    <h3>Loyang View Secondary School</h3>
                                    <p>January 2016 - January 2020</p>
                                </div>
                                <p>I had an amazing experience during my time at Loyang View Secondary School.
                                     Loyang View has taught me that I pocess the power to be the best that I can be.
                                    <br/><br/>
                                    During my time in Loyang View Secondary School, I participated in the school's symphonic band as a percussionist. 
                                    Being a part of the band taught me the values of discipline and patience.</p>
                            </div>
                        </div>
                        </div>
            </div>
            
        </div>
     );
}
 
export default Aboutme;