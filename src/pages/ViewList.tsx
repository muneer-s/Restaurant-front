import { useEffect, useState } from "react";
import { getRestaurants,deleteRestaurant } from "../api/api";
import { Button, List, ListItem, ListItemText } from "@mui/material";

interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: number;
}

const ViewList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants(); // Now TypeScript knows it's a Restaurant[]
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setRestaurants([]); // Ensure state is always an array
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      await deleteRestaurant(id);
      setRestaurants(restaurants.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  return (
    <List>
      {restaurants.map((restaurant) => (
        <ListItem key={restaurant.id} sx={{ borderBottom: "1px solid #ccc", mb: 1 }}>
          <ListItemText primary={restaurant.name} secondary={`Address: ${restaurant.address}, Contact: ${restaurant.contact}`} />
          <Button color="error" onClick={() => handleDelete(restaurant.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ViewList;
