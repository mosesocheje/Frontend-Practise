import React from "react";
import './Gallery.css'


function Gallery () {
  return (
    <div className="galContainer">
      <div className='galContent'>
        <div className="galRow">
          <div className="gallery"><h1 >Our Gallery</h1></div>
          
        </div>
        <div className="galPar"><p>From the traditional to the modern and luxurious, we have an impressive<br></br> 
          assortment of premium sofas to transform your living room</p></div>
        <div className='galNav'> 
          <div className="items"><b>All </b>Bed Sofa Arm Chair Table</div>
          <div className="seeAll"><button3>SEE ALL</button3></div>
        </div>
        <div className="gal-row-two">
          <div className='picCol1'>
        
            <img className="picOne"
              src="https://media.istockphoto.com/id/1164014632/photo/dining-room-interior-with-poster-and-brown-chairs.jpg?s=612x612&w=0&k=20&c=qRBsWQNFKF1G9eKz6g7JJAayw7ynX1xCWpR6_8znxPY=" alt="">
            </img>
        
            <img className="picTwo"
              src="https://media.istockphoto.com/id/1083402094/photo/mock-up-poster-scandinavian-design-interior.jpg?s=612x612&w=0&k=20&c=8GM9kzrEB-WTSShZcSWcEj9eKStOltmLV1w8OOuN7FY=" alt="">

            </img>
            
          </div>
          <div className='picCol2'>
            
            <img className="picThree"
              src="https://media.istockphoto.com/id/1439658792/photo/picture-frame-attached-to-the-wall-and-has-a-table-at-the-bottom.jpg?s=612x612&w=0&k=20&c=8ueE9Ip_2HAIS4TclMiYRjpHEIwIc7mquVQkyC5vNgQ=" alt="">

            </img>
            
            <img className="picFour"
              src="https://media.istockphoto.com/id/986595912/photo/classic-dining-room-corner-round-mirror-side-view.jpg?s=612x612&w=0&k=20&c=G4nBueuBEaFh_QcS1GjcSXEiWt5PpfxpJqUuzH1VK7w=" alt="">
            </img>
            
          </div>
          <div className='picCol3'>
            
            <img className="picFive"
            src="https://media.istockphoto.com/id/856469688/photo/mock-up-poster-in-interior-with-dining-area-living-room-modern-style-3d-illustration.jpg?s=612x612&w=0&k=20&c=2BYKg4onYFCnBehx6fbarKTBo2-AOhgfQLnronuiWC8=" alt=""></img>
            
            <img className="picSix"
            src="https://media.istockphoto.com/id/1352464124/photo/stylish-and-retro-living-room-with-design-vintage-wooden-commode-chair-footrest-table-lamp.jpg?s=612x612&w=0&k=20&c=8McRFprutXQY52fg0gQNhqAot1lBO-C27cxpKl6AQso=" alt=""></img>
            
      
            
          </div>
        </div>
          
            
      </div>
    </div>
  );
}
  
export default Gallery;