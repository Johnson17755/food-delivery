import React, {useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../styles/Header.css';
import { Link } from 'react-router-dom';
import logo from'../../assets/logo/logo.png';
import { BsFillBagFill } from "react-icons/bs";

function Header() {
  const [ nav, setNav ] = useState(false);

  const changeValueOnScroll = () =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  window.addEventListener('scroll', changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/' className='logo'>
             <img src={logo} alt="Logo" className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/menu'>Our Menu</Nav.Link>
              <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              <Nav.Link as={Link} to='/'>
                <div className="cart">
                  <Link><BsFillBagFill className='fs-5'/></Link>
                  <em className='roundpoint'>8</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;