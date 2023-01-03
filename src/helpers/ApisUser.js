import axios from "axios";

const url = "http://localhost:3001";

const UserApis = {
  loginUser: async (email, password) => {
    const config = {
      method: "post",
      url: `${url}/login`,
      data: {
        email,
        password
      }
    };
      return axios(config)
        .then((response) => response)
        .catch((error) => error.response);
  },
  createUser: async (email, displayName, password) => {
    const config = {
      method: "post",
      url: `${url}/user`,
      data: {
        email,
        displayName,
        password
      }
    };
      return axios(config)
        .then((response) => response)
        .catch((error) => error.response)
  },
  resetPassword: async (email, oldPassword, newPassword) => {
    const config = {
      method: "patch",
      url: `${url}/user/reset-password`,
      data: {
        email,
        oldPassword,
        newPassword
      }
    };
      return axios(config)
        .then((response) => response)
        .catch((error) => error.response)
  }
}

export default UserApis;