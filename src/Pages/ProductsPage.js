import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const ProductsPage = () => {
    const id = [1, 2 , 3, 4, 5]
    return (
        <Container>
            <Row>
                <Col md={14}>
                    <Row className="d-flex">
                        {id.map(i => <Product key={i}/>)}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsPage;