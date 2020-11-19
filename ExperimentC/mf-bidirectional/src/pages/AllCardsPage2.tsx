/*
 * Loads mf-remote dynamically instead of statically
 */
import React from "react";
import { CardDeck } from "react-bootstrap";
import ContentCard2 from "../components/ContentCard2";
import { contents } from "../utils/Contents";

const AllCardsPage2 = (): JSX.Element => {
    return (
        <CardDeck>
            {contents.map(value => {
                return <ContentCard2 key={value.contentId} contentId={value.contentId} description={value.message} />;
            })}
        </CardDeck>
    );
};

export default AllCardsPage2;
