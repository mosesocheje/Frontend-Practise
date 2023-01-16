import React from "react";
import './About.css';


function About () {
    return (
        <div className="container-about">
            <div className='content-about'>
                <div className='top-row'>
                    <div className="about-col1">
                        <h1 className="about">About US</h1>
                        <p>Here at Scoth Furnitures, we want you to buy with the utmost confidence and knowledge that you are investing in something that not only looks great, but will last for a lifetime. To help you do this, we’ve created this guide to the five key features that make up a quality sofa and why they are important. Read on to find out more.</p>
                    </div>
                    <div className="about-col2">
                        <img className="col2" src="https://media.istockphoto.com/id/1221171881/photo/white-boss-office-corner-with-beige-sofa.jpg?s=612x612&w=0&k=20&c=DBrQ0p1jzcs-h6MWWDZfv6yNK4NHUyJsOQypwRCkDYU=" alt=""></img>
                    </div>
                </div>
            </div>  
            <div className='content-new'>
                <div className='bottom-row'>
                    <div className="about-col3"> 
                        <img className="col3" src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""></img>
                    </div>
                    <div className="about-col4">
                        <img className="col4" src="https://media.istockphoto.com/id/468601190/photo/modern-green-sofa-with-blue-and-grey-pillows.jpg?s=612x612&w=0&k=20&c=SRsZe_YFH0PoVmE-c86zDjr29ozxQ1jbHsg_PM5WhuA=" alt=""></img>
                    </div>
                    <div className="about-col5">
                        <p className="col5">When it comes to shopping for your new sofa, the first thing that will usually catch your attention is an attractive design.
                        However, the saying that beauty is only skin deep applies to sofas too. 
                        </p>
                        <button className="btn-1">READ MORE</button>
                    </div>
                </div>               
            </div>   

                
                
        
        
        </div>
    );
}





export default About;