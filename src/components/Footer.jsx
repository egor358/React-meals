import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="foot">
      <div className="about-us">
        <h1>About us</h1>
        <h3>
          We have been in the culinary market for ten years.
          <br />
          Our partners cover more than 30 countries. <br />
          Exquisite Italian cuisine that bestows the food of the gods.
        </h3>
         </div>
        <div className="company">
          <h1>Company</h1>
          <h3>Turin-based company Juventus Time</h3>
        </div>
        <div className="contact">
        <h1>Contact</h1>
        <h3>0800999779<br/>
        telegram:@Juve<br/>
        instagram:juventino
        </h3>
     </div>
      <div className="icon">
          <span className="material-icons">phone</span>
          <i className="material-icons">photo_camera</i>
          <span className="material-icons">send</span>
          </div>
    </footer>
  );
}

export default Footer;
