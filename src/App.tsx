import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <p>Welcome to Home</p>

        {/* Buttons for Navigation */}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={() => navigate("/viewlist")}>
            View List
          </Button>
          <Button variant="contained" color="secondary" onClick={() => navigate("/createlist")}>
            Create List
          </Button>
          <Button variant="contained" color="success" onClick={() => navigate("/editlist")}>
            Edit List
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default App;
