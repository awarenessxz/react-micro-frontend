import React, { useState } from "react";
import { BrowserHistory } from "history";
import Header from "../components/Header";
import MicroFrontend from "../components/MicroFrontend";

// get value from .env file
const {
    REACT_APP_MF_DOGS_HOST: dogsHost,
    REACT_APP_MF_CATS_HOST: catsHost,
} = process.env;

interface HomeProps {
    history: BrowserHistory;
}

const Home = ({ history }: HomeProps) => {
    const [input, setInput] = useState("");

    const handleOnClick = () => {
        history.push(`/cat/${input}`);
    };

    return (
        <div>
            <Header />
            <div className="home">
                <input
                    placeholder="Insert a greeting"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleOnClick}>Greet Me</button>
            </div>

            <div className="home">
                <div className="content">
                    <div className="cat">
                        <MicroFrontend history={history} host={catsHost} name="Cats" />
                    </div>
                    <div className="dog">
                        <MicroFrontend history={history} host={dogsHost} name="Dogs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
