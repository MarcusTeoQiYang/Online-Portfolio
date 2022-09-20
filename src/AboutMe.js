import Me from '../src/images/PhotoMe.jpg'
import { FaPython,FaReact,FaNodeJs,FaJava,FaUnity,FaCss2, FaCss3, FaHtml5 } from 'react-icons/fa';
import { DiJavascript } from "react-icons/di";
import { SiFirebase,SiCsharp } from "react-icons/si"
const Aboutme = () => {
    return ( 
        <div className="me">
            <div className="biocontainer">
                <h1><div className="highlight">About Me</div></h1>
                        <div className="skills">
                            <h2>My Skills</h2>
                        </div>
                        <div className="skillicons">
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
                            <div className="skills-col">
                                <h2><u>VR Programming</u></h2>
                                <ul>
                                    <FaUnity size = '2rem'/>
                                </ul>
                            </div>
                        </div>
                        <div className="bioimage">
                            <img src={ Me } alt="me" />
                        </div>
                        <div className="bio-text">
                            <div>
                                <h2 className='bio2'>Making things work is my passion!&#128161;</h2>
                                <p>I'm a Computer Engineering student at Temasek Polytechnic who has 
                                    always had an interest with computers. I learned a variety of coding 
                                    languages during my education. In addition, I've got VR development experience.
                                     As a result, I've developed an interest in programming. An experienced developer,
                                      in my opinion, can manage a wide range of tasks. I believe in lifelong learning 
                                      and am now working on honing and enhancing my coding skills by regularly coding 
                                      to maintain consistency.</p>
                        </div>
                    </div>
            </div>
            
        </div>
     );
}
 
export default Aboutme;