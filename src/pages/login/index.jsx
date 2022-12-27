import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import InputTextWithLabel from "../../components/input/InputTextWithLabel";
import { postData } from "../../utils/fetch";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // Send Request to the server
    try {
      await postData("/auth/login", { username, password });
    } catch (err) {
      setError(err.message);
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#eeeeee]">
      <div className="h-96 w-96 rounded-3xl bg-white drop-shadow-2xl">
        <div className="flex h-1/4 w-auto items-center justify-center text-2xl">
          Login Cuy
        </div>
        <form className="mt-2 px-4" onSubmit={handleSubmit}>
          <div className="my-1 mx-2">
            <InputTextWithLabel
              label="Username :"
              placeholder="Masukan Username"
              type="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              required
            />
            <InputTextWithLabel
              label="Password :"
              placeholder="Masukan Password"
              type="password"
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              required
              isUseEyeIcon
            />
          </div>
          <div className="my-5 mx-2">
            <Button className="w-full hover:bg-[#6ECCAF]">Masuk</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;