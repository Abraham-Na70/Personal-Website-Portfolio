// Import necessary hooks from React and components from react-bootstrap
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

// Define and export Newsletter component
export const Newsletter = ({ status, message, onValidated }) => {
  // Define state variable for email input
  const [email, setEmail] = useState('');

  // Effect hook to clear email field if the status is 'success'
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]) // Dependency array to re-run the effect when 'status' changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Check if email is valid and call onValidated with the email
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  // Function to clear email input field
  const clearFields = () => {
    setEmail('');
  }

  // Render Newsletter component
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Interesting IT Newsletters<br></br> & Get to know the latest Updates</h3>
              {/* Conditional rendering of alert messages based on status */}
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              {/* Form for email input */}
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  {/* Email input field */}
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  {/* Submit button */}
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
