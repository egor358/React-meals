```jsx
import "./App.css";                                              // Глобальные стили приложения
import Header from "./components/Header";                        // Шапка сайта — видна на всех страницах
import Footer from "./components/Footer";                        // Футер — тоже везде
import { BrowserRouter, Route, Routes } from "react-router-dom";      // Роутинг React Router v6
import Home from "./pages/Home";                                  // Главная страница
import CategoryPage from "./pages/CategoryPage";                  // Страница категории (Beef, Chicken и т.д.)
import Recept from "./pages/Recept";                              // Страница одного блюда
import RandomPage from "./pages/RandomPage";                      // Страница случайного рецепта

function App() {
  return (
    <>
      <Router basename='/React-meals'>                          {/* Базовый путь для GitHub Pages / Vercel */}
        <Header />                                              {/* Шапка всегда сверху */}

        <main className="container">                            {/* Основной контент с отступами */}
          <Routes>                                              {/* Здесь меняется содержимое в зависимости от URL */}
            <Route path="/React-meals" element={<Home />} />    {/* Главная — список категорий */}
            <Route path="/category/:name" element={<CategoryPage />} /> {/* Список блюд в категории */}
            <Route path="/recept/:id" element={<Recept />} />   {/* Подробный рецепт */}
            <Route path="/random/" element={<RandomPage />} />  {/* Случайный рецепт */}
          </Routes>
        </main>

        <Footer />                                              {/* Футер всегда снизу */}
      </Router>
    </>
  );
}

export default App;
`
Структура сайта
Header → [меняющийся контент] → Footer — классика 99 % React-приложений.
Почему Header и Footer вне <Routes>
Они должны быть видны на всех страницах и не перерисовываться при переходах → экономия производительности и отсутствие миганий.
basename='/React-meals'
Обязательно для деплоя на GitHub Pages, Netlify, Vercel, когда проект лежит не в корне домена, а в папке /React-meals.
Последовательность событий при открытии сайта
Пользователь заходит на https://твой-логин.github.io/React-meals/
React Router видит путь /React-meals → рендерит <Home />
Header и Footer отрисовываются один раз и остаются
При клике на категорию → переходим на /category/Beef → рендерится <CategoryPage />, Header/Footer остаются на месте