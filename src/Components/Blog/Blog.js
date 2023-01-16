import React from "react";
import './Blog.css'


function Blog () {
    return (
        <div className="blogContainer">
            <div className='blogContent'>
                <div className="blogRow1">
                    <div className="blog"><h1>Our Blog</h1></div>
                    <div className="blogPar"><p>Visit our Blog to get information about all the mind-blowing offers we have you.<br></br> 
                        There is always something new up there for you</p>
                    </div>
                </div> 
                <div className="blogRow2">
                    <div className="blogCol1">
                        <div>
                            <img className="blogImg1" src="https://media.istockphoto.com/id/1403794448/photo/bright-living-room-interior-with-two-empty-white-posters.jpg?s=612x612&w=0&k=20&c=WChXnyWtQqJqAx3dED_wRvs1fc4i33mujocF5-MoyKY=" alt=""></img>
                        </div>
                        <div><h2>Zakinthos, Zakynthos, Greece</h2></div>
                        <div><p className="blogPar1">Here at Scoth Furnitures, the cushions in the majority of our sofas are made with quality reflex foam to ensure maximum comfort. In areas where more pressure is applied when sitting down, we attach ultra-high-density foam to provide enhanced support for your body.</p></div>
                    </div>
                    <div className="blogCol2">
                        
                        <div>
                            <img className="blogImg2" src="https://media.istockphoto.com/id/976970564/photo/stylish-hallway-interior.jpg?s=612x612&w=0&k=20&c=Q3Dpfz1kwK2m6k4r8LK3yTLASwkThcT6SiJYhnvTYiU=" alt=""></img>
                        </div>
                        <div><h2>Torrevieja, Spain</h2></div>
                        <div><p className="blogPar2">Fabric sofas can be very comfortable. There is also a wide variety of materials to consider, so there is plenty of choice when it comes to selecting one that suits your tastes. </p></div>
                    </div>
                    <div className="blogCol3">
                        <div>
                            <img className="blogImg3" src="https://media.istockphoto.com/id/1259906382/photo/panoramic-white-dining-room-with-poster.jpg?s=612x612&w=0&k=20&c=l9ifJmA1NeBaG2IebaKRVhh9pVOOUPFwhMAF3cUk44M=" alt=""></img>
                        </div>
                        <div><h2>Wooster, United States</h2></div>
                        <div><p className="blogPar3">If you are looking for a more relaxed shape for your sofa, then low-back models are ideal for slouching or lying back. By adding a couple of cushions, you can easily kick back and watch some TV or get stuck into your favourite book.</p></div>
                    </div>
                </div>
            </div>
            <div className="blogRow3">
                <div className="blogCol4">
                    <div><img className="subImg" src="https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img></div>
                    
                </div>
                <div className="blogCol5">
                    <div><h1  className="sub">Subscribe To Get The<br></br>
                        Latest News About Us</h1>
                    </div>
                    <div><p className="update">Be the first to get updates  about our new and<br></br> 
                        latest products. You don't want to miss out!</p>
                    </div>
                    <div>
                        
                    </div>
                    <div className="email">
                        <div className="placeholder"><placeholder>Enter your email</placeholder></div>
                        <div><button5>GET STARTED</button5></div>
                                                
                    </div>
                        
                    
                </div>
            </div>
        </div>
    );
}
  
export default Blog;