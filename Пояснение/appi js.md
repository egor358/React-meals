```jsx
import { API_URL } from './config';                                    // Базовый URL API: https://www.themealdb.com/api/json/v1/1/

// Получить все категории (используется на главной странице)
const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');       // Запрос: categories.php → возвращает { categories: [...] }
  if (response.ok) {
    return await response.json();                                 // Всё ок → возвращаем распарсенный JSON
  }
  throw new Error(                                                // Если что-то пошло не так (404, 500 и т.д.)
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

// Получить блюда по названию категории (Beef, Chicken и т.д.)
const getCategorysByName = async (catName) => {
  const response = await fetch(API_URL + `filter.php?c=${catName}`); // Запрос: filter.php?c=Beef → { meals: [...] }
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

// Получить полную информацию о блюде по его id
const getMileById = async (id) => {
  const response = await fetch(API_URL + `lookup.php?i=${id}`);   // Запрос: lookup.php?i=52772 → { meals: [{...}] }
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

// Получить случайное блюдо (для кнопки Random)
const getRandomButton = async () => {
  const response = await fetch(API_URL + `random.php`);           // Запрос: random.php → всегда одно случайное блюдо
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

// Экспортируем все функции, чтобы использовать в компонентах
export { getAllCategories, getCategorysByName, getMileById, getRandomButton };
`
Любой компонент (Home, CategoryPage, Recept, RandomPage) импортирует нужную функцию
Вызывает её → она делает fetch
Если всё ок — возвращает готовый JSON
Если ошибка (нет интернета, сервер упал) — кидает понятную ошибку в консоль
Компоненты ловят ошибку в catch и могут показать пользователю сообщение

Почему всё сделано именно так

Один источник правды — если API поменяет URL, меняем только в config.js
Повторяющийся код вынесен в функции
Одинаковая обработка ошибок — удобно дебажить
Легко добавить заголовки, авторизацию или кэширование в будущем