import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaCreditCard, FaLock, FaCheckCircle } from 'react-icons/fa';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-page-wrapper">
      <Container>

        {/* Header */}
        <div className="payment-header text-center mb-5">
          <div className="security-badge mb-3">
            <FaLock className="me-2" /> Secure Card Payment
          </div>
          <h2 className="payment-title">Pay with Credit Card</h2>
          <p className="payment-subtitle">
            Use your Visa or MasterCard to complete the payment securely
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="payment-main-card border-0 shadow-lg">
              <Row className="g-0">

                {/* Left Side */}
                <Col md={4} className="methods-sidebar p-4 text-center">
                  <h6 className="sidebar-label">Payment Method</h6>

                  <div className="method-item active mt-4 justify-content-center">
                    <div className="method-icon-box">
                      <FaCreditCard />
                    </div>
                    <div className="method-info text-start ms-3">
                      <h6>Credit / Debit Card</h6>
                      <small>Visa • MasterCard</small>
                    </div>
                  </div>
                </Col>

                {/* Right Side */}
                <Col md={8} className="payment-details-area p-5">
                  <h4 className="method-main-title">
                    Card Details
                  </h4>

                  <p className="method-desc">
                    Enter your card information below. Your payment is encrypted
                    and processed securely.
                  </p>

                  <div className="benefit-grid mt-4">
                    <div className="benefit-tag">
                      <FaCheckCircle /> Secure Encryption
                    </div>
                    <div className="benefit-tag">
                      <FaCheckCircle /> Instant Payment
                    </div>
                    <div className="benefit-tag">
                      <FaCheckCircle /> Accepted Worldwide
                    </div>
                  </div>

                  {/* Card Form */}
                  <Form className="mt-5">
                    <Form.Group className="mb-3">
                      <Form.Label>Cardholder Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name on card"
                        className="payment-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="payment-input"
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="MM / YY"
                            className="payment-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="***"
                            className="payment-input"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button className="pay-now-btn w-100 py-3 mt-3">
                      Pay Now
                    </Button>
                  </Form>

                </Col>

              </Row>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Payment;
