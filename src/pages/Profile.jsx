/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);
  return (
    <div className="md:flex justify-around my-10  min-h-[100vh] useBg">
      <div>
        <img
          className="w-96  h-96 border-2 border-slate"
          src={user.photoURL}
          alt=""
        />
      </div>
      <div className="">
        <h2 className="font-bold pt-3 pb-2 text-5xl my-2">
          {user?.displayName}
        </h2>
        <h2 className="font-semibold">Email Address: {user?.email}</h2>
        <h2 className="font-semibold">Phone: N/A</h2>
      </div>
    </div>
  );
};

export default Profile;
