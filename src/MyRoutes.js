import React from 'react';
import Main from './Pages/Main';
import RegistrationPage from './Pages/RegistrationPage';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ProductsPage from './Pages/ProductsPage';


const MyRoutes = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/registration' element={<RegistrationPage/>}/>
                <Route path='/products' element={<ProductsPage/>}/>
            </Routes>
        </>
    );
};

export default MyRoutes;