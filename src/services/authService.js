import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

export const signup = async (formData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/users/signup`, formData);

    if (res.data.error) {
      throw new Error(res.data.error);
    }

    localStorage.setItem('token', res.data.token)
    
    const user = JSON.parse(atob(res.data.token.split(".")[1]))
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signin = async (userData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/users/signin`, userData);
    if (res.data.error) {
      throw Error(res.data.error);
    }
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
      // https://www.npmjs.com/package/atob

      const user = JSON.parse(atob(res.data.token.split(".")[1]))
      return user;

    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

///////////
export const getUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const user = JSON.parse(atob(token.split('.')[1]));
  return user;
}