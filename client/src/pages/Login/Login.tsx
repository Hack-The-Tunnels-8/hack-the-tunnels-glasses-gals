import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();
  const adminEmail = "admin@email.com";
  const adminPass = "password";

  const attemptLogin = async (pw: string, user: string) => {
    try {
      const message = await login(username, password);
      setMessage(message);
      // if (pw === adminPass && user === adminEmail){
        
      // }
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <form onSubmit={(e) => {e.preventDefault(); attemptLogin(password, username);}}>
        <div className="login-page">
          <h1>Login</h1>
          <button onClick={() => attemptLogin(password, username)}>
        
            Login 
          </button>

          <div>
            <input placeholder="email" onChange={(e) => {setUsername(e.currentTarget.value)}}/>
          </div>
          
          <div>
            <input placeholder="password" onChange={(e) => {setPassword(e.currentTarget.value)}}/>
          </div>

          {message && <p>{message}</p>}
        </div>
      </form>
    </Page>
  );
}

export default Login;
