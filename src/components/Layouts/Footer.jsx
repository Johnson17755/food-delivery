import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillFacebook} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";




function Footer() {
  // Scroll State 
  // const[isVisible, setIsVisible] = useState(false)
  
  // document.addEventListener('DOMContentLoaded', function() {
  //   const scrollTop = () => {
  //     window.scrollTop({
  //       top: 0,
  //       behavior: "smooth", 
  //     });
  //   };
  // });

  // const listenToScroll = () => {
  //   let heightToHidden =250;
  //   const windowScroll = document.body.scrollTop || DocumentType.documentElement.scrollTop;

  //   windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScroll);
  // });

  const [isVisible, setIsVisible] = useState(false);

  // Define the scrollTop function at the module level
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Rest of your code
  // ...

  // useEffect for the scroll event listener with cleanup
  useEffect(() => {
    const listenToScroll = () => {
      let heightToHidden = 250;
      const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

      windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", listenToScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Location</h5>
              <p>005, B Street Peace Estate, Baruwa ipaja, Lagos</p>
              <p>Nigeria</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Working Hour</h5>
              <p>Mon-Fri: 8:30AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Order Now</h5>
              <p>Quarat neutr purus ipsum</p>
              <p> <Link to="tel:07000000000" className="calling">07000000000</Link></p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Follow Us</h5>
              <p>Quarat neutr purus ipsum</p>
              <ul className='list-unstyled text-center mt-2 d-flex justify-content-center gap-4'>
                <li>
                  <Link to="/">
                    <AiFillFacebook />
                  </Link>
                </li>
                 <li>
                  <Link to="/">
                    <RiTwitterXFill />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsInstagram  />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copy_write'>
          <div>
            <ul className="list-unstyled text-center mb-0">
              <li>
                <Link to="/">
                  &#xA9; 2023 <span>Jay</span>. All Rights Reserved
                </Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </footer>

    {/* Scroll to top */}
    {isVisible && (
      <div className='scroll_top' onClick={scrollTop}>
      <HiOutlineArrowNarrowUp className='i' />
    </div>
    )};
    
    </>
  );
};

export default Footer;