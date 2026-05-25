import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/pay-img.png";
import img2 from "../../assets/img/q1.png";
import "./Features.css";

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="features-wrapper">
      <Container>
        <Row className="justify-content-center g-4">

          {/* FAQ Card */}
          <Col xs={12} md={6} lg={5}>
            <Card
              className="feature-card h-100"
              onClick={() => navigate("/faqs")}
            >
              <Card.Body className="feature-body">
                <div className="feature-img-container">
                  <img src={img2} alt="FAQs" className="feature-img" />
                </div>
                <h5 className="feature-title">Frequently Asked Questions</h5>
                <span className="feature-link">View FAQs →</span>
              </Card.Body>
            </Card>
          </Col>

          {/* Payment Card */}
          <Col xs={12} md={6} lg={5}>
            <Card
              className="feature-card h-100"
              onClick={() => navigate("/payment")}
            >
              <Card.Body className="feature-body">
                <div className="feature-img-container">
                  <img src={img1} alt="Payment" className="feature-img" />
                </div>
                <h5 className="feature-title">Multiple Payment Methods</h5>
                <span className="feature-link">Secure Checkout →</span>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
