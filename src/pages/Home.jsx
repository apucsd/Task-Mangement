import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";
import { getAllTasks } from "../utils/utils";
import Filter from "../components/Filter";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [upNext, setUpNext] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // Fetch tasks from local storage
    const data = getAllTasks();
    setTasks(data);
  }, [reload]);

  useEffect(() => {
    // Set upNext, progress, and completed based on tasks
    setUpNext(tasks?.filter((task) => task.status === "up-next"));
    setCompleted(tasks?.filter((task) => task.status === "completed"));
    setProgress(tasks?.filter((task) => task.status === "progress"));
  }, [tasks]);

  return (
    <div className=" md:px-4 min-h-[100vh]">
      <div className="col-span-9 px-10 pt-10">
        <AddTask reload={reload} setReload={setReload}></AddTask>
        <div className="grid md:grid-cols-3 gap-5 mt-10 ">
          <div className="relative  overflow-auto">
            <div className="flex sticky top-0 justify-between items-center bg-[#56a0e1] p-3 rounded-md mb-3">
              <h1 className=" font-semibold">Up Next</h1>

              <p className="bg-blue-600 text-white w-6 h-6 grid place-content-center rounded-md">
                {upNext ? upNext.length : "0"}
              </p>
              <div>
                <Filter tasks={upNext} setUpNext={setUpNext}></Filter>
              </div>
            </div>
            <div className="space-y-3">
              {upNext?.map((task, index) => (
                <TaskCard
                  setReload={setReload}
                  reload={reload}
                  key={index}
                  task={task}
                ></TaskCard>
              ))}
            </div>
          </div>
          <div className="relative  overflow-auto">
            <div className="flex sticky top-0 justify-between items-center bg-[#5075da] p-3 rounded-md mb-3">
              <h1 className="text-white font-semibold">In Progress</h1>
              <p className="bg-blue-600 text-white w-6 h-6 grid place-content-center rounded-md">
                {progress ? progress.length : "0"}
              </p>
              <div>
                <Filter tasks={progress} setProgress={setProgress}></Filter>
              </div>
            </div>
            <div className="space-y-3">
              {progress?.map((task, index) => (
                <TaskCard
                  setReload={setReload}
                  reload={reload}
                  key={index}
                  task={task}
                ></TaskCard>
              ))}
            </div>
          </div>
          <div className="relative  overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#47db4c] p-6 rounded-md mb-3">
              <h1 className="text-white font-semibold">Completed</h1>
              <p className="bg-blue-600 text-white w-6 h-6 grid place-content-center rounded-md">
                {completed ? completed.length : "0"}
              </p>
            </div>
            <div className="space-y-3">
              {completed?.map((task, index) => (
                <TaskCard
                  setReload={setReload}
                  reload={reload}
                  key={index}
                  task={task}
                ></TaskCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
