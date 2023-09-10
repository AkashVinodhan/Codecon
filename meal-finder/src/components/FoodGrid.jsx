import { Button, Card, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

function FoodGrid({ recipes }) {
  return (
    <Grid container spacing={2} mt={3} p={3}>
      {recipes.map((recipe, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            sx={{
              padding: "10px",
            }}
          >
            <Stack direction={"column"} alignItems={"center"} gap={3}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                height={"200px"}
                width={"90%"}
                style={{ objectFit: "cover" }}
              />
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {recipe.strMeal}
              </Typography>
              <Link href={recipe.strYoutube} target="_blank">
                <Button
                  variant="contained"
                  endIcon={<YouTubeIcon />}
                  sx={{ bgcolor: "red" }}
                >
                  Watch Video
                </Button>
              </Link>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FoodGrid;
