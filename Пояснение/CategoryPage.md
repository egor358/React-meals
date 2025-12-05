```jsx
import { useParams } from "react-router-dom";                   // Берём параметр из URL (имя категории)
import React from "react";
import { useEffect, useState } from "react";                       // Хуки для состояния и эффекта
import { getCategorysByName } from "../api";                       // Функция запроса блюд по названию категории
import ProductList from "../components/ProductList";               // Компонент — сетка карточек блюд
import Preloader from "../components/Preloader";                   // Спиннер загрузки
import Button from "../components/Button";                         // Кнопка "Назад" (пока закомментирована)

const CategoryPage = () => {
  const { name } = useParams();                                 // Достаём имя категории из URL: /category/Beef → name = "Beef"
  const [products, setProducts] = useState([]);                 // Состояние: массив блюд в текущей категории
  const [loading, setLoading] = useState(true);                 // Флаг: показывать спиннер или контент

  useEffect(() => {                                             // Запускается каждый раз при смене name
    (async () => {
      try {
        setLoading(true);                                     // Включаем спиннер перед запросом
        const data = await getCategorysByName(name);          // Запрос к API: filter.php?c=Beef
        setProducts(data.meals);                              // Сохраняем массив блюд (data.meals)
      } catch (err) {
        console.log(err);                                     // Если ошибка — просто в консоль
      } finally {
        setLoading(false);                                    // В любом случае выключаем спиннер
      }
    })();
  }, [name]);                                                   // ← перезапускается при смене категории

  return (
    <>
      {/* <Button /> */}                                        {/* Кнопка "Назад" — закомментирована */}
      {loading ? <Preloader /> : <ProductList products={products} />}
                                                                // Если грузимся — спиннер, иначе — список блюд
    </>
  );
};

export default CategoryPage;
`
Что это за страница
Открывается, когда пользователь кликает на категорию (например, "Beef", "Dessert").
Как работает по шагам
Пользователь переходит по ссылке /category/Beef
useParams() ловит name = "Beef"
useEffect видит изменение name → запускает запрос
Пока идёт запрос — показывается <Preloader />
Приходят данные → setProducts(data.meals)
setLoading(false) → спиннер исчезает
Появляется сетка блюд через <ProductList />

Ключевая фишка[name] в зависимостях — благодаря этому при переходе между категориями (Beef → Chicken → Seafood) данные всегда актуальные.