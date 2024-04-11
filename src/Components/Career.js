import React from "react";

import Topbar from "./Topbar";

function FAQ() {
  return (
    <>
      <Topbar/>
      <div className="container" style={{marginTop:'100px',marginBottom:'206px',width:'80%'}}>
        <div
            style={{ textAlign: "center", color: "#800020", marginBottom: "7%"}}
          >
            <span style={{ fontSize: "2.5rem", fontWeight: "700" }}>
              Job Centre
            </span>
        </div> 

        <div style={{ fontSize: "1.3rem", fontWeight: "400"}}>
          <div style={{textAlign:'justify'}}>
          At J.K.& Son's Financial Advisory Service, we foster an entrepreneurial and results-oriented culture, valuing teamwork and intellectual rigor as essential components of individual performance. We firmly believe in the transformative power of our people and are dedicated to nurturing their career growth. Our environment encourages initiative, a thirst for learning, self-motivation, and the willingness to shoulder additional responsibilities.
          </div>
          <br />
          <div style={{textAlign:'justify'}}>
          As an employer, we provide opportunities for personal development within a positive work environment, offering the chance to realize your full potential aligned with your goals, within a business of remarkable size and scope.
          </div>
        </div>

      </div>
    </>
  );
}

export default FAQ;
