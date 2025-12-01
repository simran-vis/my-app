import ENDPOINTS from "../constants/endpoints";
import api from "./api";

// REGISTER API
export const registerUser = async (payload) => {
  try {
    const res = await api.post(ENDPOINTS.REGISTER, payload);
    return res.data;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

// LOGIN API
export const loginUser = async (payload) => {
  try {
    const res = await api.post(ENDPOINTS.LOGIN, payload);
    return res.data;  // return user + token
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};
