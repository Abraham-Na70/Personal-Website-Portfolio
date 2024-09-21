// Import necessary hooks and components from React and react-bootstrap
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// Import images and icons used in the Navbar
import logo2 from '../assets/img/logo2.png';
import navIcon5 from '../assets/img/nav-icon5.png';
import navIcon6 from '../assets/img/nav-icon6.png';
import navIcon7 from '../assets/img/nav-icon7.png';

// Import HashLink for smooth scrolling to anchors within the page
import { HashLink } from 'react-router-hash-link';

// Import BrowserRouter as Router from react-router-dom for routing
import {
  BrowserRouter as Router
} from "react-router-dom";

// Define the NavBar component
export const NavBar = () => {

  // Define state variables for active link and scroll state
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to handle the scroll event
  useEffect(() => {
    // Define the onScroll function
    const onScroll = () => {
      // Check if the window has been scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true); // Set scrolled state to true
      } else {
        setScrolled(false); // Set scrolled state to false
      }
    }

    // Add event listener for scroll event
    window.addEventListener("scroll", onScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Function to update the active link state
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // Return the JSX for the Navbar component
  return (
    // Use Router to enable routing within the application
    <Router>
      {/* Navbar component with dynamic class based on scrolled state */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Navbar Brand with logo */}
          <Navbar.Brand href="/">
            <img src={logo2} alt="Logo2" />
          </Navbar.Brand>
          {/* Navbar Toggle for responsive design */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          {/* Navbar Collapse to wrap the navigation links and social icons */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links with dynamic active class */}
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            {/* Navbar text section for social icons and connect button */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abrahamnapi5@gmail.com" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="Gmail" /></a>
                <a href="https://www.linkedin.com/in/abraham-napitupulu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={navIcon6} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/cheznudz?igsh=MTI5MzN2cWptdG9rZQ==" target="_blank" rel="noopener noreferrer"><img src={navIcon7} alt="instagram" /></a>
              </div>
              {/* HashLink for smooth scrolling to connect section */}
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
