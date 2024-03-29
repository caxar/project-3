import React from "react";

interface MenuProps {
  openMenu: boolean;
  setOpenMenu: (i: boolean) => void;
}

import "./Menu.css";
import { useSelector } from "react-redux";
import { selectFav } from "../../../redux/favoriteList/selectors";
import FavItem from "../FavItem";
import { nanoid } from "nanoid";

const Menu: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  // загрузка соостояния показывать или скрывать блок прогноза ил localstorage
  const [isCheckedForecast, setIsCheckedForecast] = React.useState(
    localStorage.getItem("forecastData") === "true"
  );

  // загрузка соостояния показывать или скрывать блок Рассвет и заказт ил localstorage
  const [isCheckedSun, setSiCheckedSun] = React.useState(
    localStorage.getItem("solarData") === "true"
  );

  // ДАнные из slice о добавленных городах в избранное
  const { items } = useSelector(selectFav);

  const filteredItems = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  console.log(searchQuery);

  const ref = React.useRef(false);

  // Закрыть меню при клике вне карточки товара
  const handleClickOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as Element;
    if (el.classList.contains("menu-bg")) {
      setOpenMenu(false);
    }
  };

  // Добавление в localstorage
  React.useEffect(() => {
    if (ref.current) {
      const dataLocalStorage = JSON.stringify(items);
      localStorage.setItem("favItem", dataLocalStorage);
    }
    ref.current = true;
  }, [items]);

  // Включаем или отключаем отображение Прогноз на 5 дней
  const handleChangeForecast = () => {
    setIsCheckedForecast((prevState) => {
      const changeForecast = !prevState;
      localStorage.setItem("forecastData", changeForecast.toString());
      return changeForecast;
    });
  };

  // Включаем или отключаем отображение рассвета и закат
  const handleChangeSun = () => {
    setSiCheckedSun((prevState) => {
      const changeSun = !prevState;
      localStorage.setItem("solarData", changeSun.toString());
      return changeSun;
    });
  };

  return (
    <div onClick={(e) => handleClickOut(e)} className="menu-block">
      <div className="menu-bg"></div>
      <div
        className={`menu-block__content bg-sidebar_color py-[40px] px-4  ${
          openMenu ? "showMenu" : ""
        }`}
      >
        <div
          className="cart-close cursor-pointer absolute left-[-30px] top-[40px]"
          onClick={() => setOpenMenu(false)}
        >
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_LG">
              <path
                id="Vector"
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="menu-content__wrapper overflow-y-auto px-3 ">
          {items?.length == 0 && (
            <div className="mb-4 text-[18px] font-bold">
              Нет добавленных городов
            </div>
          )}

          {items?.length > 0 && (
            <div className="wrapper-content__block mb-5">
              <div className="content-block__title text-[18px] font-bold mb-[20px]">
                Добавленные города:
              </div>
              <div className="mb-10">
                {/* <input
                  className="bg-bg_color w-full h-full py-[10px] px-[20px] rounded-full"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск"
                /> */}
                <div className="search-block relative bg-bg_color w-[100%] rounded-full flex items-center">
                  <div className="search-block__icon ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="search-cities__input bg-transparent w-full h-full py-[10px] pl-[10px] pr-[20px]"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                  />
                </div>
              </div>
              <div className="menu-content__item-block flex flex-col gap-2">
                {filteredItems?.map((item) => (
                  <FavItem key={nanoid()} {...item} setOpenMenu={setOpenMenu} />
                ))}
              </div>
            </div>
          )}

          <div className="menu-content__item border-t-2 py-2">
            <div className="menu-content__title text-[18px] font-bold">
              Настройки отображения:
            </div>
            <div className="menu-content__block">
              {/* 1 */}
              <div className="content-block__item inline-flex items-center">
                <div
                  className={`content-block__title text-[17px] flex flex-col items-center`}
                >
                  - Прогноз на 5 дней{" "}
                </div>
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    type="checkbox"
                    checked={isCheckedForecast}
                    onChange={handleChangeForecast}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-bg_color transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-grab_color checked:bg-grab_color checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
                    id="customStyle"
                  />
                  <span className="absolute text-heading_color transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
              {/* 2 */}
              <div className="content-block__item inline-flex items-center">
                <div
                  className={`content-block__title text-[17px] flex flex-col items-center`}
                >
                  - Рассвет & Закат{" "}
                </div>
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    type="checkbox"
                    checked={isCheckedSun}
                    onChange={handleChangeSun}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-bg_color transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-grab_color checked:bg-grab_color checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
                    id="customStyle"
                  />
                  <span className="absolute text-heading_color transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
