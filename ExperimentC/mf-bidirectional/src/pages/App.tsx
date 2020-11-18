import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AllCardsPage from "./AllCardsPage";

const CartContent = React.lazy(() => import('app_mf_remote/CartContent'));

const App = (): JSX.Element => {
    return (
        <Container>
            <Row>
                <Col><AllCardsPage /></Col>
            </Row>
            <Row>
                <Col>
                    <React.Suspense fallback={<div>Falling Back to Suspense...</div>}>
                        <CartContent />
                    </React.Suspense>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
