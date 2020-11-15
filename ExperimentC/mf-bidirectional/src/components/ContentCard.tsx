import React from "react";
import { Card, Button } from "react-bootstrap";

interface ContentCardProps {
    description: string;
    contentId: string;
}

const ContentCard = (props: ContentCardProps): JSX.Element => {
    const colors = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info'];

    const getRandomColor = (): string => {
        const num = Math.floor(Math.random() * colors.length);
        return colors[num].toLowerCase();
    };

    return (
        <Card style={{ width: '18rem' }} bg={getRandomColor()} text="white">
            <Card.Header>{props.contentId}</Card.Header>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="light" onClick={() => {
                    console.log("Clicking ", props.contentId);
                }}>Add to Card</Button>
            </Card.Body>
        </Card>
    )
};

export default ContentCard;
