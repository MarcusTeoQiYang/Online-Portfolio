const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h3 className="name">Marcus Teo</h3>
            <div className="links">
                <ul>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#interest">Interest</a></li>

                    {/* <li><a href="#contactme">Contact me</a></li> */}
                </ul>
            </div>
        </nav>
        );
    }
    
    export default Navbar;