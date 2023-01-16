
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Client.css'

import { faAmazon, faDribbble, faGoogle, faShopify, faShopware } from "@fortawesome/free-brands-svg-icons";

function Client () {
    return (
        <div className="clientContainer">
            <div className='clientContent'>
                <div className="clientRow1">
                    <div className="ourClient"><h1>Our Clients</h1></div> 
                    <div className="client">
                        <p>
                            Google<a href="" className="google"><FontAwesomeIcon icon={faGoogle} size="1x" /></a>
                            Shopify<a href="" className="shopify"><FontAwesomeIcon icon={faShopify} size="1x" /></a>
                            Amazon<a href="" className="amazon"><FontAwesomeIcon icon={faAmazon} size="1x" /></a>
                            Shopware <a href="" className="shopWare"><FontAwesomeIcon icon={faShopware} size="1x" /></a>
                            Dribbble <a href="" className="dribbble"><FontAwesomeIcon icon={faDribbble} size="1x" /></a>
                        </p>
                    </div>
                    
                </div>
                <div className="clientRow2">
                    <div><h1 className="happy">Happy Clients Say</h1></div>
                </div>
                <div className="clientRow3">
                    <div className="clientCol1">
                        <div className="clientImage1"><img className="image1" src="https://images.unsplash.com/photo-1634549335286-65998bf3dd27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt=""></img>
                            <div className="clientName1"><h2>KELVIN KANT</h2>
                                <div className="title1"><p>CEO Spopify</p></div>
                            </div>
                            
                        </div>
                        
                        <div className="clientPar1"><p>Scoth Furnitures rocks! At every point you think you have seen the best they can offer and then boom! 
                                They come up with something better and mind-blowing. The quality is top-notch, the durability is second to none. Scoth Furnitures will always be my first choice. 
                                I'm always satisfied with all their services offered.
                            </p>
                        </div>
                    </div>
                    <div className="clientCol2">
                        
                        <div className="clientImage2"><img className="image2" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
                            <div className="clientName2"><h2>RICHARD STONE</h2>
                            <div className="title2"><p>CEO Dribbble</p></div>
                            </div>
                        </div>
                        <div className="clientPar2"><p>I got my first set of furnitures from Scoth Furnitures and ever since, I have always gotten all my furnitures from Scoth Furntures. 
                            I have no regrets. With Scoth Furnitures, I'm confidence of interior look of my house and I will choose Scoth Furnitures over and over again.</p>
                        </div>
                    </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
        </div>
        
        
        
    );
}
  
export default Client;