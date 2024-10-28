import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync } from "../../store/slices/authSlices";
import { getUserAsync } from "../../store/slices/userSlices";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    error: messageError,
    loading,
    token,
  } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    } else {
      setError("");
      try {
        dispatch(loginAsync({ email, password }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/profile");
      dispatch(getUserAsync(token));
    }
  }, [token, navigate]);
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-full max-w-sm"
        noValidate
      >
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="mr-2"
          />
          <label htmlFor="remember" className="font-bold">
            Remember me
          </label>
        </div>
        <button
          className="py-2 bg-green-500 text-white font-bold rounded"
          type="submit"
        >
          {loading ? (
            <div className="loader"></div> // Adjust loader styles as needed
          ) : (
            "Sign in"
          )}
        </button>
        {error ? (
          <div className="text-red-500 mt-2">{error}</div>
        ) : (
          messageError && (
            <div className="text-red-500 mt-2">{messageError}</div>
          )
        )}
      </form>
    </>
  );
}
