import { useEffect, useState } from "react";
import { getAllTasks } from "../utils/utils";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [upNext, setUpNext] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    // Fetch tasks from local storage
    const data = getAllTasks();
    setTasks(data);
  }, []);

  useEffect(() => {
    // Set upNext, progress, and completed based on tasks
    setUpNext(tasks?.filter((task) => task.status === "up-next"));
    setCompleted(tasks?.filter((task) => task.status === "completed"));
    setProgress(tasks?.filter((task) => task.status === "progress"));
  }, [tasks]);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-center">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          Task Management Overview
        </h2>
        <p className="md:text-lg text-gray-600">
          Welcome to the Task Overview Dashboard, where you can effortlessly
          manage your tasks, track progress across teams, and gain real-time
          insights into your projects.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5 my-10">
        <div className="w-full stats shadow stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Starts</div>
            <div className="stat-value text-primary">
              {upNext?.length || "0"}
            </div>
            <div className="stat-desc">Just Start Today</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">In Progress</div>
            <div className="stat-value text-secondary">
              {progress?.length || "0"}
            </div>
            <div className="stat-desc text-green-600">
              Keep it up! You can do it
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online"></div>
            </div>
            <div className="stat-title">Tasks Done</div>
            <div className="stat-value">{completed?.length || "0"}</div>
            <div className="stat-desc text-secondary">
              Great job! For Completing Tasks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
