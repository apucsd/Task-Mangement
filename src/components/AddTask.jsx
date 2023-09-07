/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { addToLocalStorage } from "../utils/utils";

const AddTask = ({ reload, setReload }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.status = "up-next";
    data.id = new Date().getTime().toString();
    addToLocalStorage(data);
    reset();
    setReload(!reload);
    document.getElementById("my_modal_1").close();
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="text-white block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-whiten "
        >
          Add Task (+)
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Title</label>
              <input
                type="text"
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("title")}
              />
              <label>Description</label>
              <input
                type="text"
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("description")}
              />
              <label>Deadline</label>
              <input
                type="date"
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("deadline")}
              />

              <label>Assign To</label>
              <select
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("assign")}
              >
                <option value="Tanmoy">Tanmoy</option>
                <option value="Mazba">Mazba</option>
                <option value="Fokira">Fokira</option>
              </select>
              <label>Priority</label>
              <select
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("priority")}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <div className="flex gap-3 justify-end">
                <input
                  className="bg-red-600 cursor-pointer hover:bg-red-700 text-white  py-2 px-4 rounded my-4"
                  type="submit"
                  value="Submit"
                />
                <span
                  onClick={() => document.getElementById("my_modal_1").close()}
                  className="bg-blue-600 cursor-pointer  hover:bg-blue-700 text-white  py-2 px-4 rounded my-4"
                >
                  Cancel
                </span>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AddTask;
