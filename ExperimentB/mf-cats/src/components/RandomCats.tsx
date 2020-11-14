import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

type CatRouterParams = {
    greeting?: string;
};

const RandomCat = (props: RouteComponentProps<CatRouterParams>) => {
    const { greeting } = props.match.params;
    const [randomCatImg, setRandomCatImg] = useState<string|undefined>(undefined);

    const fetchRandomCat = () => {
        setRandomCatImg("");
        fetch(`http://localhost:3003/randomCat`)
            .then((res) => res.json())
            .then((catInfo) => {
                setRandomCatImg(catInfo.url);
            });
    };

    useEffect(() => {
        if (randomCatImg === undefined) {
            fetchRandomCat();
        }
    });

    return (
        <div>
            <header>
                <h3>Cat of the day</h3>
                <div>
                    <button onClick={() => fetchRandomCat()}>New Cat</button>
                </div>
                {randomCatImg !== "" ? (
                    <div>
                        {greeting && <h1>{greeting}</h1>}
                        <img src={randomCatImg} width="400px" alt="Cat" />
                    </div>
                ) : (
                    <div>Loading Image</div>
                )}
            </header>
        </div>
    );
}

export default RandomCat;
