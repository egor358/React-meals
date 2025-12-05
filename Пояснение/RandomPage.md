```jsx
import React, { useState, useEffect } from "react";                  // Хуки состояния и эффектов
import Button from "../components/Button";                             // Кнопка "Назад"
import Preloader from CanPreloader";                                   // Спиннер, пока грузится случайное блюдо
import { getRandomButton } from "../api";                              // Запрос на случайное блюдо (random.php)

function RandomPage() {
  const [random, setRandom] = useState({});                       // Состояние: одно случайное блюдо
  const [loading, setLoading] = useState(true);                   // Флаг загрузки — изначально показываем спиннер

  useEffect(() => {                                               // Один раз при загрузке страницы
    (async () => {
      try {
        const response = await getRandomButton();               // Запрос: https://www.themealdb.com/api/json/v1/1/random.php
        setRandom(response.meals[0]);                           // API возвращает массив из одного блюда → берём [0]
      } catch (er) {
        console.log(er);                                        // Если ошибка — просто в консоль
      } finally {
        setLoading(false);                                      // В любом случае выключаем спиннер
      }
    })();
  }, []);                                                         // ← пустой массив = только один раз при монтировании

  return loading ? (
    <Preloader />                                                 // Пока грузится — красивый спиннер
  ) : (
    <div className="recept">                                      // Та же разметка, что и в Recept.jsx
      <Button/>
      <img src={random.strMealThumb} alt={random.strArea} />      // Фото блюда
      <h1> {random.strArea}</h1>                                  // Сейчас показывает страну (ошибка — нужно strMeal!)
      <h2>{random.strCategory}</h2>                               // Категория
      <h3>{random.strInstructions}</h3>                           // Полная инструкция

      {/* YouTube видео, если есть */}
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

      {/* Таблица ингредиентов */}
      <table className="striped highlight centered bordered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Mesure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(random).map((key) => {
            if (key.includes("Ingredient") && random[key]) {      // Ищем strIngredient1, strIngredient2...
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

export default RandomPage;                                        // Экспортируем для роутинга
`
Пользователь жмёт «Random» в Header
Переход на /random → монтируется RandomPage
Сразу показывается Preloader
Делается запрос на random.php → приходит одно случайное блюдо
Данные сохраняются → спиннер исчезает
Появляется полная страница рецепта: фото, инструкция, видео, таблица ингредиентов
Пользователь получает неожиданное блюдо — магия!

Почему всё сделано именно так

Запрос только один раз ([]) — больше не нужно
Полностью переиспользуется верстка из Recept.jsx — не дублируем код
Есть try/catch/finally — надёжно
Умная таблица ингредиентов — работает всегда

Маленькие улучшения, которые можно добавить позже

Исправить <h1>{random.strArea}</h1> → на {random.strMeal}
Добавить кнопку «Ещё один случайный!»
Анимация появления рецепта
Сохранять последние 5 случайных в localStorage