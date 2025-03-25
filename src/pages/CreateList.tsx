import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";

const CreateList = () => {
  const [formData, setFormData] = useState({ name: "", address: "", contact: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.name.trim()) {
      Swal.fire("Error", "Name is required", "error");
      return false;
    }
    if (!formData.address.trim()) {
      Swal.fire("Error", "Address is required", "error");
      return false;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      Swal.fire("Error", "Contact must be a 10-digit number", "error");
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await Api.post("/", formData);
      Swal.fire("Success!", "Form submitted successfully!", "success").then(() => navigate("/"));
      setFormData({ name: "", address: "", contact: "" });
    } catch (error) {
      Swal.fire("Error!", "Failed to submit the form. Please try again.", "error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Create New List</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter address"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter 10-digit contact number"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateList;
