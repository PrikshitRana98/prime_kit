import React from 'react'
import "./heroBanner.css";
import { FaStar } from 'react-icons/fa';
import GooglePLayButton from "../../assets/images/GooglePlayButton.svg";
import IosButton from "../../assets/images/iosButton.svg";
import Payment from "../../assets/images/Payment.svg"
import Features from '../Feature/Features';
import Solution from '../Solution/Solution';

const Home = () => {
  return (
    <>
      <div className='heroBanner d-flex align-items-center justify-content-start'>
        <div className="d-flex flex-column gap-4">
          <div className='text-capitalize d-flex align-items-center gap-2' style={{ fontSize: "12px", color: "#008aff" }}><img src={Payment} style={{ height: "15px" }} />100% secure payments</div>
          <div className="text-black d-flex gap-1 flex-column">
            <h1 className='mb-0 text-capitalize'>Make online payment</h1>
            <h1 className='mb-0 text-capitalize'>easily and increase</h1>
            <h1 className='mb-0 text-capitalize'>your business</h1>
          </div>
          <span style={{ fontSize: "12px", color: "#21252961" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore <br />impedit aut assumenda placeat velit recusandae!</span>
          <div className="d-flex gap-3">
            <div className="d-flex flex-column gap-2">
              <a href="#" tabIndex="0"><img src={GooglePLayButton} alt="Play_Store" height={40} /></a>
              <div style={{ fontSize: "12px", fontWeight: "500" }} className='d-flex align-items-center gap-1'><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /> (4.9)</div>
            </div>
            <div className="d-flex flex-column gap-2">
              <a href="#" tabIndex="0"><img src={IosButton} alt="app-store" height={40} /></a>
              <div style={{ fontSize: "12px", fontWeight: "500" }} className='d-flex align-items-center gap-1'><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#FFAB2E' /><FaStar size={12} color='#ADB7C2' /> (4.5)</div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Solution/>
    </>
  )
}

export default Home
