import { useState } from "react";
import './Log.css'
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fetchWithAuth } from "../../services/api.js";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

   const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // save extra user data to Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        fname,
        lname,
        email
      });

      alert("Registered successfully!");
      navigate("/");
      await fetchWithAuth("/auth/sync", {
  method: "POST",
});
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="Containered">
    
    <form onSubmit={handleRegister}>
       <div className="inputs"> 
        <div className="logo-name">
      <img src="logo.jpg" alt="" sizes="30"/>
      <h2>Welcome MB food delivery</h2>
    </div>
         <h2>Create Account</h2>

      <input type="text" placeholder="First Name"
        value={fname} onChange={e => setFname(e.target.value)} required />

      <input type="text" placeholder="Last Name"
        value={lname} onChange={e => setLname(e.target.value)} required />

      <input type="email" placeholder="Email"
        value={email} onChange={e => setEmail(e.target.value)} required />

      <input type="password" placeholder="Password"
        value={password} onChange={e => setPassword(e.target.value)} required />
        <div className="terms">
            <input type="checkbox" required />
            <span>
             Terms, Data Policy, and Cookies
              Policy.
            </span>
        </div>
        
      <button type="submit" className="login-btn">Register</button>
      <div className="go-to-login">
    <p>Have an account ?</p>
      <a href="/" className="switch">Login</a>
      </div>
    
      </div>
    </form>
    </div>
  );
}

export default Register;
