import axios from "axios";

const API  = axios.create({
  // baseURL: "http://localhost:3000/api", 
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`, 
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
  const response = await API.get<Restaurant[]>("/");
  return response.data;
};

export const getRestaurantById = async (id: number):Promise<Restaurant> => {
  const response = await API.get<Restaurant>(`/${id}`);
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
