import { useState } from "react";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    function handleEmail(e) {
        setEmail(e.target.value);
        console.log(email)
      }
    
      function handlePassword(e) {
        setPassword(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
      }

      function handleLogin() {
        // setuse
      }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="enter your email..." onChange={handleEmail}/>{" "}
        <br />
        
        <label htmlFor="pwd">Password</label>
        <input
          id="pwd"
          type="password"
          placeholder="enter your password..."
          onChange={handlePassword}
        />
        <br />

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
