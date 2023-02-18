import React from 'react';
import {FaGithub, FaEnvelope, FaLinkedin, FaInstagram} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../components/config/ParticleConfig";
import ParticleConfig from '../components/config/ParticleConfig';
import Typed from 'react-typed'

const Title = () => {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };

    return (
        <div className="title">
            <div className="particles">
            <Particles params={particleConfig} init={particlesInit} style ={{width:"100vh", height:"100vh"}}/>
            </div>
            <div className="title-heading">
            <Typed
                strings={[
                    "Hi I'm <u>Marcus</u> | <lol>Computer<br/>Engineer</lol>",
                    "I am a tech driven person!",
                    "I am a life long learner!",
                    "I am a problem solver!"
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop/>
            {/* <h1>Hi I'm <u>Marcus</u> | <lol>Computer<br/>Engineer</lol></h1> */}
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
        </div>
     );
}
 
export default Title;