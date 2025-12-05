```jsx
import React from "react";                                            // React + JSX

import ProductItem from "./ProductItem";                              // Одна карточка блюда (внутри категории)

function ProductList({ products }) {                                   // Принимаем пропс products — массив блюд из CategoryPage.jsx
  if (!products.length) {                                              // Если ничего не пришло или массив пустой
    return <h1>Products is missing</h1>;                               // Заглушка — чтобы не было белого экрана
  }

  return (
    <div className="list">                                             // Сетка-контейнер (та же, что и для категорий)
      {products.map((product) => (                                     // Перебираем каждое блюдо в категории
        <ProductItem key={product.idMeal} {...product} />              // Создаём одну карточку
                                                                       // key — уникальный id блюда
                                                                       // {...product} — передаём сразу все данные одним махом
      ))}
    </div>
  );
}

export default ProductList;                                            // Экспортируем для использования в CategoryPage
`
CategoryPage.jsx получил данные от API → products уже заполнен
ProductList проверяет длину → всё ок → идёт дальше
.map() создаёт от 5 до 50+ карточек (зависит от категории)
Каждая карточка получает своё название, фото и id
Пользователь видит красивую ровную сетку блюд
При клике на любое блюдо → переход на полный рецепт

Почему всё сделано именно так

Тот же принцип, что и CategoryList — чисто, понятно, легко поддерживать
Заглушка защищает от пустой страницы
key={product.idMeal} — идеальный уникальный ключ от API