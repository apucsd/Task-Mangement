/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Filter = ({ tasks, setUpNext, setProgress }) => {
  const handleFilterChange = (e) => {
    const filter = e.target.value.toLowerCase();
    const sortedTasks = [...tasks];

    if (filter === "priority") {
      // Sort tasks by priority, with high priority first
      sortedTasks.sort((a, b) => {
        if (a.priority.toLowerCase() === "high") {
          return -1; // 'a' comes before 'b'
        } else if (b.priority.toLowerCase() === "high") {
          return 1; // 'b' comes before 'a'
        } else {
          return 0; // no change in order
        }
      });

      if (setProgress) {
        setProgress(sortedTasks);
      } else {
        setUpNext(sortedTasks);
      }
    }
    if (filter === "deadline") {
      // Sort tasks by deadline
      sortedTasks.sort((a, b) => {
        const dateA = new Date(a.deadline).getTime();
        const dateB = new Date(b.deadline).getTime();

        return dateA - dateB;
      });

      if (setProgress) {
        setProgress(sortedTasks);
      } else {
        setUpNext(sortedTasks);
      }
    }
  };
  return (
    <select
      onChange={handleFilterChange}
      className="select select-bordered w-full max-w-xs"
    >
      <option disabled selected>
        Filter By
      </option>
      <option value="priority">Hight Priority</option>
      <option value="deadline">Deadline</option>
    </select>
  );
};

export default Filter;
