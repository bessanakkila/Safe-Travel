import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, ProgressBar, Card, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faPlane, faFileAlt, faCrown, faCheckCircle, 
  faHotel,  faLightbulb 
} from '@fortawesome/free-solid-svg-icons';
import './Registration.css';

const steps = [
  { label: 'Personal Info', icon: faUser },
  { label: 'Travel Info', icon: faPlane },
  { label: 'Family & Docs', icon: faFileAlt },
  { label: 'Select Package', icon: faCrown }
];

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', age: '', gender: '', email: '',
    travelers: 1, destination: '', stayDuration: '',
    personalPhoto: null, passport: null, idCard: null,
    familyMembers: [{ name: '', age: '', gender: '' }],
    travelPackage: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e, index, field) => {
    setError('');
    if (field === 'familyMembers') {
      const newMembers = [...formData.familyMembers];
      newMembers[index] = { ...newMembers[index], ...e };
      setFormData({ ...formData, familyMembers: newMembers });
    } else if (['passport', 'idCard', 'personalPhoto'].includes(field)) {
      setFormData({ ...formData, [field]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const validateStep = () => {
    if (currentStep === 0) return formData.name && formData.age && formData.gender && formData.email;
    if (currentStep === 1) return formData.destination && formData.stayDuration;
    if (currentStep === 2) return formData.personalPhoto && formData.passport && formData.idCard;
    if (currentStep === 3) return formData.travelPackage;
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      setError('');
    } else {
      setError('Please fill in all required fields to proceed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess('Registration submitted successfully! We will contact you soon.');
    } catch (err) {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='Survey-section'>
      <Container>
        <div className="survey-header text-center mb-5">
          <h2 className='Survey-h2'>Travel Registration</h2>
          <p className="survey-subtitle">Plan your dream journey with our premium packages</p>
        </div>

        <div className="progress-stepper mx-auto">
          <div className="steps-indicators">
            {steps.map((step, index) => (
              <div key={index} className={`step-dot ${index <= currentStep ? 'active' : ''}`}>
                <div className="dot-number">
                  <FontAwesomeIcon icon={index < currentStep ? faCheckCircle : step.icon} />
                </div>
                <div className="dot-label d-none d-md-block">{step.label}</div>
              </div>
            ))}
          </div>
          <ProgressBar now={((currentStep + 1) / steps.length) * 100} className="custom-progress" />
        </div>

        <Card className='survey-card shadow-sm mx-auto'>
          <Card.Body className="p-4 p-md-5">
            <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              {currentStep === 0 && (
                <div className="animate-fade-in">
                  <h4 className="step-inner-title">Personal Information</h4>
                  <Form.Group className="mb-4">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => handleChange(e, null, 'name')} value={formData.name} />
                  </Form.Group>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="number" placeholder="Enter your age" onChange={(e) => handleChange(e, null, 'age')} value={formData.age} />
                    </Col>
                    <Col md={6} className="mb-4">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select onChange={(e) => handleChange(e, null, 'gender')} value={formData.gender}>
                        <option value="">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@mail.com" onChange={(e) => handleChange(e, null, 'email')} value={formData.email} />
                  </Form.Group>
                </div>
              )}

              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <h4 className="step-inner-title">Travel Details</h4>
                  <Form.Group className="mb-4">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="e.g.,Egypt, Paris, France" onChange={(e) => handleChange(e, null, 'destination')} value={formData.destination} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Stay Duration (Days)</Form.Label>
                    <Form.Control type="number" placeholder="10" onChange={(e) => handleChange(e, null, 'stayDuration')} value={formData.stayDuration} />
                  </Form.Group>
                </div>
              )}

              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <h4 className="step-inner-title">Documents & Family</h4>
                  <Row className="mb-4">
                    <Col md={4}><Form.Label>Photo</Form.Label><Form.Control type="file" onChange={(e) => handleChange(e, null, 'personalPhoto')} /></Col>
                    <Col md={4}><Form.Label>Passport</Form.Label><Form.Control type="file" onChange={(e) => handleChange(e, null, 'passport')} /></Col>
                    <Col md={4}><Form.Label>ID Card</Form.Label><Form.Control type="file" onChange={(e) => handleChange(e, null, 'idCard')} /></Col>
                  </Row>
                  <h5 className="mb-3 font-weight-bold">Family Members</h5>
                  {formData.familyMembers.map((m, i) => (
                    <div key={i} className="family-member-row p-3 mb-2">
                      <Row className="g-2">
                        <Col md={6}><Form.Control placeholder="Full Name" onChange={(e) => handleChange({name: e.target.value}, i, 'familyMembers')} /></Col>
                        <Col md={3}><Form.Control type="number" placeholder="Age" onChange={(e) => handleChange({age: e.target.value}, i, 'familyMembers')} /></Col>
                        <Col md={3}>
                          <Form.Select onChange={(e) => handleChange({gender: e.target.value}, i, 'familyMembers')}>
                            <option value="">Gender</option><option value="Male">M</option><option value="Female">F</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <Button variant="link" className="add-member-link" onClick={() => setFormData({...formData, familyMembers: [...formData.familyMembers, {name:'', age:'', gender:''}]})}>+ Add Member</Button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <h4 className="step-inner-title">Select Your Package</h4>
                  <div className="premium-packages-container">
                    {[
                      { id: 'Economic', name: 'Economic', price: '$1000', color: '#10b981', desc: 'Ideal for organized budget travel.', features: ['Economy Flight', '3★ Hotel', 'Travel Guide'] },
                      { id: 'Comfortable', name: 'Comfortable', price: '$2000', color: '#3b82f6', desc: 'Our most popular choice for hassle-free trips.', features: ['Regular Flight', '4★ Hotel', 'Visa Support'] },
                      { id: 'VIP', name: 'VIP Luxury', price: '$4000+', color: '#FFB84D', desc: 'Ultimate luxury experience with private support.', features: ['Business Class', '5★ Hotel', 'Private Assistant'] }
                    ].map((pkg) => (
                      <div key={pkg.id} className={`tier-card ${formData.travelPackage === pkg.id ? 'selected' : ''}`} onClick={() => setFormData({...formData, travelPackage: pkg.id})}>
                        <div className="tier-icon" style={{color: pkg.color}}><FontAwesomeIcon icon={pkg.id === 'VIP' ? faCrown : (pkg.id === 'Economic' ? faPlane : faHotel)} /></div>
                        <div className="tier-name">{pkg.name}</div>
                        <div className="tier-price">{pkg.price}</div>
                        <p className="small text-muted">{pkg.desc}</p>
                        <ul className="list-unstyled text-start small mt-3">
                          {pkg.features.map((f, idx) => <li key={idx}><FontAwesomeIcon icon={faCheckCircle} className="me-2 text-success" /> {f}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="info-alert mt-4 d-flex align-items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="me-3 fa-2x text-warning" />
                    <div>
                      <strong>Group & Family Note:</strong>
                      <p className="mb-0 small">Special discounts are available for families and large groups. Contact us for a custom quote.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="d-flex justify-content-between mt-5">
                <Button className='btn-back-custom' onClick={() => setCurrentStep(s => s - 1)} disabled={currentStep === 0 || loading}>Back</Button>
                {currentStep < 3 ? 
                  <Button className='btn-next-custom' onClick={nextStep}>Next Step</Button> :
                  <Button className='btn-next-custom' type="submit" disabled={loading}>{loading ? <Spinner size="sm" /> : 'Confirm Booking'}</Button>
                }
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Registration;