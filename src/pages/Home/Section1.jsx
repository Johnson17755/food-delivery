import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Burger from '../../assets/hero/hero-2.png';
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <section className='hero_section'>
        <Container>
         <Row>
            <Col lg={7} className='mb-5 mb-lg-0'>
                <div className="postion:relative">
                  <img src={Burger} alt="Hero" className='img-fluid'/>
                  <div className="price_badge">
                    <div className="badge_text">
                        <h4 className='h4_xs'>Only</h4>
                        <h4 className='h3_lg'>$2.35</h4>
                    </div>
                  </div>
                </div>
            </Col>
            <Col lg={5}>
                <div className="hero_text text-center">
                    <h1 className="text-white">New Burger</h1>
                    <h2 className="text-white">With Onions</h2>
                    <p className="text-white pt-2 pb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                </div>
                <Link to='/' className='btn order_now'>
                    Order Now
                </Link>
            </Col>
         </Row>
        </Container>
    </section>
  )
}

export default Section1