import React from 'react';
import AISwiper from "../Swiper/AISwiper";

const Solution = () => {
  return (
    <div className="container-fluid d-flex gap-5 flex-column" style={{ backgroundColor: "#F7F9FC",padding: "50px 150px" }}>
      <div className="text-black text-center">
        <span className="text-uppercase" style={{ fontSize: "12px", color: "#008aff", fontWeight: "500" }}>
          App Interface
        </span>
        <h1 className="mb-0 text-capitalize">Choose the Offering that</h1>
        <h1 className="mb-0 text-capitalize">works best for you.</h1>
      </div>
        <AISwiper />
    </div>
  );
};

export default Solution;
