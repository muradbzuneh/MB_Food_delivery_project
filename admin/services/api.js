import { getAuth } from "firebase/auth";

const API_URL = "http://localhost:3000/api";

export const fetchWithAuth = async (endpoint, options = {}) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in");
  }

  const token = await user.getIdToken();

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
};