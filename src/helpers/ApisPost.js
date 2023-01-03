import axios from "axios";
import { getLocalStorage } from "./LocalStorage";

const url = "http://localhost:3001";
const token = getLocalStorage("token");

const ApiPost = {
  getPosts: async () => {
    const config = {
      method: "get",
      url: `${url}/post`,
      headers: { authorization: token.token }
    };
      return axios(config)
        .then((response) => response)
        .catch((error) => error.response);
  },
  getPostsId: async (id) => {
    const config = {
      method: "get",
      url: `${url}/post/${id}`,
      headers: { authorization: token.token }
    };
      return axios(config)
        .then((response) => response)
        .catch((error) => error.response);
  },
  searchPost: async (search) => {
    const config = {
      method: "get",
      url: `${url}/post/search?q${search}`,
      headers: { authorization: token.token }
    };
      return axios(config)
        .then((response) => response)
        .catch((error) => error.response);
  }
};

export default ApiPost;