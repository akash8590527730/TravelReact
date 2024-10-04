import React from "react";
import destinationCSS from './../Destinations/Destination.module.css'
import Destination01  from './../../assets/Destination01.jpg'
import Destination02  from './../../assets/Destination02.jpg'
import Destination03  from './../../assets/Destination03.jpg'
import Destination04  from './../../assets/Destination04.jpg'
import Destination05  from './../../assets/Destination05.jpg'
import Destination06  from './../../assets/Destination06.jpg'


function Destination () {
    return(
        <div className={`${destinationCSS.DestinationWrapper} section`} id="destination">
            <div className="Section_heading">
                <div>
                    <h2>Popular Destinations</h2>
                    <p>“One’s destination is never a place, but a new way of seeing things” </p>

                </div>
                <button><small>View All Destination</small><i className="ri-arrow-right-up"></i></button>
            </div>
<div className={destinationCSS.DestinationCards}>
<div className={destinationCSS.DestinationCard}>
    <img src={Destination01} alt="" />

    <div className={destinationCSS.Content}>
   
        <h2>White Muslim Mosque
        </h2>
        <button>Discover</button>
    </div>
    </div>
    <div className={destinationCSS.DestinationCard}>
    <img src={Destination02} alt="" />

    <div className={destinationCSS.Content}>
    
        <h2>Chicago, IL, United States</h2>
        <button>Discover</button>
    </div>
    </div>
    <div className={destinationCSS.DestinationCard}>
    <img src={Destination03} alt="" />

    <div className={destinationCSS.Content}>
        <h2>Reikiavik, Islandia

</h2>
        <button>Discover</button>
    </div>
    </div>
    <div className={destinationCSS.DestinationCard}>
    <img src={Destination04} alt="" />

    <div className={destinationCSS.Content}>
        <h2>United Kingdom</h2>
        <button>Discover</button>
    </div>
    </div>
    
    <div className={destinationCSS.DestinationCard}>
    <img src={Destination05} alt="" />

    <div className={destinationCSS.Content}>
        <h2>  Galleria Vittorio  in Milan,</h2>
        <button>Discover</button>
    </div>
    </div>
    
    <div className={destinationCSS.DestinationCard}>
    <img src={Destination06} alt="" />

    <div className={destinationCSS.Content}>
        <h2>Narrow Gauge Tourist Train in the French Pyrenees
        </h2>
        <button>Discover</button>
    </div>
    </div>
    

    
</div>
        </div>
    )

}
export default Destination