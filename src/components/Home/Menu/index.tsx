import React from "react";

interface MenuProps {
  openMenu: boolean;
  setOpenMenu: (i: boolean) => void;
}

import "./Menu.css";

const Menu: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  // Закрыть меню при клике вне карточки товара
  const handleClickOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as Element;
    if (el.classList.contains("menu-bg")) {
      setOpenMenu(false);
    }
  };
  return (
    <div onClick={(e) => handleClickOut(e)} className="menu-block">
      <div className="menu-bg"></div>
      <div
        className={`menu-block__content bg-sidebar_color py-4 px-4 ${
          openMenu ? "showMenu" : ""
        }`}
      >
        <div className="cart-close" onClick={() => setOpenMenu(false)}>
          x
        </div>
        <div className="menu-content__wrapper">
          <div className="menu-content__item">
            <img src="" alt="" />
            Локация
          </div>
          <div className="menu-content__item">
            <img src="" alt="" />
            Настройки
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
