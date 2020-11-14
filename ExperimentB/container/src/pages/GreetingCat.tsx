import React from "react";
import {BrowserHistory} from "history";
import Header from "../components/Header";
import MicroFrontend from "../components/MicroFrontend";

// get value from .env file
const { REACT_APP_MF_CATS_HOST: catsHost } = process.env;

interface GreetingCatProps {
    history: BrowserHistory;
}

function GreetingCat({ history }: GreetingCatProps) {
    return (
        <div>
            <Header />
            <div className="home">
                <MicroFrontend history={history} host={catsHost} name="Cats" />
            </div>
        </div>
    );
}

export default GreetingCat;