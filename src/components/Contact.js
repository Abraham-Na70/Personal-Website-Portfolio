// Import necessary hooks and components from React and react-bootstrap
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import image and animation library
import BannerIMG2 from "../assets/img/BannerIMG2.jpg";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define the Contact component
export const Contact = () => {
  // Initialize the form fields with empty strings
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  // useState hook to manage form details state
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  // useState hook to manage the button text state
  const [buttonText, setButtonText] = useState('Send');

  // useState hook to manage the status message state
  const [status, setStatus] = useState({});

  // Function to update the form details state based on user input
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setButtonText("Sending..."); // Update button text to indicate sending
    let response = await fetch("http://localhost:5000/contact", { // Make a POST request to the backend server
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails), // Send form details in the request body
    });
    setButtonText("Send"); // Reset button text after sending
    let result = await response.json(); // Parse the JSON response
    setFormDetails(formInitialDetails); // Reset the form fields
    // Update status based on the response code
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  // Return the JSX for the Contact component
  return (
    // Contact section with a unique id
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Image with animation based on visibility
                <img className={isVisible ? "animate__animated animate__bounceInDown" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Contact form with animation based on visibility
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get To Know</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      // Display status message if available
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
