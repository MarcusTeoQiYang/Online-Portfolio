import Bulb from '../src/images/Bulb.png'
import Funny from '../src/images/Funny.JPG'
import WebDevPage from './WebDevPage'
import EthHackPage from './EthHackPage'
import InterestStart from './InterestStart'
import {Routes, Route, Link} from 'react-router-dom';

const Interest = () => {
    return ( 
        <div className="int">
            <h1><div className="highlight">Interest</div></h1>
            <p>A list of my current interests that<br/>I'm planning to learn right now. Check it out!</p>
            <div className="intcontainer">
            <div className="lightbulb">
                <img src={ Bulb } alt="STEng" />
                </div>
                <div className="funny">
                    <img src={ Funny } alt="STEng" />
                </div>
            <ul>
                <li><Link to='/hack'>Ethical Hacking</Link></li>
                <li><Link to="web">Web Development</Link></li>
            </ul>
            <Routes>
            <Route index element={<InterestStart/>} />
            <Route path='/hack' element={<EthHackPage/>} />
            <Route path='/web' element={<WebDevPage/>} />
        </Routes>
        </div>
        </div>
     );
}
 
export default Interest;