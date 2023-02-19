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

        
      
        const location = useLocation();
      
        if (location.pathname === "/") {
          useEffect(() => {
            setPath('home')
          })
          
        } else if (location.pathname === "/AboutMe") {
          useEffect(() => {
            setPath('about')
          })
        }
        else if (location.pathname ==="/Projects") {
          useEffect(() => {
            setPath('projects')
          })
    
        }
        else if (location.pathname === "/Experience") {
          useEffect(() => {
            setPath('experience')
          })
    
        }
    
    return ( 
        <nav className="navbar" style={{height: navHeight}}>
            <div className="wrap">
            <h3 className="name">
                Marcus Teo
            </h3>
            <div className="links">
                <ul>
                    <li><Link to='/' style={{color: path === "home" ? "#00ADB5" : "#eeeeee"}}>Home</Link></li>
                    <li><Link to='/AboutMe'  style={{color: path === "about" ? "#00ADB5" : "#eeeeee"}}>About me</Link></li>
                    <li><Link to='/Projects' style={{color: path === "projects" ? "#00ADB5" : "#eeeeee"}}>Projects</Link></li>
                    <li><Link to='/Experience' style={{color: path === "experience" ? "#00ADB5" : "#eeeeee"}}>Experience</Link></li>
                    {/* <li><Link to='/Interest'>Ideas!!</Link></li> */}

                    {/* <li><a href="#contactme">Contact me</a></li> */}
                    <div className="hamburger">
                        <Hamburger 
                        distance='lg'
                        size = {40}
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
                </ul>
            </div>
            </div>
            <div className="hamburger-menu">
                    <li onClick={handleClick}><Link to='/' style={{color: path === "home" ? "#00ADB5" : "#eeeeee"}}>Home</Link></li>
                    <li onClick={handleClick}><Link to='/AboutMe' style={{color: path === "about" ? "#00ADB5" : "#eeeeee"}}>About me</Link></li>
                    <li onClick={handleClick}><Link to='/Projects' style={{color: path === "projects" ? "#00ADB5" : "#eeeeee"}}>Projects</Link></li>
                    <li onClick={handleClick}><Link to='/Experience' style={{color: path === "experience" ? "#00ADB5" : "#eeeeee"}}>Experience</Link></li>
            </div>
        </nav>
        );
    }
    
    export default Navbar;