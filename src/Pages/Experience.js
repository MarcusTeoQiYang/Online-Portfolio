import React from 'react';
import ST from '../images/STEng.png'
import Esprit from '../images/Esprit.png'
import NTUC from '../images/NTUC.png'
import OCL from '../images/ocl.png'


const Experience = () => {

    return ( 
        <div className="exp">
            <div className="expcontainer">
            <h1><div className="highlight">Work experience</div></h1>
            <div className="expspace">

            <div className="expbox">
                <div className="exp-head">
                <u><h2>OurCodeLab</h2></u>
                <img src={ OCL } alt="OCL" />
                </div>
                <div className="exp-left">
                <div className="exp-content">
                <p>I joined OurCodeLab, a dynamic startup driven by a passionate team focused on providing software as a service. This opportunity provided valuable insights into the industry, client relationships, and strengthened my technical skills in web development. Working alongside like-minded individuals also gave me a deeper understanding of the collaborative dynamics within the tech industry, enhancing my ability to problem-solve in a team-oriented environment. This experience has been instrumental in shaping my professional growth and approach to building impactful solutions.</p>
                    
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: Software Developer</h3>
                <p>September 2022 - Present</p>
                </div>
                </div>

                <div className="expbox">
                    <div className="exp-head">
                        <u><h2>ST Engineering</h2></u>
                        <img src={ ST } alt="STEng" />
                    </div>
                <div className="exp-left">
                
                <div className="exp-content">
                <p>During my internship at ST Engineering, I was tasked with testing the performance of the Rail Enterprise Asset Management System (REAMS). This web-based project was developed for the Land Transport Authority (LTA), and it was important to ensure that it functioned optimally. I was able to gain valuable experience in this role, and I found it to be an engaging challenge. In fact, I was so keen to broaden my exposure to different aspects of the project that I decided to extend my internship.<br/><br/>
                • I used JMeter to simulate user behavior and navigate through the various dashboards in REAMS to test their load time.<br/><br/>
                • Assisted in the development of the division's first Selenium web automation framework, which will
                 be used not only on REAMS but also on future projects that the division will work on. </p>
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: Automation Tester</h3>
                <p>September 2022 - March 2023</p>
                </div>
                </div>
                
                <div className="expbox">
                    <div className="exp-head">
                    <u><h2>NTUC</h2></u>
                    <img src={ NTUC } alt="ntuc" />
                    </div>
                <div className="exp-left">
                <div className="exp-content">
                <p>Thanks to my one-month part-time job, I have gained valuable learning experiences. One of these is being more patient, as I had to search for various products within the store and prepare them for delivery. Additionally, I have developed my organizational and efficiency skills, as I was expected to pack the products quickly to optimize productivity.</p>
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: Online grocery picker</h3>
                <p>August 2021 - September 2021</p>
                </div>
                </div>

                <div className="expbox">
                <div className="exp-head">
                <u><h2>Esprit</h2></u>
                <img src={ Esprit } alt="esprit" />
                </div>
                <div className="exp-left">
                <div className="exp-content">
                <p>Having worked in various retail settings, I have held multiple positions, including cashier, storeroom assistant, and online order packer, among others. Through my experiences, I have strengthened my communication skills by engaging with customers, as well as honed my ability to multitask by serving several customers simultaneously.</p>
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: Retailer</h3>
                <p>September 2019 - March 2020</p>
                </div>
                </div>

                </div>
            </div>
        </div>
     );
}
// My time as an intern in ST Engineering was eye-opening and enjoyable, 
// my division was working on a project called Rail Enterprise Asset Management System (REAMS)
// which is a web base project that is equipped with data analytics capabilities to detect potential 
// faults in the systems beforehand and initiate pre-emptive renovations or replacements overall improving
//  railway service reliability as well as optimizing  overall life cycle cost in the Downtown Line.
export default Experience;