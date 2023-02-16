import {FaGithub, FaEnvelope, FaLinkedin, FaInstagram} from "react-icons/fa";

const Title = () => {
    return (
        <div className="title">
            <h1>Hi I'm <u>Marcus</u> | <lol>Computer<br/>Engineer</lol></h1>
            <div className="social-icon">
                <ul>
                <a href="https://github.com/MarcusTeoQiYang" target="blank">
                    <FaGithub/>
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
            <h3>I'm adventurous and a challenge seeker&#127939;. <br />I'm a life long learner&#127891; and a cat lover&#128571;.</h3>
            
        </div> 
        
     );
}
 
export default Title;