import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image3 from "../../public/assets/3.jpg";

const CreateList = () => {
  const [formData, setFormData] = useState({ name: "", address: "", contact: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitTime, setSubmitTime] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    let redirectTimer:any;
    if (showSuccess) {
      redirectTimer = setTimeout(() => {
        navigate("/");
      }, 5000);
    }
    return () => clearTimeout(redirectTimer);
  }, [showSuccess, navigate]);

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

    setIsSubmitting(true);
    try {
      await Api.post("/", formData);
      setSubmitTime(new Date().toLocaleTimeString());
      setShowSuccess(true);
      setFormData({ name: "", address: "", contact: "" });
    } catch (error) {
      Swal.fire("Error!", "Failed to submit the form. Please try again.", "error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const returnToForm = () => {
    setShowSuccess(false);
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Header />
        
        <main className="flex-grow flex items-center justify-center p-6">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative py-12 px-8">
              {/* Success Animation */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 left-0 w-full h-10 bg-blue-500 opacity-10 animate-ping rounded-full"></div>
                <div className="absolute -bottom-10 right-0 w-full h-10 bg-purple-500 opacity-10 animate-ping rounded-full"></div>
                <div className="absolute top-20 left-20 w-40 h-40 bg-green-500 opacity-5 animate-pulse rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 opacity-5 animate-pulse rounded-full"></div>
              </div>
              
              {/* Success Content */}
              <div className="relative z-10 text-center">
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Submission Successful!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your information has been successfully added to our directory.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <p className="text-sm text-gray-500">Submission details:</p>
                  {/* <p className="text-md font-medium text-gray-700">Name: {formData.name || "N/A"}</p> */}
                  <p className="text-md font-medium text-gray-700">Time: {submitTime}</p>
                </div>
                
                <p className="text-sm text-gray-500 mb-8">
                  You will be automatically redirected to the home page in 5 seconds.
                </p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate('/')}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                  >
                    Go to Home
                  </button>
                  <button
                    onClick={returnToForm}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10 flex items-center justify-center">
              <div className="text-center p-6">
                <h1 className="text-4xl font-bold text-white mb-2">Create Your List</h1>
                <p className="text-white text-lg opacity-90">Add your information to our directory</p>
              </div>
            </div>
            <img
              src={image3}
              alt="Restaurant scene"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Form Section */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800">New Entry</h2>
              <p className="text-gray-600 mt-2">Please fill in the details below</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-700 font-medium block">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter complete address"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-700 font-medium block">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="10-digit phone number"
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
                >
                  Back to List
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateList;