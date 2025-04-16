import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRestaurantById, updateRestaurant } from "../api/api";
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
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    setIsLoading(true);
    try {
      if (id) {
        const data = await getRestaurantById(parseInt(id));
        setRestaurant(data);
      }
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
    
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
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

    setIsSubmitting(true);
    try {
      await updateRestaurant(restaurant.id, restaurant);
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/viewlist");
      }, 1500);
    } catch (error) {
      console.error("Error updating restaurant:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading restaurant details...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12 px-4">
        {/* Success Toast Notification */}
        {openSnackbar && (
          <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>Restaurant updated successfully!</div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold">Edit Restaurant</h2>
              <p className="opacity-80 mt-1">Update the restaurant information below</p>
            </div>

            {/* Form Section */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Restaurant ID Display */}
                <div className="bg-gray-50 rounded-lg p-4 inline-block">
                  <span className="text-sm text-gray-500">Restaurant ID:</span>
                  <span className="ml-2 font-medium text-gray-800">#{restaurant.id}</span>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={restaurant.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter restaurant name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={restaurant.address}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.address ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter restaurant address"
                  />
                  {errors.address && (
                    <p className="mt-1 text-red-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Contact Field */}
                <div>
                  <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={restaurant.contact}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.contact ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter 10-digit contact number"
                  />
                  {errors.contact && (
                    <p className="mt-1 text-red-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 mt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleUpdate}
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium disabled:opacity-70 flex-1 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Updating...
                      </>
                    ) : (
                      "Update Restaurant"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/viewlist")}
                    className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 font-medium flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditList;