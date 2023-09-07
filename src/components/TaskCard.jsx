/* eslint-disable react/prop-types */
import { FaTrash, FaLongArrowAltRight } from "react-icons/fa";
import { getAllTasks } from "../utils/utils";
const TaskCard = ({ task, setReload, reload }) => {
  const { title, description, deadline, priority, assign, id } = task;
  const priorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };
  const handleNext = (id) => {
    // Retrieve tasks from localStorage
    const tasks = getAllTasks();

    // Find the task with the given id
    const taskIndex = tasks.findIndex((task) => task.id === id);

    // If the task with the given id is found
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks]; // Create a copy of the tasks array

      // Update the status of the found task
      if (updatedTasks[taskIndex].status === "up-next") {
        updatedTasks[taskIndex].status = "progress";
      } else if (updatedTasks[taskIndex].status === "progress") {
        updatedTasks[taskIndex].status = "completed";
      }

      // Save the updated tasks back to localStorage
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      // Trigger a reload or update your component state
      setReload(!reload);
    }
  };

  const handleDelete = (id) => {
    const tasks = getAllTasks();

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];

      updatedTasks.splice(taskIndex, 1);

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      setReload(!reload);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative min-h-[300px]  p-4 border">
      <h2 className="text-3xl font-bold my-4">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="flex justify-between mt-2">
        <p className="text-gray-500 text-sm">Assign to: {assign}</p>
        <p className={`${priorityColor(priority)} text-sm font-semibold`}>
          Priority: {priority}
        </p>
      </div>
      <div className="flex justify-between items-center my-4">
        <p>{deadline}</p>
        <div className="flex justify-between items-center gap-8">
          <button onClick={() => handleDelete(id)} className="text-red-600">
            <FaTrash />
          </button>
          <button
            onClick={() => {
              handleNext(id);
            }}
            className="text-blue-600"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
