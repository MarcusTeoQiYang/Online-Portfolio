import ST from '../src/images/STEng.png'
import Esprit from '../src/images/Esprit.png'
import NTUC from '../src/images/NTUC.png'

const Experience = () => {
    return ( 
        <div className="exp">
            <div className="expcontainer">
            <h1><div className="highlight">Work experience</div></h1>
                <div className="exp1">
                <h2>ST Engineering</h2>
                <div className="exp-left">
                
                <div className="exp-content">
                <p>As an intern, my objective was to
                    Create and Design Python Script to extract data from Hive.<br/>
                    • Compare the Dashboard Data and extracted data<br/>
                    • Create and Maintain up-to-date Python Script<br/>
                    • Work closely with Developers to understand the functional requirements</p>
                </div>
                </div>
                <div className="exp-right">
                <img src={ ST } alt="STEng" />
                <h3>Job scope: REAMS</h3>
                <p>September 2022 - Present</p>
                </div>
                </div>
                <div className="exp2">
                <h2>Esprit</h2>
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
                <img src={ Esprit } alt="STEng" />
                <h3>Job scope: Retailer</h3>
                <p>September 2019 - March 2020</p>
                </div>
                </div>
                <div className="exp3">
                <h2>NTUC</h2>
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
                <img src={ NTUC } alt="STEng" />
                <h3>Job scope: Online grocery picker</h3>
                <p>August 2021 - September 2021</p>
                </div>
                </div>


            </div>
        </div>
     );
}
 
export default Experience;