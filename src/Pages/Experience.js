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
                <p>OurCodeLab is a start up company founded by my friend. 
                    OurCodeLab curates holistic, user-friendly digital 
                    experiences and also builds
                     software for their clients; I joined his company 
                     to learn from more experienced people while also 
                     working alongside them. Working here will also provide
                      me the opportunity to learn what it's like to interact 
                      with clients and how coding is applied workplace. Its like
                      a side hustle!</p>
                      <div className="expbuttonbox">
                        <button className='expbutton'>What I did</button>
                      </div>
                    
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
                <p>As an intern, my objective was to
                    Create and Design Python Script to extract data from Hive.<br/>
                    • Compare the Dashboard Data and extracted data<br/>
                    • Create and Maintain up-to-date Python Script<br/>
                    • Work closely with Developers to understand the functional requirements</p>
                    <div className="expbuttonbox">
                        <button className='expbutton'>What I did</button>
                    </div>
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: REAMS</h3>
                <p>September 2022 - Present</p>
                </div>
                </div>

                <div className="expbox">
                <div className="exp-head">
                <u><h2>Esprit</h2></u>
                <img src={ Esprit } alt="esprit" />
                </div>
                <div className="exp-left">
                <div className="exp-content">
                <p>I worked as a cashier, storeroom assistant, 
                    and online order packer, among other things.
                    I've worked in a variety of retail settings. I've improved my 
                    communication skills through interacting with customers, 
                    as well as my multi-tasking abilities 
                    by dealing with several customers at the same time.</p>
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: Retailer</h3>
                <p>September 2019 - March 2020</p>
                </div>
                </div>

                <div className="expbox">
                    <div className="exp-head">
                    <u><h2>NTUC</h2></u>
                    <img src={ NTUC } alt="ntuc" />
                    </div>
                <div className="exp-left">
                <div className="exp-content">
                <p>I've learned a lot from this one month 
                    part-time job. I've learned to be more 
                    patient because I was required to find
                     different products around the store and
                      then pack them for delivery. I've also
                       learned to be more organized and efficient
                        because I was expected to pack the products 
                        quickly to maximize efficiency.</p>
                </div>
                </div>
                <div className="exp-right">
                <h3>Job scope: Online grocery picker</h3>
                <p>August 2021 - September 2021</p>
                </div>
                </div>

                </div>
            </div>
        </div>
     );
}
 
export default Experience;