import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo2 from "../assets/img/logo2.png";
import navIcon5 from "../assets/img/nav-icon5.png";
import navIcon6 from "../assets/img/nav-icon6.png";
import navIcon7 from "../assets/img/nav-icon7.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo2} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abrahamnapi5@gmail.com" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="Gmail" /></a>
                <a href="https://www.linkedin.com/in/abraham-napitupulu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={navIcon6} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/cheznudz?igsh=MTI5MzN2cWptdG9rZQ==" target="_blank" rel="noopener noreferrer"><img src={navIcon7} alt="instagram" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}