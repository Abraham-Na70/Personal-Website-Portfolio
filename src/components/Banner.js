// Import necessary hooks and components from React and react-bootstrap
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import image and icon
import computerframework from "../assets/img/computerframework.png";
import { ArrowDownRightSquare } from 'react-bootstrap-icons';

// Import animation library
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define the Banner component
export const Banner = () => {
  // useState hook to manage the current loop number
  const [loopNum, setLoopNum] = useState(0);

  // useState hook to manage the deleting state
  const [isDeleting, setIsDeleting] = useState(false);

  // useState hook to manage the current text being displayed
  const [text, setText] = useState('');

  // useState hook to manage the typing speed
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // useState hook to manage the current character index
  const [index, setIndex] = useState(1);

  // Array of strings to rotate through
  const toRotate = [ "Computer Engineer", "Web Developer", "UI/UX Designer", "Game Developer" ];

  // Period for the full text display before deletion
  const period = 2000;

  // useEffect hook to manage the typing effect
  useEffect(() => {
    // Set an interval to call the tick function based on the current delta
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Cleanup the interval on component unmount
    return () => { clearInterval(ticker) };
  }, [text])

  // Function to update the text being typed/deleted
  const tick = () => {
    // Calculate the current index in the toRotate array
    let i = loopNum % toRotate.length;

    // Get the full text for the current rotation
    let fullText = toRotate[i];

    // Update the text being displayed based on whether we are deleting or typing
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    // Update the state with the new text
    setText(updatedText);

    // Adjust the typing speed if deleting
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    // If the text is fully typed out, start deleting after a pause
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } 
    // If the text is fully deleted, move to the next text in the array
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } 
    // Continue typing/deleting
    else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // Return the JSX for the Banner component
  return (
    // Banner section with a unique id
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              // Container div with animation based on visibility
              <div className={isVisible ? "animate__animated animate__fadeInLeftBig" : ""}>
                <span className="tagline">Welcome to my Personal Portfolio</span>
                <h1>{`Hello my name is Abraham, `} 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Computer Engineer", "Web Developer", "UI/UX Designer", "Game Developer" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>I'm an Engineering Student at ITS that pursue the field of Computer Engineering</p>
                <button onClick={() => console.log('connect')}>Let’s Stay Connected <ArrowDownRightSquare size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Image container with animation based on visibility
                <div className={isVisible ? "animate__animated animate__jackInTheBox" : ""}>
                  <img src={computerframework} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
