import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
import { BiSolidStar } from "react-icons/bi";



function Section6() {
  return (
    <section className='blog_section'>
      <Container>
        <Row>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className="user_img">
                        <img src={User1} alt="user-1" className='img-fluid' />
                        </div>
                        <p>'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'</p>
                        <div className='item_rating mb-2'>
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        </div>
                        <h5>By Clara Newton</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className="user_img">
                        <img src={User2} alt="user-2" className='img-fluid' />
                        </div>
                        <p>'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'</p>
                        <div className='item_rating mb-2'>
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        </div>
                        <h5>By Clara Newton</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className="user_img">
                        <img src={User3} alt="user-3" className='img-fluid' />
                        </div>
                        <p>'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'</p>
                        <div className='item_rating mb-2'>
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        </div>
                        <h5>By Clara Newton</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className="user_img">
                        <img src={User4} alt="user-4" className='img-fluid'/>
                        </div>
                        <p>'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'</p>
                        <div className='item_rating mb-2'>
                        <BiSolidStar />
                        <BiSolidStar />
                        </div>
                        <h5>By Clara Newton</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;