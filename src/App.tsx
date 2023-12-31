import { Box } from "@mui/material";
import Router from "./routes/Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  direction: "rtl",
  // other theme properties
});

function App() {
  return (
    <Box bgcolor={"#F5F5F5"} minHeight={"100vh"}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Router />
      </ThemeProvider>
    </Box>
  );
}

export default App;
