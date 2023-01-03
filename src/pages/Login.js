import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import UserApis from '../helpers/ApisUser';
import { setLocalStorage } from '../helpers/LocalStorage';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongField, setWrongField] = useState(false);

  const handleChange = (event) => {
    if(event.target.id === "email") setEmail(event.target.value);
    if(event.target.id === "password") setPassword(event.target.value);
  }

  const handleClick = {
    login: async () => {
      const result = await UserApis.loginUser(email, password);
      if(result.status === 400) setWrongField(true);
      if(result.status === 200){
        navigate('/home');
        setLocalStorage("token", result.data);
      }
    },
    createUser: () => {
      navigate('/register');
    },
    resetPassword: () => {
      navigate('/reset-password')
    }
  }

  return (
    <div>
      <div>
        <label>E-mail
          <input
            type="text"
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

        <button onClick={handleClick.login}>Login</button>
      </div>
      {wrongField ? (
        <p>Invalid login</p>
      ): null}
      <div>
        <button onClick={handleClick.resetPassword}>Reset Password</button>  
        <button onClick={handleClick.createUser}>Create account</button>
      </div>
    </div>
  )
};

export default Login;