import {Link} from 'react-router-dom';
import {Squash as Hamburger} from 'hamburger-react';
import React, {useState} from 'react';

const Navbar = () => {  

    const [burgerStatus, setBurgerStatus] = useState(false)

    return ( 
        <nav className="navbar">
            <h3 className="name">
                Marcus Teo
            </h3>
            <div className="links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/AboutMe'>About</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Experience'>Experience</Link></li>
                    {/* <li><Link to='/Interest'>Ideas!!</Link></li> */}

                    {/* <li><a href="#contactme">Contact me</a></li> */}
                    <div className="hamburger">
                        <Hamburger 
                        distance='lg'
                        size = {40}
                        rounded 
                        color="#FFFDD0"
                        onToggle={toggle => {
                            if (toggle) {
                                document.getElementsByClassName("hamburger-menu")[0].style.display = "flex";
                            } else {
                                document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
                            }
                        }}
                        />
                    </div>
                </ul>
                <div className="hamburger-menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/AboutMe'>About</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Experience'>Experience</Link></li>
                </div>
            </div>
        </nav>
        );
    }
    
    export default Navbar;