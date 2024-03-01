export const formatTime = (timeData: string) => {
  const date = new Date(timeData);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
