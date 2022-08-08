import { useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import  Spinner from '../../Spinner'
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with other people on Lamasocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              autoComplete="on"
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={6}
              ref={password}
            />
            <button className="loginButton">
              {isFetching ? <Spinner type="spin" color="white" /> : "Log in"}
            </button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
