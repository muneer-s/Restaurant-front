import axios from "axios";

// create Axios instance
const API  = axios.create({
  baseURL: "http://localhost:3000/api", 
  // baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api", 
  headers: {
    "Content-Type": "application/json",
  },
});
interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: number;
}

// Fetch all restaurants
export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await API.get<Restaurant[]>("/"); // Ensure the correct endpoint
  return response.data;
};

// Create a restaurant
export const createRestaurant = async (data: { name: string; address: string; contact: number }) => {
  const response = await API.post("/", data);
  return response.data;
};

// Update a restaurant
export const updateRestaurant = async (id: number, data: { name: string; address: string; contact: number }) => {
  const response = await API.put(`/${id}`, data);
  return response.data;
};

// Delete a restaurant
export const deleteRestaurant = async (id: number) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};

export default API ;
