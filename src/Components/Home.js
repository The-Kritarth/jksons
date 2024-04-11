import React from "react";

import HomeBg from "../Assets/HomeBg.png";
import Advisory from "../Assets/Advisory.png";
import Topbar from "./Topbar";

function Home() {
  return (
    <>
    <Topbar/>
    <div className="container Home">
      <div
        style={{
          marginTop:'100px',marginBottom:'100px',
        }}
      >
      <div style={{textAlign:'center'}}>
        <img src={HomeBg} alt="" style={{marginBottom:'2%',height:'auto',width:'80%'}}/> <br />
        <span style={{fontSize:'1.5rem',fontWeight:'600'}}>OBJECTIVE: Protecting your dreams, creatively</span>
      </div>
        
      

      <div style={{ textAlign: "center", marginTop: "15%", color: "#800020",display:'flex',justifyContent:'center'}}>
        <span style={{ fontSize: "2.5rem", fontWeight: "700" ,alignContent:'center',marginRight:'5%'}}>Advisory Process</span>
        <img className="AdvisoryImg" src={Advisory} alt="" style={{width:'50%'}}/>
        <br />
        {/* <span style={{ fontsize: "1.3rem", fontWeight: "600" }}>
          A brief description of the project's mission
        </span> */}
      </div>

      <div style={{ margin: "5%" }}>
        <div className="cardRow" style={{ display: "flex" ,justifyContent:'center'}}>
          <div className="col-md-4" style={{ marginRight: "2%" }}>
            <div className="card" style={{borderColor:'white'}}>
              <div className="row card-body">
                
                  <h4 className="card-title">1.</h4>
                  <div className="card-text">
                  <span style={{fontSize:'1.3rem',fontWeight:'600'}}>Client Profiling</span>
                    <ul>
                      <li>
                      Define goals, objectives and understanding of investment products
                      </li>
                      <li>
                      Goals are divided into Personal (Marriage, Education, Retirement and Philanthropy) and Business (Positioning and Growth Aspirations)
                      </li>
                    </ul>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ marginRight: "2%" }}>
            <div className="card" style={{borderColor:'white'}}>
              <div className="row card-body">
                  <h4 className="card-title">2.</h4>
                  <div className="card-text">
                    <span style={{fontSize:'1.3rem',fontWeight:'600'}}>Risk Profiling</span>
                    <br />
                    <span>
                    Define risk acceptability for the client with an outlook on preservation and growth.
                    </span>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{borderColor:'white'}}>
              <div className="row card-body">
                
                  <h4 className="card-title">3.</h4>
                  <div className="card-text">
                    <span style={{fontSize:'1.3rem',fontWeight:'600'}}>Customised Solutions</span>
                    <br />
                    <span>
                    Tailor-made investment solutions based on the understanding of the client's goals and risk profile.
                    </span>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="cardRow" style={{ display: "flex", marginTop: "2%",justifyContent:'center'}}>
          <div className="col-md-4" style={{ marginRight: "2%" }}>
            <div className="card" style={{borderColor:'white'}}>
              <div className="row card-body">
              
                  <h4 className="card-title">4.</h4>
                  <div className="card-text">
                    <span style={{fontSize:'1.3rem',fontWeight:'600'}}>Goal Alignment</span>
                    <br />
                    <span>
                    Detailed discussions with clients on the solutions regarding alignment with Personal and Business goals.
                    </span>
                    
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ marginRight: "2%" }}>
            <div className="card" style={{borderColor:'white'}}>
              <div className="row card-body">
                
                  <h4 className="card-title">5.</h4>
                  <div className="card-text">
                    <span style={{fontSize:'1.3rem',fontWeight:'600'}}>Investment Choice and Asset Allocation</span>
                    <ul>
                      <li>
                      Portfolio risk
                      </li>
                      <li>
                      Security Concentration
                      </li>
                      <li>Liquidity needs</li>
                      <li>Return expectations</li>
                    </ul>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{borderColor:'white'}}>
              <div className="row card-body">
                
                  <h4 className="card-title" >6.</h4>
                  <div className="card-text">
                    <span style={{fontSize:'1.3rem',fontWeight:'600'}}>
                    Periodic Monitoring and Reporting
                    </span>
                    <span>
                      <ul>
                        <li>
                        Disciplined monitoring and rebalancing
                        </li>
                        <li>
                        Regular review to validate the solutions with goals and objectives
                        </li>
                      </ul>
                    </span>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>  
    </div>
    </>
  );
}

export default Home;
