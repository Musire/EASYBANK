import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    return ( 
        <nav className="z-50 w-screen px-4 bg-white centered">
            <section className="w-4/5 h-20 spaced text-grayblue ">
                <div className="">
                    <Link to="/" ><img src={logo} alt="logo" /></Link>
                </div>
                <ul className="spaced mobile:hidden md:flex ">
                    <Link to='/home' className="navbar-link" >home</Link>
                    <Link to='/about' className="navbar-link" >about</Link>
                    <Link to='/contact' className="navbar-link" >contact</Link>
                    <Link to='/blog' className="navbar-link" >blog</Link>
                    <Link to='/careers' className="navbar-link" >careers</Link>
                </ul>
                <button className="navbar-button mobile:hidden md:block">request invite</button>
                <div className="w-10 h-5 bg-cover mobile:visible md:hidden bg-img bg-menu-icon" onClick={toggleMenu}/>
                <section className={`absolute left-0 top-20 h-[calc(100vh-5rem)] bg-white slow-transition overflow-hidden ${isOpen ? 'w-3/4' : 'w-0'}`} >
                    {isOpen && <ul className="w-full p-8 space-y-8 centered-col slow-transition">
                        <Link to='/home' className="sidebar-link" >home</Link>
                        <Link to='/about' className="sidebar-link" >about</Link>
                        <Link to='/contact' className="sidebar-link" >contact</Link>
                        <Link to='/blog' className="sidebar-link" >blog</Link>
                        <Link to='/careers' className="sidebar-link" >careers</Link>
                    </ul>}
                </section>
            </section>
        </nav>
     );
}
 
export default Navbar;