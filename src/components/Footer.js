import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillApple } from "react-icons/ai";
import { FaDribbble, FaFacebookF, FaGithub, FaGooglePlay, FaTwitter } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Logo from "../assets/images/PKLogo.png"
import { Link } from "react-router-dom";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Row className="gy-4">
        {/* Left Column */}
        <Col lg={4} md={6} className="d-flex flex-column gap-2">
          <Link to="/home">
            <img src={Logo} alt="PrimeKit_Logo" height={25} />
          </Link>
          <p style={{color:"#21252999"}}>
            In the fast-paced world of modern technology, many leadership executives and organizations understand that building.
          </p>
          <p className="fw-bold text-black">Get Our Apps From:</p>
          <div className="d-flex gap-2">
            <button className="btn btn-custom d-flex align-items-center gap-2">Apple Store<AiFillApple size={18} /></button>
            <button className="btn btn-custom-outline d-flex align-items-center gap-2">Play Store<FaGooglePlay size={15} /></button>
          </div>
        </Col>
        <Col lg={2} md={3} className="d-flex flex-column gap-2">
          <h6 className="mb-0 footer-title">Quick Links</h6>
          <ul className="list-unstyled d-flex flex-column gap-1">
            {["About Us", "Services", "Pricing", "Privacy Policy", "Blogs", "Contact Us"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-decoration-none" style={{color:"#21252999"}}>
                  <span style={{ fontSize: "12px" }}>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={2} md={3} className="d-flex flex-column gap-2">
          <h6 className="mb-0 footer-title">Services</h6>
          <ul className="list-unstyled d-flex flex-column gap-1">
            {["Online Payments", "Balance Transfer", "Payment Request", "Bank Withdraw", "Send Money", "Receive Money"].map(
              (service, index) => (
                <li key={index}>
                  <a href="#" className="text-decoration-none" style={{color:"#21252999"}}>
                    <span style={{ fontSize: "12px" }}>{service}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </Col>
        <Col lg={4} md={12} className="d-flex flex-column gap-2">
          <h6 className="mb-0 footer-title">Newsletter</h6>
          <p style={{color:"#21252999"}}>Sign up and receive the latest tips via email.</p>
          <div className="input-group mb-3" style={{ borderRadius: "2px" }}>
            <span className="input-group-text border-0" style={{ borderRadius: "2px" }}>
              <HiOutlineEnvelope size={20} color="grey" />
            </span>
            <input type="text" className="form-control border-0" placeholder="Enter Your Mail" />
          </div>
          <button className="btn btn-custom w-100 d-flex align-items-center justify-content-center gap-2">
            Subscribe Now <GrSend size={15} />
          </button>
        </Col>
      </Row>
      <div className="mt-5 mb-2 d-flex justify-content-center">
        <hr className='w-100 text-muted' />
      </div>

      <div className="d-flex justify-content-between">
        <div className="left-icons d-flex flex-row gap-4">
        <FaFacebookF size={15} color="#21252961" className="is-pointer" />
        <FaDribbble size={15} color="#21252961" className="is-pointer" />
        <FaGithub size={15} color="#21252961" className="is-pointer" />
        <FaTwitter size={15} color="#21252961" className="is-pointer" />
        </div>
        <div className="right-copyright" style={{color:"#21252961",fontSize:"12px"}}>
        &copy; 2025 PrimeKit. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
