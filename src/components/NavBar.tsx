import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar sticky="top" className="bg-dark" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width={30} height={30}/>
          <span className="ms-2 text-light">Shop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)} className="text-light">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/store" onClick={() => setExpanded(false)} className="text-light">Store</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      {cartQuantity > 0 && (
        <Button
          onClick={openCart}
          variant="dark"
          className="rounded-circle d-flex align-items-center"
          style={{ width: "3rem", height: "3rem", position: "fixed", color: "white", bottom: "1rem", right: "1rem", zIndex: 1000 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="5 0 30 30" width="30"><path d="M1.39999 1.70001H6.60001" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M11.8 18.9H28.3" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{ color: "white", width: "1.4rem", height: "1.4rem", position: "absolute", bottom: "-0.5rem", right: "-0.5rem" }}
          >
            {cartQuantity}
          </div>
        </Button>
      )}
    </Navbar>
  );
}
