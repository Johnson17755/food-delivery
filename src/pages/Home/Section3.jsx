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
    paragraph: 'American Cheese, Tomatoes Relish, Avocado, Lettuce, Red Onions',
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

function Section3() {
  return (
    <section className='menu_section'>
      <Container>
        <Row>
          <Col lg={{span:8, offset:2}}>
            <h2>OUR MEGA BURGERS</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </Col>
        </Row>
        <Row>{mockData.map((cardData, index) =>(
            
        ))}</Row>
      </Container>
    </section>
  )
}

export default Section3