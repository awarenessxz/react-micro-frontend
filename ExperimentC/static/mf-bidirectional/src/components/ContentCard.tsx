import React from "react";
import { Card } from "react-bootstrap";

interface ContentCardProps {
    description: string;
    contentId: string;
}

const AddItemToCartButton = React.lazy(() => import('app_mf_remote/AddItemToCartButton'));

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
                <React.Suspense fallback={<div>Falling Back to Suspense...</div>}>
                    <AddItemToCartButton item={{ title: `${props.contentId}` }} />
                </React.Suspense>
            </Card.Body>
        </Card>
    )
};

export default ContentCard;
