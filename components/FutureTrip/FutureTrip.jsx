import React from "react";
import futureTripCSS from './../FutureTrip/FutureTrip.module.css'
import image1 from './../../assets/Blog1.png'
import image2 from './../../assets/Blog2.png'
import image3 from './../../assets/Blog3.png'
function FutureTrip(){
    return(
        <div className={`${futureTripCSS.FutureTrip_Wrapper} section`}>
            <div className={futureTripCSS.FutureTripCards}>
                <div className={futureTripCSS.FutureTripCard}>
                    <div className={futureTripCSS.FutureTripCardImage}>
                        <img src={image1} alt="" />
                    </div>
                    <h3>Lorem ipsum dolor, </h3>
                    <p>jan-06-2024</p>
                </div>
            </div>
            <div className={futureTripCSS.FutureTripCards}>
                <div className={futureTripCSS.FutureTripCard}>
                    <div className={futureTripCSS.FutureTripCardImage}>
                        <img src={image2} alt="" />
                    </div>
                    <h3>Lorem ipsum dolor, </h3>
                    <p>jan-06-2024</p>
                </div>
            </div>
           
          
            <div className={futureTripCSS.FutureTripCards}>
                <div className={futureTripCSS.FutureTripCard}>
                    <div className={futureTripCSS.FutureTripCardImage}>
                        <img src={image3} alt="" />
                    </div>
                    <h3>Lorem ipsum dolor, </h3>
                    <p>jan-06-2024</p>
                </div>
            </div>
        </div>
    )
}
export default FutureTrip