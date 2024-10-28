import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlices";
import { setUser, updateUserAsync } from "../../store/slices/userSlices";


 const EditName = ({ handleEditName }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.login);

  const [firstname, setFirstname] = useState(user ? user.firstName : "");
  const [lastname, setLastname] = useState(user ? user.lastName : "");

  const changeName = (e) => {
    e.preventDefault();
    dispatch(
      updateUserAsync({
        token: token,
        firstName: firstname,
        lastName: lastname,
      })
    )
      .then((data) => {
        if (data.error && data.error.message === "jwt expired") {
          dispatch(logout());
        }
        const { firstName, lastName } = data.payload;
        dispatch(setUser({ firstName, lastName }));
        handleEditName();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="flex flex-col space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="p-2"
        />
        <button type="submit" onClick={changeName} className="self-end">
          Save
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="p-2"
        />
        <button type="button" onClick={handleEditName} className="self-end">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
