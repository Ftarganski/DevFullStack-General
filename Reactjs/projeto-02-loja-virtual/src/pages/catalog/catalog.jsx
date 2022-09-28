import React from "react";
import { products, categories } from "./products";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginTop: "10px",
        paddingLeft: "32px",
        paddingRight: "32px",
        boxSizing: "border-box",
      }}
    >
      {Object.keys(products).map((id) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              position: "relative",
              paddingTop: "0 !important",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "#fff",
                fontWeight: "bold",
                background: "#1976d2",
                boxSizing: "border-box",
                padding: "10px",
                borderRadius: "0 0 0 15px",
              }}
            >
              10%
            </span>

            <img src={products[id].image} style={{ width: "100%" }} />

            {products[id].categories.map((categoryId) => {
              return (
                <span
                  style={{
                    backgroundColor: "#1976d2",
                    boxSizing: "border-box",
                    padding: "2px 5px",
                    borderRadius: "5px",
                    marginRigth: "5px",
                    color: "#fff",
                    marginTop: "8px",
                    float: "left",
                  }}
                >
                  {categories[categoryId].name}
                </span>
              );
            })}

            <Typography
              variant="h4"
              component="h2"
              style={{
                width: "100%",
                float: "left",
                display: "block",
                marginTop: "16px",
                marginButton: "8px",
              }}
            >
              {products[id].name}
            </Typography>

            <Typography
              variant="p"
              component="p"
              style={{
                float: "left",
                marginBotton: "16px",
              }}
            >
              {products[id].description.substring(0, 100)}...
            </Typography>

            <Link to={"../product" + id}>
              <Button fullWidth variant="contained">
                Ver Produto
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Catalog;
