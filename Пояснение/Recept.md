```jsx
import Button from '../components/Button';                    // Кнопка "Go back"
import { useParams } from 'react-router-dom';                   // Берём id из URL
import { useState, useEffect } from 'react';                     // Хуки состояния и эффекта
import { getMileById } from '../api';                           // Запрос одного блюда по id
import './recept.css';                                          // Стили только для этой страницы

const Recept = () => {
  const { id } = useParams();                                    // Из URL /recept/52772 → id = "52772"
  const [recept, setRecept] = useState({});                      // Состояние: объект с данными одного блюда
  console.log(recept);                                           // Для дебага — смотрим в консоль, что пришло

  const [loading, setLoading] = useState(true);                  // Флаг загрузки (пока не используется в рендере)

  useEffect(() => {                                              // Срабатывает при загрузке и при смене id
    (async () => {
      const data = await getMileById(id);                        // Запрос: lookup.php?i=52772
      setRecept(data.meals[0]);                                  // API возвращает { meals: [{...}] } → берём первый элемент
    })();
  }, [id]);                                                      // ← важно: при смене id (переход на другое блюдо) запрос повторится

  return (
    <div className="recept">
      <Button />                                                 // Кнопка "Go back"
      <img src={recept.strMealThumb} alt={recept.strArea} />     // Фото блюда
      <h1> {recept.strArea}</h1>                                 // Страна (но по логике должно быть strMeal — название!)
      <h2>{recept.strCategory}</h2>                              // Категория
      <h3>{recept.strInstructions}</h3>                          // Полная инструкция приготовления

      {/* Встраиваем видео с YouTube, если есть ссылка */}
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

      {/* Таблица ингредиентов и мер */}
      <table className="striped highlight centered bordered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Mesure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recept).map((key) => {                     // Перебираем все ключи объекта
            if (key.includes('Ingredient') && recept[key]) {      // Ищем strIngredient1, strIngredient2...
              return (
                <tr key={key}>
                  <td>{recept[key]}</td>                          // Название ингредиента
                  <td>{recept[`strMeasure${key.slice(13)}`]}</td> // Мера: strMeasure1, strMeasure2...
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
`
Что это за страница
Подробный рецепт одного блюда — открывается после клика на карточку в категории.
Как работает по шагам
URL: /recept/52772
useParams() → id = "52772"
useEffect → запрос по id
Приходят данные → setRecept(data.meals[0])
Рендерится: фото, название (сейчас strArea — надо заменить на strMeal), инструкция, видео, таблица ингредиентов
Кнопка Button → возвращает на предыдущую страницу

Умная часть
Таблица ингредиентов собирается динамически через Object.keys — работает для любого количества ингредиентов (от 1 до 20).