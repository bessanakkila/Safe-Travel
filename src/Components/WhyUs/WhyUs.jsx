import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaTags,FaHeadset,FaGlobe,FaLock,FaClipboardCheck,FaBriefcase} from "react-icons/fa";
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    { id: '01', title: 'Best Prices', desc: 'Competitive prices with no hidden fees and complete transparency.', icon: <FaTags /> },
    { id: '02', title: '24/7 Support', desc: 'Our team is available around the clock to assist you anywhere.', icon: <FaHeadset /> },
    { id: '03', title: 'Global Reach', desc: 'Wide selection of flights and hotels worldwide to suit all budgets.', icon: <FaGlobe /> },
    { id: '04', title: 'Data Security', desc: 'Advanced encryption technologies to protect your information.', icon: <FaLock /> },
    { id: '05', title: 'Easy Booking', desc: 'Simple and fast steps designed for a hassle-free experience.', icon: <FaClipboardCheck /> },
    { id: '06', title: 'Full Services', desc: 'Visas, travel programs, and insurance all in one place.', icon: <FaBriefcase /> },
  ];

  return (
    <section className="why-us-wrapper">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="subtitle">OUR STRENGTHS</span>
          <h2 className="main-title-premium ">
            Why Choose <span className="highlight">Safe Travel</span>
          </h2>
          <div className="header-line"></div>
        </div>

        {/* Cards */}
        <Row className="g-5 mt-4">
          {features.map((item) => (
            <Col key={item.id} lg={4} md={6}>
              <div className="feature-card-premium">
                <div className="card-index">{item.id}</div>

                <div className="icon-wrapper-premium">
                  {item.icon}
                </div>

                <h4 className="feature-title">{item.title}</h4>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
