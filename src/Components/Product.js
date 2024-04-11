import React from "react";

import Product1 from "../Assets/Product1.png";
import Product2 from "../Assets/Product2.png";
import Product3 from "../Assets/Product3.png";
import Product4 from "../Assets/Product4.png";
import Product5 from "../Assets/Product5.png";
import Product6 from "../Assets/Product6.png";
import Product7 from "../Assets/Product7.png";

function Product() {
  return (
    <div
      className="container Product"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={Product6} alt="" style={{ width: "50%" }} />
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#800020",
          marginBottom: "5%",
          marginTop: "10%",
        }}
      >
        <span style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          What We Offer
        </span>
        <br />
        <br />
        <br />
      </div>
      <div style={{ margin: "5%" }}>
        <div className="cardRow" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-md-6" style={{ marginRight: "2%" }}>
            <div className="card" style={{ borderColor: "white" }}>
              <div className="row card-body">
                <div className="card-text" style={{ display: "flex" }}>
                  <img src={Product7} alt="" />
                  <div style={{ marginLeft: "20px" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                      EQUITY
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      Generating strong returns for our investors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginRight: "2%" }}>
            <div className="card" style={{ borderColor: "white" }}>
              <div className="row card-body">
                <div className="card-text" style={{ display: "flex" }}>
                  <img src={Product1} alt="" />
                  <div style={{ marginLeft: "20px" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                      COMMODITIES
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      The brain is a commodity used to fertilize ideas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardRow" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-md-6" style={{ marginRight: "2%" }}>
            <div className="card" style={{ borderColor: "white" }}>
              <div className="row card-body">
                <div className="card-text" style={{ display: "flex" }}>
                  <img src={Product5} alt="" />
                  <div style={{ marginLeft: "20px" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                      REAL ESTATES
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      Creating the ideal commercial space for your business
                      aspirations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginRight: "2%" }}>
            <div className="card" style={{ borderColor: "white" }}>
              <div className="row card-body">
                <div className="card-text" style={{ display: "flex" }}>
                  <img src={Product3} alt="" />
                  <div style={{ marginLeft: "20px" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                      LOANS
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      Only the best lending options for you
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardRow" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-md-6" style={{ marginRight: "2%" }}>
            <div className="card" style={{ borderColor: "white" }}>
              <div className="row card-body">
                <div className="card-text" style={{ display: "flex" }}>
                  <img src={Product4} alt="" />
                  <div style={{ marginLeft: "20px" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                      MUTUAL FUNDS
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      Always where you are{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginRight: "2%" }}>
            <div className="card" style={{ borderColor: "white" }}>
              <div className="row card-body">
                <div className="card-text" style={{ display: "flex" }}>
                  <img src={Product2} alt="" />
                  <div style={{ marginLeft: "20px" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                      INSURANCE
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                      Protecting what matters most{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
