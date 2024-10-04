import React from "react";
import footerCSS from './../Footer/Footer.module.css'
import IMGmobile from  './../../assets/app-store-google-play-logo.png'

function Footer(){
    return(
        <footer className={`${footerCSS.footerWrapper} section`} id="contactus">
            <div className={footerCSS.banner}>
                <div className={footerCSS.content}>
                    <i className="ri-newspaper-line"></i>
                    <h3> Contact Us for Latest Updates <span>Your Travel Journey Starts Here</span></h3>
                </div>
<div className={footerCSS.form}>
    <input type="text" placeholder="Email" />
    <button>Subscribe</button>
</div>
            </div>
           <div className={footerCSS.FooterContainer}>
           <div className={footerCSS.footerLinks}>
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Gift</a>
                <a href="#">Press</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3> Otherr Services</h3>
                <a href="#">Tour list</a>
                <a href="#">Activity Finder</a>
                <a href="#">Flight Find</a>
                <a href="#">Cruise Ticket</a>
                <a href="#">Holiday Special</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Service</h3>
                <a href="#">Contact</a>
                <a href="#">Legal</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Condition</a>
                <a href="#">Site Map</a>
            </div>
         
           
            <div className={footerCSS.footerLinks}>
                <h3>Mobile</h3>
                <img src={IMGmobile} alt="" />
              
            </div>
           </div>
           
        </footer>
    )
}
export default Footer