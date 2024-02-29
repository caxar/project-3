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
  const { items } = useSelector(selectFav);
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

  return (
    <div onClick={(e) => handleClickOut(e)} className="menu-block">
      <div className="menu-bg"></div>
      <div
        className={`menu-block__content bg-sidebar_color py-[40px] px-4 ${
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
        <div className="menu-content__wrapper">
          {items?.length == 0 && (
            <div className="font-bold">Еще нет сохраненных городов</div>
          )}

          {items?.length > 0 && (
            <div className="wrapper-content__block">
              <div className="content-block__title text-[20px] mb-[20px]">
                Добавленные города:
              </div>
              <div className="menu-content__item-block flex flex-col gap-2">
                {items.map((item) => (
                  <FavItem key={nanoid()} {...item} setOpenMenu={setOpenMenu} />
                ))}
              </div>
            </div>
          )}

          {/* <div className="menu-content__item">
            Настройки
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
