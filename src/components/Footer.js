// Footer.js
import React from "react";
import "../Footer.css"; // Optional: for custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About</h3>
          <p>
            Online Mark Entry Portal helps teachers and staff manage student marks, evaluations, and reports efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/student/register">Student Register</a></li>
            <li><a href="/staff/register">Staff Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@markportal.com</p>
          <p>Phone: +91-1234567890</p>
          <p>Address: 123, Education Street, City, State, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Online Mark Entry Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


