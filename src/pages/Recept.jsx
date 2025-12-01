import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMileById } from '../api';
import './recept.css';

const Recept = () => {
  const { id } = useParams();
  const [recept, setRecept] = useState({});
  console.log(recept);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await getMileById(id);
      setRecept(data.meals[0]);
    })();
  }, [id]);

  return (
    <div className="recept">
      <Button />
      <img src={recept.strMealThumb} alt={recept.strArea} />
      <h1> {recept.strArea}</h1>
      <h2>{recept.strCategory}</h2>
      <h3>{recept.strInstructions}</h3>
      {recept.strYoutube && (
        <iframe
          width="860"
          height="315"
          src={`https://www.youtube.com/embed/${recept.strYoutube.slice(
            recept.strYoutube.indexOf('v=') + 2
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
          {Object.keys(recept).map((key) => {
            if (key.includes('Ingredient') && recept[key]) {
              return (
                <tr key={key}>
                  <td>{recept[key]}</td>
                  <td>{recept[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Recept;
