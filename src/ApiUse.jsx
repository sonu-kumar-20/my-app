import React, { useState, useEffect, useRef } from "react";
import "./Joker.css"; // Importing CSS

const Joker = () => {
  const [joke, setJoke] = useState(null);
  const hasFetched = useRef(false);

  const getNewJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    if (!hasFetched.current) {
      getNewJoke();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div className="joker-container">
      <h1> Joker😂Zone</h1>
     
      {joke && (
        <div className="joke-box">
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      )}
       <button className="joke-button" onClick={getNewJoke}>
        Tell Me a Joke!
      </button>

    </div>
  );
};

export default Joker;
