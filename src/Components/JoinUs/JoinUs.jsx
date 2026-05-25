import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./JoinUs.css";
import register from "../../assets/img/register (1).png";

const JoinUs = () => {
  return (
    <section className="two-column-cta-wrapper">
      <Container className="cta-inner-card shadow-sm">
        <Row className="align-items-center">

          <Col lg={7} md={12} className="text-col p-lg-5">
            <h2 className="cta-title">Start Your Safe Journey Today</h2>
            <p className="cta-text">
              Join thousands of travelers who trust us for safe, simple, and
              transparent travel services. Click below to register and begin
              your journey with ease.
            </p>
            <div className="btn-holder">
              <Button as={Link} to="/Survey" className="cta-primary-btn">
                Register Now
              </Button>
            </div>
          </Col>

          <Col lg={5} md={12} className="image-col">
            <div className="cta-image-wrapper">
              <img
                src={register}
                alt="Safe Journey Checklist"
                className="cta-image-fluid"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;
