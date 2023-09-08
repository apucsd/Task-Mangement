import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import getImageURL from "../reusable/getImgURL";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0];

    const photoURL = await getImageURL(photo);
    if (photoURL) {
      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: username,
            photoURL: photoURL,
          });
        })
        .then(() => {
          toast.success("Thanks for creating an account");
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    } else {
      toast.error("Photo can't upload to the server");
      setLoading(false);
    }
  };
  return (
    <div className=" mx-auto mb-20  max-w-screen-xl px-4 my-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please sign up to manage your task today for free
        </p>

        <form
          onSubmit={handleCreateUser}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign up to your account
          </p>
          <div>
            <label htmlFor="username" className="sr-only">
              Full Name
            </label>

            <div className="relative">
              <input
                type="text"
                name="username"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-2xl"
                placeholder="Enter Full Name"
              />
            </div>
          </div>
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
                name="password"
                type="password"
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
          <div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                name="photo"
                type="file"
                className="block w-full text-sm text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
              />
            </label>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
          >
            {loading ? (
              <span className="inline-block h-5 w-5 !-pb-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.120em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></span>
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="text-center text-sm text-white">
            Already have an account?
            <Link className="underline ms-2" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
