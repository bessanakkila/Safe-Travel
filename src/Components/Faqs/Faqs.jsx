import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { FaQuestionCircle, FaShieldAlt, FaPlaneDeparture, FaUserCheck, FaWallet, FaEdit } from "react-icons/fa";
import "./Faqs.css";

const Faqs = () => {
  return (
    <section className="faq-wrapper">
      <Container>
        {/* Header */}
        <div className="faq-header text-center mb-5">
          <h2 className="faq-main-title">Common Questions</h2>
          <p className="faq-subtitle">Find answers to the most frequent inquiries about your journey</p>
          <div className="title-underline"></div>
        </div>

        <Row className="gy-4">
          {/* Column 1 */}
          <Col lg={6}>
            <Accordion defaultActiveKey="0" flush className="custom-faq-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaPlaneDeparture className="faq-icon-lead" />
                  What services does Safe Travel provide?
                </Accordion.Header>
                <Accordion.Body>
                  Safe Travel provides organized travel services from Gaza, including 
                  registration, document follow-up, and full coordination with relevant 
                  authorities to ensure a secure transit experience.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <FaUserCheck className="faq-icon-lead" />
                  How can I start my application?
                </Accordion.Header>
                <Accordion.Body>
                  Simply navigate to our "Registration" section, fill in the multi-step 
                  form with your legal details, and our coordination team will reach 
                  out within 24-48 hours.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <FaQuestionCircle className="faq-icon-lead" />
                  Is help available for families?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely. We specialize in group and family travel logistics, 
                  ensuring all members are documented and coordinated simultaneously 
                  for a unified journey.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {/* Column 2 */}
          <Col lg={6}>
            <Accordion flush className="custom-faq-accordion">
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <FaEdit className="faq-icon-lead" />
                  Can I update my info after submission?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can request an edit through our support center as long as 
                  the application is in the "Pending" status. Once finalized with 
                  authorities, changes may be limited.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <FaShieldAlt className="faq-icon-lead" />
                  Is my personal data safe?
                </Accordion.Header>
                <Accordion.Body>
                  We employ enterprise-grade encryption. Your sensitive documents and 
                  identity information are stored in secure environments and only shared 
                  with official transit authorities.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <FaWallet className="faq-icon-lead" />
                  What are the payment options?
                </Accordion.Header>
                <Accordion.Body>
                  We offer multiple secure channels including online credit card 
                  processing, Telegram-guided transfers, and physical office payments 
                  for your convenience.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
