import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dogImg, setDogImg] = useState<string|undefined>(undefined);

  const fetchDoggo = () => {
    setDogImg("");
    fetch("http://localhost:3003/randomDog")
        .then((res) => res.json())
        .then((dogInfo) => {
          setDogImg(dogInfo.url);
        });
  };

  useEffect(() => {
    if (dogImg === undefined) {
      fetchDoggo();
    }
  });

  return (
      <div>
        <header>
          <h3>Doggo of the day</h3>
          <div>
            <button onClick={() => fetchDoggo()}>New Doggo</button>
          </div>
          {dogImg !== "" ? (
              <div>
                <img src={dogImg} width="400px" alt="doggo" />
              </div>
          ) : (
              <div>Loading Image</div>
          )}
        </header>
      </div>
  );
}

export default App;
