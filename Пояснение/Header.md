```jsx
import React from "react";                                      // React + JSX
import "./header.css";                                            // Стили только для шапки
import { Link } from "react-router-dom";                          // Навигация без перезагрузки страницы

function Header() {
  return (
    <header className="kitchen-header">                       {/* Главный тег шапки */}
      <Link to="/random">Random</Link>                        {/* Кнопка-с ссылка на случайный рецепт */}

      <div className="content">                                {/* Основной контент шапки */}
        <h1>Restaurant</h1>                                    {/* Большой заголовок */}

        <div className="button">
          <button>Menu</button>                                 {/* Пока просто красивая кнопка (неактивная) */}
        </div>

        <div className="happy">
          <h2>HappyWorldLand</h2>                               {/* Название ресторана */}
          <h3>We are tasty and cozy</h3>                        {/* Слоган */}
        </div>
      </div>
    </header>
  );
}

export default Header;
`
Что делает компонент
Отображается на всех страницах сверху. Содержит логотип, слоган и кнопку «Random».
Ключевые моменты
<Link to="/random"> — переход на случайный рецепт без перезагрузки страницы
Кнопка «Menu» пока декоративная (можно потом повесить открытие мобильного меню)
Всё стилизовано через отдельный header.css

Последовательность событий
Пользователь заходит на любую страницу → Header отрисовывается сразу
При клике на «Random» → плавно переходим на /random/
Шапка остаётся на месте при любых переходах — не мигает, не перерисовывается