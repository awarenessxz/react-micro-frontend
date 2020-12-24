import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchPage from "./SearchPage";

const App = (): JSX.Element => {
    return (
        <Container>
            <Row>
                <Col><SearchPage /></Col>
            </Row>
            <br />
        </Container>
    );
};

export default App;
