import React from "react";
import { Container, Row, Col, Card, Button, Ratio } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-luxury-section">
      <div className="bg-shimmer"></div>

      <Container>
        <Row className="align-items-center g-5">

          {/* Content */}
          <Col lg={6}>
            <div>
              <div className="about-badge">
                <span className="badge-dot"></span>
                Safe Travel Legacy
              </div>

              <h1 className="about-heading">
                Redefining Safety
                <span className="accent-text">
                  Where Boundaries End, Our Care Begins
                </span>
              </h1>

              <p className="about-description">
                <strong>Safe Travel</strong> isn't just a logistics firm; we are a
                lifeline. With decades of field experience, we bridge the gap
                between high-risk zones and global security for those who need it
                most.
              </p>

              <p className="about-description">
                Our approach is built on <strong>discretion, precision, and human dignity</strong>.
                Every journey is a unique mission tailored to ensure your absolute peace of mind.
              </p>

              <Card className="about-quote-card">
                <Card.Body>
                  <div className="quote-icon">“</div>
                  <p>
                    Through Safe Travel, many individuals have moved from high-risk
                    zones to safety. This story reflects hope powered by expertise.
                  </p>
                </Card.Body>
              </Card>

              <div className="btn-group-custom">
                <Button className="about-btn-primary">Explore Our Mission</Button>
                <Button className="about-btn-outline">View Reports</Button>
              </div>
            </div>
          </Col>

          {/* Video */}
          <Col lg={6}>
            <div>
              <div className="video-frame-container">
                <Card className="about-video-card">
                  <Ratio aspectRatio="16x9">
                    <video controls>
                      <source src="/videos/safe-travel-story.mp4" type="video/mp4" />
                      Your browser does not support video.
                    </video>
                  </Ratio>
                </Card>
                <div className="video-decoration-box"></div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
