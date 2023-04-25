import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Navbar = () => {
    return ( 
        <nav className="bg-white w-screen px-4 centered z-50">
            <section className="w-4/5 h-20 spaced text-grayblue ">
                <div className="">
                    <Link to="/" ><img src={logo} alt="logo" /></Link>
                </div>
                <ul className="spaced">
                    <Link to='/home' className="navbar-link" >home</Link>
                    <Link to='/about' className="navbar-link" >about</Link>
                    <Link to='/contact' className="navbar-link" >contact</Link>
                    <Link to='/blog' className="navbar-link" >blog</Link>
                    <Link to='/careers' className="navbar-link" >careers</Link>
                </ul>
                <button className="navbar-button">request invite</button>
            </section>
        </nav>
     );
}
 
export default Navbar;