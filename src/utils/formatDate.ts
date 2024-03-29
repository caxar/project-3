export const formatDate = (timestamp: number) => {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const date = new Date(timestamp * 1000);

  const dayOfWeek = daysOfWeek[date.getDay() - 1];
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek} ${day}, ${month}`;
};
