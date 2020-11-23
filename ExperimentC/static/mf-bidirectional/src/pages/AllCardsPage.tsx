import React from "react";
import { CardDeck } from "react-bootstrap";
import ContentCard from "../components/ContentCard";
import { contents } from "../utils/Contents";

const AllCardsPage = (): JSX.Element => {
    return (
        <CardDeck>
            {contents.map(value => {
                return <ContentCard key={value.contentId} contentId={value.contentId} description={value.message} />;
            })}
        </CardDeck>
    );
};

export default AllCardsPage;
