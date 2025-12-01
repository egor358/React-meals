import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Preloader from "../components/Preloader";
import { getRandomButton } from "../api";

function RandomPage() {
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getRandomButton();
        setRandom(response.meals[0]);
      } catch (er) {
        console.log(er);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <div className="recept">
     <Button/>
      <img src={random.strMealThumb} alt={random.strArea} />
      <h1> {random.strArea}</h1>
      <h2>{random.strCategory}</h2>
      <h3>{random.strInstructions}</h3>
      {random.strYoutube && (
        <iframe
          width="860"
          height="315"
          src={`https://www.youtube.com/embed/${random.strYoutube.slice(
            random.strYoutube.indexOf("v=") + 2
          )}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <table className="striped highlight centered bordered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Mesure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(random).map((key) => {
            if (key.includes("Ingredient") && random[key]) {
              return (
                <tr key={key}>
                  <td>{random[key]}</td>
                  <td>{random[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RandomPage;
