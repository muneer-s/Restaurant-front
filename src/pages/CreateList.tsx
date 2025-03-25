import ReusableForm from "../components/ReusableForm";
import Api from "../api/api";


const CreateList = () => {
    const handleFormSubmit = async (data: { name: string; address: string; contact: number }) => {
        try {
          const response = await Api.post("/lists", data); 
          console.log("Form Submitted Successfully:", response.data);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };

      
      return <ReusableForm onSubmit={handleFormSubmit} />;

}

export default CreateList