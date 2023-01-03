import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import UserApis from '../helpers/ApisUser';

function Reset() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conflictEmail, setConflitctEmail] = useState(false);

  const handleChange = (event) => {
    if(event.target.id === "email") setEmail(event.target.value);
    if(event.target.id === "old_password") setOldPassword(event.target.value);
    if(event.target.id === "new_password") setNewPassword(event.target.value);
    setConflitctEmail(false);
  }

  const handleClick = {
    resetPass: async () => {
      const create = await UserApis.resetPassword(email, oldPassword, newPassword);
      if(create.status === 200) navigate("/");
      if(create.status === 400) setConflitctEmail(true);
  }
};

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

        <label>Old Password
          <input
            type="password"
            id="old_password"
            onChange={handleChange}
          />
        </label>

        <label>New Password
          <input
            type="password"
            id="new_password"
            onChange={handleChange}
          />
        </label>

        <button onClick={handleClick.resetPass}>Change Password</button>
      </div>
      {
        conflictEmail ? (
          <p>E-mail or old password incorrect</p>
        ) : null
      }
    </div>
  )
};

export default Reset;