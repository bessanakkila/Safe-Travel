import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-luxury">
      <div className="footer-top-accent"></div>

      <Container>
        <Row className="py-5 gy-4">

          {/* Brand */}
          <Col lg={4} md={12}>
            <h5 className="footer-brand">
              Safe<span>Travel</span>
            </h5>
            <p className="footer-description">
              A specialized platform providing secure, discreet, and managed travel support.
              We bridge distances with dignity and ensure every journey is backed by
              unwavering reliability.
            </p>
          </Col>

          {/* Navigation */}
          <Col lg={2} md={4} sm={6} className="offset-lg-1">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/Survey">Registration</a></li>
              <li><a href="/Payment">Payment</a></li>
              <li><a href="/Faqs">Faqs</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col lg={2} md={4} sm={6}>
            <h5 className="footer-heading">Support</h5>
            <ul className="footer-links-list">
              <li><a href="#faq">FAQs Center</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#contact">Emergency Help</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={4}>
            <h5 className="footer-heading">24/7 Support</h5>
            <p className="footer-description small">
              Our specialists are ready to guide you through every step of your journey.
            </p>

            <div className="footer-btn-wrapper mt-3">
              <a href="/Contact" className="footer-action-btn">
                Contact Specialist
              </a>
            </div>
          </Col>

        </Row>

        <div className="footer-divider"></div>

        <Row className="py-4 align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="copyright-text">
              © {new Date().getFullYear()} <span>Safe Travel</span>. Crafted for Security.
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <div className="payment-badges">
              <span className="badge-text">Secure Payments via</span>
              <div className="badge-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
