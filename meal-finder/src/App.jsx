import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "./components/Input";
import FoodGrid from "./components/FoodGrid";

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(./bg.jpeg)",
        backgroundSize: "cover",
        padding: "10px",
      }}
    >
      <Typography variant="h5" textAlign={"center"} m={3}>
        Recipe Finder
      </Typography>
      <Input setRecipes={setRecipes} />
      {recipes && <FoodGrid recipes={recipes} />}
      {recipes == null && (
        <Alert severity="error" sx={{ m: 5 }}>
          <AlertTitle>Error</AlertTitle>
          No Recipes found ☹{" "}
          <strong>Try a different food or ingredient!</strong>
        </Alert>
      )}
    </Box>
  );
}

export default App;
