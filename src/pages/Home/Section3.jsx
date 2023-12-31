import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/menu/burger-11.jpg';
import Image2 from '../../assets/menu/burger-12.jpg';
import Image3 from '../../assets/menu/burger-13.jpg';
import Image4 from '../../assets/menu/burger-14.jpg';
import Image5 from '../../assets/menu/burger-15.jpg';
import Image6 from '../../assets/menu/burger-16.jpg';
import Image7 from '../../assets/menu/burger-17.jpg';
import Image8 from '../../assets/menu/burger-18.jpg';
import Cards from '../../components/Layouts/Cards';
import { BsStarHalf } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";


// DATA CARD
const mockData = [
  {
    id: '0001',
    image: Image1,
    title: 'Crispy Chicken',
    paragraph: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    rating: 5,
    price: 199.15,
  },
  {
    id: '0002',
    image: Image2,
    title: 'Ultimate Bacon',
    paragraph: 'House Patty, Cheddar Cheese, Bacon, Onions, Mustard',
    rating: 4.5,
    price: 199.32,
  },
  {
    id: '0003',
    image: Image3,
    title: 'Black Sheep',
    paragraph: 'American Cheese, Tomatoes Relish, Avocado, Lettuce,Onions',
    rating: 4,
    price: 169.15,
  },
  {
    id: '0004',
    image: Image4,
    title: 'Vegan Burger',
    paragraph: 'House Patty, Cheddar Cheese, Bacon, Onions, Mustard',
    rating: 3.5,
    price: 199.15,
  },
  {
    id: '0005',
    image: Image5,
    title: 'Double Burger',
    paragraph: '2 petties, Cheeddar Cheese, Mustard, Pickles, Tomatoes',
    rating: 3.0,
    price: 159.25,
  },
  {
    id: '0006',
    image: Image6,
    title: 'Turkey Burger',
    paragraph: 'Turkey, Chedder Cheese, Onion, Lettuce, Tomatoes, Pickles',
    rating: 2.5,
    price: 199.19,
  },
  {
    id: '0007',
    image: Image7,
    title: 'Smokey House',
    paragraph: 'Patty, Chedder Cheese, Onion, Lettuce, Tomatoes, Pickles',
    rating: 2.5,
    price: 199.19,
  },
  {
    id: '0008',
    image: Image8,
    title: 'Classic Burger',
    paragraph: 'Ketchup, Chedder Cheese, Onion, Mustard, Pickles',
    rating: 2.0,
    price: 189.19,
  },
   //add more data objects as needed
];

const renderRatingIcons = (rating) =>{
  const stars=[];
  for(let i = 0; i < 5; i++){
    if(rating > 0.5){
      stars.push(<BiSolidStar key={i} className='i' />)
      rating--;
    }else if(rating > 0 && rating < 1){
      stars.push(<BsStarHalf key={"half"} className='i' />)
      rating--;
    }else{
      stars.push(<AiOutlineStar key={`empty${i}`} className='i' />)
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className='menu_section'>
      <Container>
        <Row>
          <Col lg={{span: 8, offset:2 }} className='text-center mb-5'>
            <h2>OUR MEGA BURGERS</h2>
            <p className='paragraph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </Col>
        </Row>
        <Row>{mockData.map((cardData, index) =>(
          <Cards 
          key={index}
          image={cardData.image} 
          rating={cardData.rating}
          title={cardData.title}
          paragraph={cardData.paragraph}
          price={cardData.price}
          renderRatingIcons={renderRatingIcons}
          />
        ))}
        </Row>

        <Row className='pt-5'>
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to='/' className='btn btn_red px-4 rounded-0'>
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to='/' className='btn btn_red px-4 rounded-0'>
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Section3;