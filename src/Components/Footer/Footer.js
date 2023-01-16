import React from "react";
import './Footer.css'


function Footer () {
    return (
      <div className="footContainer">
        <div className='footContent'>
          <div className="footCol1">
            <div><h2>U.I.desk</h2></div>
            <div className="footPar">
              <p>Excellence and Top-notch quality<br></br>
                We offer the best and high quality products
              </p>
            </div>
          </div> 
          <div className="footCol2">
            <div className="footOpt">
              <div className="opt1">
                <dl> 
                  <dt><b>Home</b></dt> 
                  <dt>Company</dt> 
                  <dt>News</dt> 
                  <dt>Team</dt>
                </dl> 
              </div>
              <div className="opt2">
                <dl> 
                  <dt><b>About</b></dt> 
                  <dt>History</dt> 
                  <dt>Service</dt> 
                  <dt>Pricing</dt>
                </dl> 
              </div>
              <div className="opt3">
                <dl> 
                    <dt><b>Partner</b></dt> 
                    <dt>Business</dt> 
                    <dt>Plan</dt> 
                    <dt>Marketing</dt>
                  </dl> 
              </div>
              <div className="opt4">
                <dl> 
                  <dt><b>Contact</b></dt> 
                  <dt>UI.desk</dt> 
                  <dt>(234)816-088-0632</dt>
                  <dt>Lagos, Nigeria</dt> 
                  </dl> 
              </div>
            </div>
            
              <div><footer>© Copyright 2022 by UI.desk. all right reserved.</footer></div>
          </div>
           
        </div>
      </div>
    );
  }
  
  export default Footer;