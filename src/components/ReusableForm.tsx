// interface FormData {
//   name: string;
//   address: string;
//   contact: string;
// }

// interface ReusableFormProps {
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
//   onSubmit: (e: React.FormEvent) => void;
// }

// const ReusableForm: React.FC<ReusableFormProps> = ({ formData, setFormData, onSubmit }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
//       {/* Name Input */}
//       <div>
//         <label className="block text-gray-600 font-medium">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Enter name"
//         />
//       </div>

//       {/* Address Input */}
//       <div>
//         <label className="block text-gray-600 font-medium">Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Enter address"
//         />
//       </div>

//       {/* Contact Input */}
//       <div>
//         <label className="block text-gray-600 font-medium">Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Enter 10-digit contact number"
//         />
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ReusableForm;
