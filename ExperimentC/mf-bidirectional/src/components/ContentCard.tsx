import React from "react";
import { Card } from "react-bootstrap";

const AddToCartButton = React.lazy(() => import('app_mf_remote/AddItemToCartButton'));

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
                <React.Suspense fallback={<div>Button Not Loaded...</div>}>
                    <AddToCartButton item={{
                        title: `${props.contentId}`
                    }}/>
                </React.Suspense>
            </Card.Body>
        </Card>
    )
};

export default ContentCard;
