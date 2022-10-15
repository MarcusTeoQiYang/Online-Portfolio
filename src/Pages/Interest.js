import Bulb from '../images/Bulb.png'
import Funny from '../images/Funny.JPG'
// import {Routes, Route, Link} from 'react-router-dom';

const Interest = () => {
    return ( 
        <div className="int">
            <h1><div className="highlight">Ideas/Interest</div></h1>
            <p>A list of my current ideas that<br/>I'm planning to make either right now or in the future. Check it out!</p>
            <div className="intcontainer">
            <div className="lightbulb">
                <img src={ Bulb } alt="STEng" />
                </div>
                <div className="funny">
                    <img src={ Funny } alt="STEng" />
                </div>
            <div className="buttonContainer">
                <button className='homeButton'>YumWhat?/!</button>
                <button className='homeButton'>TypeShooter</button>
            </div>
                
            

        </div>
        </div>
     );
}
 
export default Interest;