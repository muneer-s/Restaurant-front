import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { createRestaurant } from "../api/api";


interface FormData {
  name: string;
  address: string;
  contact: number;
}

interface ReusableFormProps {
  onSubmit: (data: FormData) => void;
}

const ReusableForm: React.FC<ReusableFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    contact: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createRestaurant(formData);
      alert("Restaurant created successfully!");
      setFormData({ name: "", address: "", contact: 0 });
    } catch (error) {
      console.error("Error creating restaurant:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" mb={2}>Create List</Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        margin="normal"
        type="number"
        required
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ReusableForm;
