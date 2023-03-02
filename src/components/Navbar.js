import {Link, useLocation} from 'react-router-dom';
import {Squash as Hamburger} from 'hamburger-react';
import {useState, useEffect} from 'react';
import React from 'react';

const Navbar = () => {  

    const [navHeight, setNavHeight] = useState('60px')
    const [isOpen, setOpen] = useState(false)
    const [path, setPath] = useState('home')

    const handleClick = () => {
            setNavHeight('60px')
            setOpen(false)
    }

    const GetLocation = () => {
        const location = useLocation();
    
        useEffect(() => {
            if (location.pathname === "/") {
                    setPath('home')
            } else if (location.pathname === "/AboutMe") {
                    setPath('about')
            }
            else if (location.pathname ==="/Projects") {
                    setPath('projects')
            }
            else if (location.pathname === "/Experience") {
                    setPath('experience')
            }
        },[location]);
    
    
    }

    GetLocation()
    
    return ( 
        <nav className="navbar" style={{height: navHeight}}>
            <div className="wrap">
            <h3 className="name">
                Marcus Teo
            </h3>
            <div className="links">
                    <Link to='/' className ='nav-link' style={{color: path === "home" ? "#00ADB5" : "#EEEEEE"}}>Home</Link>
                    <Link to='/AboutMe' className = 'nav-link' style={{color: path === "about" ? "#00ADB5" : "#EEEEEE"}}>About me</Link>
                    <Link to='/Projects' className = 'nav-link' style={{color: path === "projects" ? "#00ADB5" : "#EEEEEE"}}>Projects</Link>
                    <Link to='/Experience' className = 'nav-link' style={{color: path === "experience" ? "#00ADB5" : "#EEEEEE"}}>Experience</Link>
                    {/* <li><Link to='/Interest'>Ideas!!</Link></li> */}

                    {/* <li><a href="#contactme">Contact me</a></li> */}
                    <div className="hamburger">
                        <Hamburger 
                        distance='md'
                        size = {33}
                        rounded y
                        color="#EEEEEE"
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
            </div>
            </div>
            <div className="hamburger-menu">
                    <Link to='/' className = 'burger-link' onClick={handleClick} style={{color: path === "home" ? "#00ADB5" : "#EEEEEE"}}>Home</Link>
                    <Link to='/AboutMe' className = 'burger-link' onClick={handleClick} style={{color: path === "about" ? "#00ADB5" : "#EEEEEE"}}>About me</Link>
                    <Link to='/Projects' className = 'burger-link' onClick={handleClick} style={{color: path === "projects" ? "#00ADB5" : "#EEEEEE"}}>Projects</Link>
                    <Link to='/Experience' className = 'burger-link' onClick={handleClick} style={{color: path === "experience" ? "#00ADB5" : "#EEEEEE"}}>Experience</Link>
            </div>
        </nav>
        );
    }
    
    export default Navbar;