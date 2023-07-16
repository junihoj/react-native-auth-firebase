import axios from "axios";
import { API_KEY } from "@env";
const api_url = "https://identitytoolkit.googleapis.com/v1/accounts:";
export const createUser = async (email, password) => {
  await authenticate("signUp", email, password);
};

export const authenticate = async (mode, email, password) => {
  const url = `${api_url}:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  return response;
};

export const loginUser = async (email, password) => {
  await authenticate("signInWithPassword", email, password);
};
