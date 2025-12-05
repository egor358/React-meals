```jsx
import React from "react";                                      // React + JSX
import "./footer.css";                                            // Отдельные стили для футера

function Footer() {
  return (
    <footer className="foot">                                 {/* Главный тег подвала */}
      
      <div className="about-us">                              {/* Блок "О нас" */}
        <h1>About us</h1>
        <h3>
          We have been in the culinary market for ten years.<br />
          Our partners cover more than 30 countries.<br />
          Exquisite Italian cuisine that bestows the food of the gods.
        </h3>
      </div>

      <div className="company">                               {/* Блок "Компания" */}
        <h1>Company</h1>
        <h3>Turin-based company Juventus Time</h3>
      </div>

      <div className="contact">                               {/* Блок "Контакты" */}
        <h1>Contact</h1>
        <h3>
          <a href="tel:0800999779">0800999779</a>            {/* Кликабельный номер телефона */}
          <span>telegram:@Juve</span>
          <span>instagram:juventino</span>
        </h3>
      </div>

      <div className="icon">                                  {/* Иконки внизу */}
        <span className="material-icons">phone</span>        {/* Иконки из Material Icons */}
        <i className="material-icons">photo_camera</i>
        <span className="material-icons">send</span>
      </div>
    </footer>
  );
}

export default Footer;
`
Что делает
Показывается на всех страницах внизу. Содержит информацию о компании, контакты и иконки.
Ключевые моменты
Статический компонент — ничего не меняется, не зависит от состояния
<a href="tel:…"> — при клике на мобильнике сразу открывается набор номера
Используются Material Icons (нужно подключить их в index.html)

Последовательность событий
При открытии любой страницы → Footer отрисовывается сразу после <main>
Остаётся на месте при всех переходах
Всегда в самом низу страницы


Готово! Теперь у тебя есть полная оболочка:
index → App → Header + [контент] + Footer