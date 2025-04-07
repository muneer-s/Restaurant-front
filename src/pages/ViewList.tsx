import { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant } from "../api/api";
import { Button, Container, Grid, Card, CardContent, CardActions, Typography ,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: number;
}

const ViewList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setRestaurants([]);
    }
  };

  const confirmDelete = (id: number) => {
    setSelectedRestaurantId(id);
    setOpenDialog(true);
  };

  const handleDelete = async () => {
    if (selectedRestaurantId !== null) {
      try {
        await deleteRestaurant(selectedRestaurantId);
        setRestaurants(restaurants.filter((r) => r.id !== selectedRestaurantId));
      } catch (error) {
        console.error("Error deleting restaurant:", error);
      } finally {
        setOpenDialog(false);
        setSelectedRestaurantId(null);
      }
    }
  };

  return (
    <>
      <Header />
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {restaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{restaurant.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Address: {restaurant.address}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Contact: {restaurant.contact}
                  </Typography>
                </CardContent>
                <CardActions>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/editlist/${restaurant.id}`)}
                  >
                    Edit
                  </Button>

                  <Button variant="contained" color="error" onClick={() => confirmDelete(restaurant.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>



      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this restaurant? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      </div>
    </>
  );
};

export default ViewList;
