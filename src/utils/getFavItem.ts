const getFavItem = () => {
  // если в localStorage существует по ключу cartItem тогда
  // происходи Parse в Обьект
  const data = localStorage.getItem("favItem");
  return data ? JSON.parse(data) : [];
};

export default getFavItem;
