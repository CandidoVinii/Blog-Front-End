import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import UserApis from '../helpers/ApisUser';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [conflictEmail, setConflitctEmail] = useState(false);

  const handleChange = (event) => {
    if(event.target.id === "email") setEmail(event.target.value);
    if(event.target.id === "password") setPassword(event.target.value);
    if(event.target.id === "username") setUsername(event.target.value);
    setConflitctEmail(false);
  }

  const handleClick = {
    createUser: async () => {
      const create = await UserApis.createUser(email, username, password);
      if(create.status === 201) navigate("/");
      if(create.status === 409) setConflitctEmail(true);
  }
};

  return (
    <div>
      <div>
        <label>Username
          <input
            type="text"
            id="username"
            onChange={handleChange}
          />
        </label>

        <label>E-mail
          <input
            type="email"
            id="email"
            onChange={handleChange}
          />
        </label>

        <label>Password
          <input
            type="password"
            id="password"
            onChange={handleChange}
          />
        </label>

        <button onClick={handleClick.createUser}>Register</button>
      </div>
      {
        conflictEmail ? (
          <p>User already registered</p>
        ) : null
      }
    </div>
  )
};

export default Register;