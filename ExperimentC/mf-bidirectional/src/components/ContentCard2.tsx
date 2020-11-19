import React from "react";
import { Card } from "react-bootstrap";
import { RemoteMFComponent } from "../utils/mf-util";

interface ContentCard2Props {
    description: string;
    contentId: string;
}

const ContentCard2 = (props: ContentCard2Props): JSX.Element => {
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
                <RemoteMFComponent config={{
                    hostUrl: "http://localhost:4002/remoteEntry.js",
                    scope: "app_mf_remote",
                    module: "./AddItemToCartButton",
                }} item={{
                    title: `${props.contentId}`
                }} />
            </Card.Body>
        </Card>
    )
};

export default ContentCard2;
