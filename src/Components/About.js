import React from "react";

import Commitments from "../Assets/Commitments.png";
import CommitmentsEx from "../Assets/CommitmentsEx.png";
import WWD from "../Assets/WWD.png";

function About() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <img src={WWD} alt="" style={{ width: "100%" }} />
        <img
          src={Commitments}
          alt=""
          style={{ width: "100%", marginTop: "5%" }}
        />
        <img
          src={CommitmentsEx}
          alt=""
          style={{ width: "100%", marginTop: "5%" }}
        />

        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "5%",
          }}
        >
          The most important investment you can make is in yourself -{" "}
          <b>
            <u>Warren Buffet</u>
          </b>
        </div>
      </div>
    </>
  );
}

export default About;
