export const addToLocalStorage = (show) => {
  const existingShows = JSON.parse(localStorage.getItem("tasks")) || [];
  existingShows.push(show);
  localStorage.setItem("tasks", JSON.stringify(existingShows));
};

export const getAllTasks = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};
