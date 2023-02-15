import {Link} from 'react-router-dom';
import {Squash as Hamburger} from 'hamburger-react';
import React, {useState} from 'react';

const Navbar = () => {  

    const [navHeight, setNavHeight] = useState('80px')
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
            setNavHeight('80px')
            setOpen(false)
    }
    return ( 
        <nav className="navbar" style={{height: navHeight}}>
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
                        toggled = {isOpen}
                        toggle = {setOpen}
                        onToggle={toggled => {
                            if (toggled) {
                                setNavHeight('250px');
                            }
                            else {
                                setNavHeight('80px');
                            }
                        }}
                        />
                    </div>
                </ul>
            </div>
            <div className="hamburger-menu">
                    <li onClick={handleClick}><Link to='/'>Home</Link></li>
                    <li onClick={handleClick}><Link to='/AboutMe'>About</Link></li>
                    <li onClick={handleClick}><Link to='/Projects'>Projects</Link></li>
                    <li onClick={handleClick}><Link to='/Experience'>Experience</Link></li>
            </div>
        </nav>
        );
    }
    
    export default Navbar;