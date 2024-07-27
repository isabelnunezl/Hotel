import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="container grid top">
        <div className="box">
          <h3>Recent News</h3>
          <ul>
            <li>Our Secret Island Boat Tour Is Just for You</li>
            <li>Chill and Escape in Our Natural Shelters</li>
            <li>September in Trai Hotel</li>
            <li>Live Music Concerts at Trai</li>
          </ul>
        </div>
        <div className="box">
          <h3>For Customers</h3>
          <ul>
            <li>About Trai</li>
            <li>Customer Care/Help</li>
            <li>Corporate Accounts</li>
            <li>Financial Information</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box">
          <h3>Contact Us</h3>
          <ul>
            <li>3015 Grand Ave, Cocount Grove, Merrick Way FL 123456</li>
            <li><i className="far fa-envelope"></i>marisabelnunezl@gmail.com</li>
            <li><i className="far fa-phone-alt"></i>+593 981090048</li>
            <li><i className="far fa-comments"></i>24/ 7 Customer Services</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
