// Import images for skills section
import skillwebdev from "../assets/img/skill-webdev.png";
import skillbrand from "../assets/img/skill-brand.png";
import skilllogo from "../assets/img/skill-logo.png";
import skillengineering from "../assets/img/skill-engineering.png";

// Import Carousel component and its styles
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

// Import arrow images for carousel navigation
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.png";

// Import background images for section
import colorsharp from "../assets/img/colorsharp.png";
import colosharp2 from "../assets/img/colorsharp2.png";

// Define and export Skills component
export const Skills = () => {
  // Define responsive breakpoints for the carousel
  const responsive = {
    superLargeDesktop: {
      // Screen width between 3000px and 4000px
      breakpoint: { max: 4000, min: 3000 },
      items: 5 // Number of items to show
    },
    desktop: {
      // Screen width between 1024px and 3000px
      breakpoint: { max: 3000, min: 1024 },
      items: 3 // Number of items to show
    },
    tablet: {
      // Screen width between 464px and 1024px
      breakpoint: { max: 1024, min: 464 },
      items: 2 // Number of items to show
    },
    mobile: {
      // Screen width below 464px
      breakpoint: { max: 464, min: 0 },
      items: 1 // Number of items to show
    }
  };

  // Render Skills section
  return (
    <section className="skill" id="skills">
        {/* Container for section content */}
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* Skill box with animation effect */}
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Some of my skills including Web Development, Brand Identity, Logo Design, Engineering</p>
                        {/* Carousel component with defined responsive settings */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* Carousel items */}
                            <div className="item">
                                <img src={skillwebdev} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={skillbrand} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={skilllogo} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={skillengineering} alt="Image" />
                                <h5>Engineering</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* Background images */}
        <img className="background-image-left" src={colorsharp} alt="Image" />
        <img className="background-image-right" src={colosharp2} alt="Image" />
    </section>
  )
}
