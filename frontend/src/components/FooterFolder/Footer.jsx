import React from "react";
import "./Footer.css";
// import { p, useNavigate } from "react-router-dom";
const Footer = () => {
  // const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footerdetail">
        <div className="footertitle">
          <h2>Product Categories</h2>

          <h4>
            <p className="linkfooter" to="/moto">
              Smartphones
            </p>
          </h4>
          <h4>Laptops</h4>
          <h4>DSLR Camers</h4>
          <h4>
            <p className="linkfooter" to="inchtv">
              Televisions
            </p>
          </h4>
          <h4>Air Conditioners</h4>
          <h4>Refrigerators</h4>
          <h4>
            <p className="linkfooter" to="/robotic">
              Kitchen Appliances
            </p>
          </h4>
          <h4>Accessories</h4>
          <h4>Personal Care & Grooming</h4>
          <h2>FOLLOW US</h2>
          <div className="iconfooter">
            <i onClick={() => (
              window.location.href = "https://www.facebook.com/reliancedigital/"
            )} class="fa-brands fa-facebook-square"></i>
            <i onClick={() => (
              window.location.href="https://twitter.com/reliancedigital"
            )} class="fa-brands fa-twitter-square"></i>
            <i onClick={() => (
              window.location.href="https://www.youtube.com/reliancedigital"
            )} class="fa-brands fa-youtube"></i>
          </div>
        </div>
        {/* 2nd */}
        <div className="footertitle">
          <h2>SITE INFO</h2>

          <h4 className="linkfooter">About Reliance Digital</h4>
          <h4>resQ Services</h4>
          <h4>Site Map</h4>
          <h4 className="linkfooter">Gift Cards</h4>
          <h4>Corporate Enquires</h4>
          <h4>Contact Us</h4>

          <h2>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h2>
          <div className="iconfooter">
            <img
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=in.digital.reliance")
              }
              className="applink"
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt=""
            />

            <img
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/in/app/reliance-digital-shopping-app/id1513379107")
              }
              className="applink"
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt="img"
            />
          </div>
        </div>
        {/* 3rd */}
        <div className="footertitle">
          <h2>RESOURCE CENTRE</h2>
          <h4 className="linkfooter">Product Reviews</h4>{" "}
          <h4 className="linkfooter">Buying Guides</h4>
          <h4>How Tos</h4>
          <h4>Featured Stories</h4>
          <h4>Events & Happenings</h4>
        </div>
        {/* 4th */}
        <div className="footertitle">
          <h2>POLICIES</h2>

          <h4 className="linkfooter">Terms of Use</h4>
          <h4>FAQs</h4>
          <h4>Cancellation and Return Policy</h4>
          <h4 className="linkfooter">Privacy Policy</h4>
          <h4>Shipping and Delivery Policy</h4>
          <h4>E-waste Policy</h4>
          <h4 className="linkfooter">EMI Terms & Conditions</h4>
          <h4>Pricing and Payments Policy</h4>
          <h4>RelianceOne Loyalty T & C</h4>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
