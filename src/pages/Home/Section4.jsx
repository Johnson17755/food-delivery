import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PromtionImage from "../../assets/promotion/pro.png"

function Section4() {
  return (
    <>
      <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
               <Col lg={6} className='text-center mb-5 mb-lg-0'>
                   <img src={PromtionImage} className='img-fluid' alt="promotion" />
               </Col>
               <Col lg={6} className='px-5'>
                <h2>Nothing brings people together than a good burger</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
               <ul>
                <li>
                   <p>occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p> 
                </li>
                <li>
                    <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </li>
                <li>
                    <p>Nemo ipsem egestat volute tureps doloutrs ut alidnts querwn sodelerty sapieum undo pretium a purus maurist</p>
                </li>
               </ul>
              </Col>
            </Row>
        </Container>
      </section>

      {/* BG parallax scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  )
}

export default Section4;