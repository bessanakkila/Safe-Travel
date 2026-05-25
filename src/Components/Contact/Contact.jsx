import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaTelegramPlane, FaPaperPlane, FaClock, FaShieldAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message encryption completed. Redirecting to support...");
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Container>
        <Row className="contact-wrapper g-0">

          {/* Left Side */}
          <Col lg={7} className="d-flex flex-column justify-content-center">
            <div className="contact-form-container">
              <div className="status-tag mb-3">
                <span className="dot pulse"></span> Online Coordination
              </div>

              <h2 className="contact-title">Direct Inquiry</h2>
              <p className="contact-subtitle">
                Fill out the form below for travel assistance. Our specialists monitor this channel 24/7.
              </p>

              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group className="mb-3">
                  <Form.Label className="form-custom-label">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="custom-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="form-custom-label">Inquiry Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="How can we assist you today?"
                    value={formData.message}
                    onChange={handleChange}
                    className="custom-input no-resize"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="contact-submit-btn w-100 py-3">
                  <FaPaperPlane className="me-2" /> Dispatch Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Side */}
          <Col lg={5}>
            <div className="contact-info-sidebar h-100">
              <div className="sidebar-overlay"></div>

              <div className="info-content-wrapper">
                <div className="telegram-icon-circle">
                  <FaTelegramPlane size={42} />
                </div>

                <h3 className="fw-bold">Fast-Track Support</h3>
                <p className="px-lg-4 text-light-50">
                  For instant verification and secure file transfers, we recommend our official Telegram channel.
                </p>

                <div className="trust-pills my-4">
                  <div className="trust-pill"><FaShieldAlt /> Secured</div>
                  <div className="trust-pill"><FaClock /> 24h</div>
                </div>

                <a
                  href="https://t.me/YourUsername"
                  target="_blank"
                  rel="noreferrer"
                  className="telegram-action-btn"
                >
                  Open Telegram Chat
                </a>

                <div className="support-meta mt-5">
                  <small>
                    Average response time: <strong>~15 mins</strong>
                  </small>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Contact;
