import React from 'react';
import MobileApp from "../../assets/images/MobileApp.png";
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { MdOutlinePaid } from 'react-icons/md';
import { RiBankFill } from 'react-icons/ri';
import installApp from "../../assets/images/InstallApp.png";
import SecurePayment from "../../assets/images/SecurePayment.png";
import SetupAcc from "../../assets/images/SetupAcc.png";
import "./Features.css";

const Features = () => {
    return (
        <div className='d-flex flex-column justify-content-center' style={{ padding: "50px 150px" }}>
            <div className="d-flex gap-5 align-items-center">
                <div className="left-section">
                    <img src={MobileApp} alt="mobile_app" height={500} />
                </div>
                <div className="right-section">
                    <div className="d-flex flex-column gap-4">
                        <div className="text-black d-flex gap-1 flex-column">
                            <span className='text-uppercase' style={{ fontSize: "12px", color: "#008aff", fontWeight: "500" }}>Great features</span>
                            <h1 className='mb-0 text-capitalize'>whats make's us special</h1>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex flex-row gap-2">
                                <div className="d-flex flex-column gap-2">
                                    <div className="bg-primary d-flex align-items-center justify-content-center" style={{ borderRadius: "5px", padding: "8px", width: "2rem" }}><FaMoneyBillTrendUp color='white' /></div>
                                    <h5 className='mb-0 text-capitalize'>Transfer your balances</h5>
                                    <span style={{ fontSize: "12px", color: "#21252961" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit aut assumenda placeat velit recusandae!</span>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div className="bg-success d-flex align-items-center justify-content-center" style={{ borderRadius: "5px", padding: "8px", width: "2rem" }}><GiTakeMyMoney color='white' /></div>
                                    <h5 className='mb-0 text-capitalize'>Request a payment</h5>
                                    <span style={{ fontSize: "12px", color: "#21252961" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit aut assumenda placeat velit recusandae!</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row gap-2">
                                <div className="d-flex flex-column gap-2">
                                    <div className="bg-warning d-flex align-items-center justify-content-center" style={{ borderRadius: "5px", padding: "8px", width: "2rem" }}><MdOutlinePaid color='white' /></div>
                                    <h5 className='mb-0 text-capitalize'>Receiving payments</h5>
                                    <span style={{ fontSize: "12px", color: "#21252961" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit aut assumenda placeat velit recusandae!</span>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div className="bg-info d-flex align-items-center justify-content-center" style={{ borderRadius: "5px", padding: "8px", width: "2rem" }}><RiBankFill color='white' /></div>
                                    <h5 className='mb-0 text-capitalize'>withdraw to your bank</h5>
                                    <span style={{ fontSize: "12px", color: "#21252961" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit aut assumenda placeat velit recusandae!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 d-flex justify-content-center">
                <hr className='w-75 text-muted' />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center w-100 gap-5">
                <div className="text-black d-flex gap-1 flex-column text-center">
                    <span className="text-uppercase" style={{ fontSize: "12px", color: "#008aff", fontWeight: "500" }}>
                        how does it work?
                    </span>
                    <h1 className="mb-0 text-capitalize">Follow some simple steps</h1>
                    <h1 className="mb-0 text-capitalize">for using Bestkit</h1>
                </div>
                <div className="steps-container d-flex justify-content-center align-items-center gap-4">
                    <div className="step text-center d-flex flex-column gap-2 justify-content-center align-items-center">
                        <img height={60} src={installApp} alt="Install_App" />
                        <div className="step-title">Secure Payments</div>
                        <span className="step-description" style={{ fontSize: "12px",color:"#21252961" }}>
                            Use community groups to motivate and inspire, or promote your services and drive revenue.
                        </span>
                    </div>
                    <div className="step text-center d-flex flex-column gap-2 justify-content-center align-items-center">
                        <img height={60} src={SetupAcc} alt="Setup_Account" />
                        <div className="step-title">Install Our The App</div>
                        <span className="step-description" style={{ fontSize: "12px",color:"#21252961" }}>
                            Use community groups to motivate and inspire, or promote your services and drive revenue.
                        </span>
                    </div>
                    <div className="step text-center d-flex flex-column gap-2 justify-content-center align-items-center">
                        <img height={60} src={SecurePayment} alt="Secure_Payment" />
                        <div className="step-title">Set Up Your Account</div>
                        <span className="step-description" style={{ fontSize: "12px",color:"#21252961" }}>
                            Use community groups to motivate and inspire, or promote your services and drive revenue.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
