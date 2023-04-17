import { useState } from "react";

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  function handleName(e) {
    setFullName(e.target.value);
    // console.log(fullName)
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleRegister() {
    setUser([...user,{
        id: Date.now(),
        fullName: fullName,
        email: email,
        password: password
    }])
    setFullName('')
    setEmail('')
    setPassword('')
    console.log(user)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  localStorage.setItem('user', JSON.stringify(user))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">FullName</label>
        <input
          id="fname"
          type="text"
        //   autoComplete="off"
          value={fullName}
          placeholder="enter your name..."
          onChange={handleName}
          required
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="enter your email..."
          onChange={handleEmail}
          required
        />
        <br />

        <label htmlFor="pwd">Password</label>
        <input
          id="pwd"
          type="password"
          placeholder="enter your password..."
          value={password}
          onChange={handlePassword}
          required
        />
        <br />

        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}
