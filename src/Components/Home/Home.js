import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faInstagram,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import './Home.css';



function Home() {
  return (
    <div className="Container">
      <div className='content2'>
        <div className='left-column'>
          <h1 className="heading">Build your lovely<br></br>
            place with our best<br></br>
            stuff
          </h1>
          <p className="para"> At Scoth Furnitures, we provide and offer best quality products.  
          </p>
          <div className="see-more">
            <div className="btn"><button2>SEE MORE</button2></div>
            <div className="social">
              <a href="" className="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
              <a href="" className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
              <a href="" className="github"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
          </div>
          
          <div class><img className="img1" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/7/30/1/rx_target_authentic-denim-slipcover.jpeg.rend.hgtvcom.616.616.suffix/1627651640391.jpeg" alt=""></img></div>
          
          
        </div>

        <div className='right-column'>
          <img className="new" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/7/30/1/rx_target_authentic-denim-slipcover.jpeg.rend.hgtvcom.616.616.suffix/1627651640391.jpeg" alt=""></img>
          
        </div>
      </div>
    </div>
  );
  }
  
  export default Home;