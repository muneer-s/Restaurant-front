import { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant } from "../api/api";
import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Fade,
  Chip,
  Divider
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
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
      <Box sx={{
        background: "linear-gradient(to bottom, #000000, #1a1a1a)",
        minHeight: "100vh",
        py: 4
      }}>
        <Container>
          <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            
            {/* <Chip
              label={`${restaurants.length} Restaurants`}
              color="#ccbc2f"
              sx={{ fontWeight: "bold" }}
            /> */}
            <Chip
              label={`${restaurants.length} Restaurants`}
              sx={{
                fontWeight: "bold",
                backgroundColor: "#ccbc2f",
                color: "#fff"  // Text color
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {restaurants.length > 0 ? (
              restaurants.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                  <Fade in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                    <Card sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)"
                      }
                    }}>
                      <Box sx={{
                        height: 12,
                        backgroundColor: "#ccbc2f"
                      }} />

                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                          <RestaurantIcon sx={{ mr: 1, color: "primary.main" }} />
                          <Typography variant="h5" fontWeight="bold" noWrap>
                            {restaurant.name}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 1.5,
                          color: "text.secondary"
                        }}>
                          <LocationOnIcon sx={{ mr: 1, mt: 0.3, fontSize: 20, color: "error.main" }} />
                          <Typography variant="body2" color="text.secondary">
                            {restaurant.address}
                          </Typography>
                        </Box>

                        <Box sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "text.secondary"
                        }}>
                          <PhoneIcon sx={{ mr: 1, fontSize: 20, color: "success.main" }} />
                          <Typography variant="body2" color="text.secondary">
                            {restaurant.contact}
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ p: 2, pt: 0, justifyContent: "flex-end" }}>
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          startIcon={<EditIcon />}
                          onClick={() => navigate(`/editlist/${restaurant.id}`)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="contained"
                          size="small"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => confirmDelete(restaurant.id)}
                          sx={{ ml: 1 }}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Fade>
                </Grid>
              ))
            ) : (
              <Box sx={{
                width: "100%",
                textAlign: "center",
                py: 10,
                color: "white"
              }}>
                <Typography variant="h6">
                  No restaurants found
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Add a new restaurant to get started
                </Typography>
              </Box>
            )}
          </Grid>
        </Container>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          PaperProps={{
            sx: { borderRadius: 2 }
          }}
        >
          <DialogTitle sx={{ pb: 1 }}>
            Confirm Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this restaurant? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ p: 2, pt: 0 }}>
            <Button
              onClick={() => setOpenDialog(false)}
              color="inherit"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default ViewList;