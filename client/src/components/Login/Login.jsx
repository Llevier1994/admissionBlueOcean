import React, { useState, useEffect } from "react";
import Logo2 from "../../assets/Logo2.png";
import AuthContext from "../Context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [transition, setTransition] = useState(true);
  const { handleLogin } = React.useContext(AuthContext);

  useEffect(() => {
    setInterval(() => {
      setTransition(false);
    }, 300);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
    } catch (err) {
      console.log(errorText);
    }
  };

  const transitionClassUp = transition
    ? "opacity-0 translate-y-[50px]"
    : "opacity-100";

  const transitionClassDown = transition
    ? "opacity-0 -translate-y-[50px]"
    : "opacity-100";

  return (
    <div className="w-full mx-auto my-12 h-full">
      <div className="h-[800px] w-[600px] my-[120px] mx-auto rounded-md bg-bg flex-col shadow-xl shadow-black">
        <div
          id="logo"
          className={`${transitionClassDown} w-full mx-auto relative transform transition-all duration-300 ease-in-out mt-2`}
        >
          <img src={Logo2} alt="Logo" className="w-[75px] mx-auto pt-12" />
        </div>
        <h2
          className={`mx-auto w-full text-4xl font-bold tracking-wide text-center p-8 my-2 text-galv-orange ${transitionClassDown} transition-all duration-300 ease-in-out`}
        >
          Login
        </h2>
        <p
          className={`text-center text-white italic tracking-wide ${transitionClassDown} transition-all duration-300 ease-in-out`}
        >
          Admissions Portal
        </p>
        <div className="border-t-[.5px] border-white/70 w-2/3 mx-auto mt-10 mb-4"></div>
        <div
          id="form"
          className={`mx-auto w-full relative ${transitionClassUp} duration-300 transition-all ease-in-out`}
        >
          <form
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
            className="flex-col flex w-full mx-auto text-center"
          >
            <div className="relative my-1 p-2">
              <input
                type="email"
                value={email}
                className="my-4 py-2 px-2 text-white rounded-md focus:ring-2 focus:ring-accent focus:outline-none border-none w-1/2 bg-secondary"
                onChange={handleEmailChange}
                autoComplete="none"
                autoFocus={true}
              />
              <label
                className={`absolute left-[160px] transition-all duration-300 ease-in-out pointer-events-none ${
                  email
                    ? "text-accent text-md font-bold -top-3"
                    : "text-white/50 top-8"
                }`}
              >
                Email
              </label>
            </div>
            <div className="relative my-1 p-2">
              <input
                type="password"
                value={password}
                className="my-4 py-2 px-2 text-white rounded-md focus:ring-2 focus:ring-accent focus:outline-none border-none w-1/2 bg-secondary"
                onChange={handlePasswordChange}
                autoComplete="none"
              />
              <label
                className={`absolute left-[160px] transition-all duration-300 ease-in-out pointer-events-none ${
                  password
                    ? "text-accent text-md font-bold -top-3"
                    : "text-white/50 top-8"
                }`}
              >
                Password
              </label>
            </div>
          </form>
          <div className="w-full items-center mx-auto text-center">
            <button
              onClick={handleSubmit}
              className="mx-auto py-2 px-10 bg-secondary text-white/50 text-lg rounded-md my-2 hover:scale-105 hover:text-accent hover:border-accent hover:border-[1px] transition-transform duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
        <div className="border-t-[.5px] border-white/70 w-2/3 mx-auto my-10"></div>
        <div id="error" className="text-red">
          {errorText}
        </div>
        <div id="help" className="mx-auto w-full my-4">
          <p className="text-white text-center p-2 tracking-wide">
            To create an account, <br /> please contact the{" "}
            <a href="#" className="text-accent underline">
              admissions office.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
