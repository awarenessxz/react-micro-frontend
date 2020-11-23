import React from "react";
import { Card } from "react-bootstrap";
import { RemoteMFComponent } from "../utils/mf-react-util";

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
                <RemoteMFComponent
                    mfScope='app_mf_remote'
                    mfModule='./AddItemToCartButton'
                    componentProps={{
                        item: {
                            title: `${props.contentId}`
                        }
                    }}
                />
            </Card.Body>
        </Card>
    )
};

export default ContentCard;
