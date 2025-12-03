import { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './log.css'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/homepage"); // redirect to homepage
    } catch (err) {
      alert(err.message);
    }
  };

  return (
  <div className="Containered" id="login">
    <form onSubmit={handleLogin}>
        <div className="inputs">
      <div className="logo-name">
      <img src="logo.jpg" alt="" sizes="30"/>
      <h2>Welcome MB food delivery</h2>
    </div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
         
      <button type="submit" className="login-btn">Login</button>
      <div className="go-to-login">
    <p>create new account</p>
      <a href="/register" className="switch">Register</a>
      </div>
      </div>
    </form>
    </div>
  );
}

export default Login;
         

       
   

