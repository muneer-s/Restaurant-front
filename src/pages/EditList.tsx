import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRestaurantById, updateRestaurant } from "../api/api";
import { Button, Container, TextField, Typography, Snackbar, Alert } from "@mui/material";
import Header from "../components/Header";

interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: number;
}

const EditList = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState<Restaurant>({
    id: 0,
    name: "",
    address: "",
    contact: 0,
  });

  const [errors, setErrors] = useState<{ name: string; address: string; contact: string }>({
    name: "",
    address: "",
    contact: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    try {
      if (id) {
        const data = await getRestaurantById(parseInt(id));
        setRestaurant(data);
      }
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", address: "", contact: "" };

    if (!restaurant.name.trim()) {
      newErrors.name = "Name must not be empty";
      valid = false;
    }
    if (!restaurant.address.trim()) {
      newErrors.address = "Address must not be empty";
      valid = false;
    }
    if (!restaurant.contact.toString().trim()) {
      newErrors.contact = "Contact must not be empty";
      valid = false;
    } else if (!/^\d{10}$/.test(restaurant.contact.toString())) {
      newErrors.contact = "Contact must be exactly 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  const handleUpdate = async () => {
    if (!validateForm()) return;

    try {
      await updateRestaurant(restaurant.id, restaurant);
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/viewlist");
      }, 1500);
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, maxWidth: 500 }}>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }} 
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
            Restaurant updated successfully!
          </Alert>
        </Snackbar>



        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Edit Restaurant
        </Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={restaurant.address}
          onChange={handleChange}
          margin="normal"
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          fullWidth
          label="Contact"
          name="contact"
          type="number"
          value={restaurant.contact}
          onChange={handleChange}
          margin="normal"
          error={!!errors.contact}
          helperText={errors.contact}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 2 }}>
          Update
        </Button>


      </Container>
    </>
  );
};

export default EditList;
