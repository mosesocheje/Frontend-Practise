import React, { Component } from 'react';

import { GiWoodenChair, GiTruck, GiClockwork } from "react-icons/gi";


import './Features.css'


function Features () {
    return (
      <div className="feaContainer">
        <div className='feaContent'>
            <div className="feaRow1">
                <div className="features"><h1>Our Features</h1></div>
                <div className="feaPar">
                    <p>Unleash your creativity with a visual collaboration platform<br></br>
                        that enables effective ideation
                    </p>
                </div>
            </div>  
            <div className="feaRow2">
                <div className="feaCol1">
                    <div className='chair'>
                    <GiWoodenChair />
                    </div>
                    <div className="head1"><h2>Premium Quality</h2></div>
                    <div className="feaPar1">
                        <p>Check out our selection &<br></br>
                            Order Now. Free UK Delivery<br></br>
                            on Eligible Orders!
                        </p>
                    </div>
                </div> 
                <div className="feaCol2">
                    <div className='truck' size=''>
                       <GiTruck size=''/> 
                    </div>
                    <div className="head2"><h2>Free & Fast Delivery</h2></div>
                    <div className="feaPar2">
                        <p>Check out our selection &<br></br>
                            Order Now. Free UK Delivery<br></br>
                            on Eligible Orders!
                        </p>
                    </div>
                </div> 
                <div className="feaCol3">
                    <div className='clock'>
                        <GiClockwork/>
                    </div>
                    <div className="head3"><h2>Exchange & Returns</h2></div>
                    <div className="feaPar3">
                        <p>Check out our selection &<br></br>
                            Order Now. Free UK Delivery<br></br>
                            on Eligible Orders!
                        </p>
                    </div>
                </div>    
            </div>
            
        </div>
      </div>
    );
  }
 
export default Features;





// import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import './Features.css'

// function Features () {
//     return (
//         <div className="feaContainer">
//             <div className='feaContent'>
//                 <div className='feaTopRow'>
//                     <div className="features"><h1>Our Features</h1>
//                         <div className="feaPar"><p>Unleash your creativity with a visual collaboration platform<br></br>
//                         that enables effective ideation</p></div>
//                     </div>
                    
//                 </div>
//                <div className='fea-bottom-row'>
//                 <div className="icon-col1">
                    
//                     <h2>Premium Quality</h2>
//                     <p>Check out our selection &<br></br>
//                         Order Now. Free UK Delivery<br></br>
//                         on Eligible Orders!
//                     </p>
//                 </div>
//                  <div className="icon-col2">
                    
//                     <h2>Free & Fast Delivery</h2>
//                     <p>Check Out our Selections &<br></br> 
//                         Order Now. Free UK Delivery<br></br>
//                         on Eligible Orders!
//                     </p>
//                 </div> 
//                 <div className="icon-col3">
                
//                     <h2>Exchange & Returns</h2>
//                     <p>Check Out our Selections &<br></br>
//                         Order Now. Free UK Delivery<br></br>
//                         on Eligible Orders!
//                     </p>
//                 </div>
//             </div>
            
               
                
               
//             </div>
//         </div>
//     );
//   }




// export default Features;