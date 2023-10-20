import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Section7() {
  return (
    <section className='contact_section'>
      <Container>
        <Row className='justify-content-center'>
           <Col sm={8} className='text-center'>
              <h4>We Guarantee</h4>
              <h2>An Hour Delivery</h2>
              <p>Aliqure a auger susciprit, lucture neque purus ipsum neque undo dolar primis liberto tempmo, blanduit a cursers varius luctus nequre</p>
              <Link to="/" className='btn btn_red py-2 rounded-2'>Call: 070 000 000 000</Link>
           </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Section7;