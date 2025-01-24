import React, { useEffect, useState } from "react";
import "./EffectsComponent.css";
import MyStateComponent from "../MyStateComponent/MyStateComponent";

function EffectsComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMystate, setShowMystate] = useState(false);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>EFFECTS COMPONENT</h2>
      {showMystate ? (
        <MyStateComponent />
      ) : (
        <ul className="characterList">
          {data.map((character) => (
            <li key={character.id} className="character">
              {character.fullName} - {character.title}
              <img src={character.imageUrl} alt={character.fullName} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EffectsComponent;
