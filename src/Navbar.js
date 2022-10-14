import {Routes, Route, Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h3 className="name">Marcus Teo</h3>
            <div className="links">
                <ul>
                    <li><Link to='/AboutMe'>About me</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Experience'>Experience</Link></li>
                    <li><Link to='/Interest'>Interest</Link></li>

                    {/* <li><a href="#contactme">Contact me</a></li> */}
                </ul>
            </div>
        </nav>
        );
    }
    
    export default Navbar;