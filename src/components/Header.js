import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/PKLogo.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
    return (
        <header style={{ background: "white", width: "100%", height: "85px",padding:"0px 150px 0px 150px" }} className="d-flex align-items-center justify-content-between">
            <Link to="/home">
            <img src={Logo} alt="PrimeKit_Logo" height={25}/></Link>
            <nav className="d-flex gap-5" style={{fontSize:"12px"}}>
                <Link to="/home" className="text-decoration-none text-primary">Start</Link>
                <Link to="/feature" className="text-decoration-none text-black">Features</Link>
                <Link to="/solution" className="text-decoration-none text-black">Solutions</Link>
                <Link to="/pricing" className="text-decoration-none text-black">Pricing</Link>
                <Link to="/contact" className="text-decoration-none text-black">Contact</Link>
            </nav>
            <button style={{backgroundColor:" #008aff",border:"none",borderRadius:" 2px",padding: "0px 20px 0px 20px",height: "35px",fontSize:"12px"}}><div className="d-flex align-items-center text-white gap-1">Download <MdKeyboardArrowRight size={20} /></div></button>
        </header>
    );
};

export default Header;
