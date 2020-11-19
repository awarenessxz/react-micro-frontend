import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CartButton from "../components/CartButton";
import AddItemToCartButton from "../components/AddItemToCartButton";
import CartContent from "../components/CartContent";

const App = (): JSX.Element => {
    return (
        <Container>
            <Row>
                <Col><CartButton /></Col>
            </Row>
            <Row>
                <Col><AddItemToCartButton item={{ title: `New Item` }} /></Col>
            </Row>
            <br />
            <Row>
                <Col><CartContent /></Col>
            </Row>
        </Container>
    );
};

export default App;
