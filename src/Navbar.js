import {Link} from 'react-router-dom';
import {Squash as Hamburger} from 'hamburger-react';
import React, {useState} from 'react';

const Navbar = ({selected}) => {  

    const [navHeight, setNavHeight] = useState('60px')
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
            setNavHeight('60px')
            setOpen(false)
    }
    
    return ( 
        <nav className="navbar" style={{height: navHeight}}>
            <div className="wrap">
            <h3 className="name">
                Marcus Teo
            </h3>
            <div className="links">
                <ul>
                    <li><Link to='/' className={'navButtons ${selected === "home" ? "active" : "inactive"}'}>Home</Link></li>
                    <li><Link to='/AboutMe' className={'navButtons ${selected === "about" ? "active" : "inactive"}'}>About me</Link></li>
                    <li><Link to='/Projects' className={'navButtons ${selected === "projects" ? "active" : "inactive"}'}>Projects</Link></li>
                    <li><Link to='/Experience' className={'navButtons ${selected === "experience" ? "active" : "inactive"}'}>Experience</Link></li>
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
                                setNavHeight('235px');
                            }
                            else {
                                setNavHeight('60px');
                            }
                        }}
                        />
                    </div>
                </ul>
            </div>
            </div>
            <div className="hamburger-menu">
                    <li onClick={handleClick}><Link to='/'>Home</Link></li>
                    <li onClick={handleClick}><Link to='/AboutMe'>About me</Link></li>
                    <li onClick={handleClick}><Link to='/Projects'>Projects</Link></li>
                    <li onClick={handleClick}><Link to='/Experience'>Experience</Link></li>
            </div>
        </nav>
        );
    }
    
    export default Navbar;