import React from "react";
import Header from "./components/header/Header";
import Home from "./home/Home";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
};
export default App;
