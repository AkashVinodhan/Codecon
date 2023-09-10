import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const inputstyle = {
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  input: {
    color: "white",
    background: "black",
  },
  label: { color: "white" },
  width: { xs: "90%", md: "40%" },
};

function Input({ setRecipes }) {
  const [input, setinput] = useState("");

  const fetchRecipes = () => {
    if (input !== "") {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.meals);
        });
    } else {
      alert("Enter a food name to search..");
    }
  };

  return (
    <Stack direction={"row"} justifyContent={"center"} gap={2} width={"100%"}>
      <TextField
        label="Search food or recipe..."
        variant="outlined"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        sx={inputstyle}
      />
      <Button
        variant="contained"
        onClick={fetchRecipes}
        sx={{ bgcolor: "red" }}
      >
        Search
      </Button>
    </Stack>
  );
}

export default Input;
