import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("my_modal_1").showModal();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleLoginUser = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success(`Welcome back Dear`);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  return (
    <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome Back
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please Login with your account and manage your task today for free
        </p>

        <form
          onSubmit={handleLoginUser}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-2xl"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-black p-4 pe-12 text-sm shadow-2xl"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
          >
            {loading ? (
              <span className="inline-block h-5 w-5 !-pb-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.120em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></span>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-center text-sm text-white">
            No account?
            <Link className="underline ms-2" to="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      {/* modal*/}
      <dialog id="my_modal_1" className="modal">
        <div
          style={{
            backgroundImage: 'url("/wave.png")',
            backgroundSize: "cover",
          }}
          className="modal-box"
        >
          <div className=" rounded-lg p-8 ">
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4"></div>
            <h2 className="text-3xl font-bold text-center mb-4">Welcome</h2>
            <p className="px-5 py-3 text-center text-sm font-semibold text-white   bg-blue-600 rounded-sm">
              Discover the magic of our website.
              <br />
              Log in to explore more!
            </p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="px-5 py-3 text-xs font-bold text-white uppercase transition-all duration-150 bg-blue-600 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
