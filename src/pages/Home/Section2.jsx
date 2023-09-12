import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png';

 //Data Cards
 const mockData = [
    {
        Image: Pizza,
        title: 'Original',
        paragraph:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
        Image: Salad,
        title: 'Quality Foods',
        paragraph:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
        Image: Delivery,
        title: 'Fastest Delivery',
        paragraph:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
 ];

function Section2() {
  return (
   <>
     <section className='about_section'>
     <Container>
        <Row>
            <Col lg={{span:8, offset:2}} className='text-center'>
                <h2>The burger tastes better when you eat it with your family</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <Link to='/' className='btn order_now btn_red'>Explore Full Menu</Link>
            </Col>
        </Row>
     </Container>
    </section>

    <section className='about_wrapper'>
      <Container>
        <Row className='justify-content-md-center'>
          {mockData.map((cardData, index) => (
            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={cardData.Image} alt="icon" className='img-fluid' />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
   </>
  )
}

export default Section2;