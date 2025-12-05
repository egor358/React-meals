```jsx
import React from "react";                                            // React + JSX
import { Link } from "react-router-dom";                               // Плавная навигация без перезагрузки

const ProductItem = ({ strMeal, strMealThumb, idMeal }) => {            // Получаем только нужные поля: название, фото, id
  return (
    <div className="card">                                              // Карточка в стиле Materialize
      <div className="card-image">
        <img src={strMealThumb} />                                      // Фото блюда
      </div>

      <div className="card-content">
        <span className="card-title">{strMeal}</span>                   // Название блюда крупным шрифтом
      </div>

      <div className="card-action">
        <Link to={`/recept/${idMeal}`}>Watch recept</Link>              // Ссылка на полную страницу рецепта
      </div>
    </div>
  );
};

export default ProductItem;                                            // Экспортируем для ProductList
`
ProductList вызывает этот компонент много раз
Каждый раз передаёт своё название, фото и id
Рисуется простая и красивая карточка: только фото + название + кнопка
При клике на «Watch recept» → мгновенный переход на /recept/52772
Открывается полная страница с инструкцией, видео и ингредиентами

Почему всё сделано именно так

Минимум данных — только то, что нужно для отображения
Чистый компонент без состояния — максимально быстрый
<Link> вместо <a> — SPA-поведение, ничего не перезагружается

Маленькие улучшения, которые можно добавить позже

Добавить время приготовления или сложность
Hover-эффект (карточка поднимается)
Lazy loading фото: <img loading="lazy" ... />
Показывать страну или категорию под названием