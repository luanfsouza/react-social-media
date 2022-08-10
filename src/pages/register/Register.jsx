import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
export default function Login (){
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate()

  const handleClick = async (e)=>{
e.preventDefault()
if(passwordAgain.current.value != password.current.value){
  passwordAgain.current.setCustomValidity("Passswords don't match.")
  return
} else{
  const user = {
    username: username.current.value,
    email: email.current.value,
    password: password.current.value
  }
  try{
    axios.post(
      "https://api-react-social-media.herokuapp.com/api/auth/register",
      user
    );
navigate("/login")
  } catch(err){
    console.log(err)
  }
  
}
  }
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
            <form  className="loginBox" onSubmit={handleClick}>
              <input type="text" required ref={username} placeholder="Username" />
              <input type="email" required ref={email} placeholder="Email" />

              <input type="text" required ref={password} placeholder="Password" minLength="6"/>
              <input type="text" required ref={passwordAgain}placeholder="Password again" />
              <button className="loginButton" type='submit'>Sing Up</button>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}