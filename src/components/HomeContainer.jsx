import React from "react";
import{BrowserRouter,Routes, Route, Link} from "react-router-dom";
import delivery from"../img/delivery.png";
import hero from "../img/heroBg.png"
import "./HomeContainer.css"
import menu from "../util/menu.js"


const HomeContainer = () => {
    return (
        <section id="home">
            <div className="description">
                <div className="bike">
                    
                    <img src={delivery}></img>
                    <p>BikeDelivery</p>
                </div>
                <div className="para">
                    <p >The Fastest Delivery in Your City</p>
                    <p className="grap">A café is a type of restaurant which typically serves coffee and tea, in addition to light refreshments such as baked goods or snacks. The term "café" comes from the French word meaning "coffee".</p>
                </div>
                <button>
                    Order Now
                </button>
            </div>
            <div className="background">
                {
                 menu && menu.map(m =>(
                    <div key={m.id} className="menu">
                        <img src={m.imageSrc}></img>
                        <p className="mmm">{m.name}</p>
                        <p>{m.desc}</p>
                        <p className="mmm"><span>$</span>{m.price}</p>
                    </div>))
                 }
            </div>
        </section>
        
    );
}
export default HomeContainer;
