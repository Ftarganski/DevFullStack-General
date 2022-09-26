import React from "react";
import cover from "../../assets/img/login.jpg";
import { Grid, Stack, TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  return (
    <Grid container spacing={2} style={{ height: "100vh" }}>
      <Grid
        item
        sx={{ padding: "10px", boxSizing: "border-box" }}
        xs={0}
        md={7}
        lg={8}
      >
        <Stack
          spacing={2}
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={cover} style={{ width: "100%" }} alt="Logo" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Stack
          spacing={2}
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 16,
            paddindRigth: 16,
            boxSizing: "borde-box",
          }}
        >
          <h1>Entre com seu usuário</h1>
          <Grid container spacing={2} sx={{ marginBotton: "10px" }}>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "16px",
              }}
            >
              <TextField
                fullwidth="true"
                label="E-mail"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "16px",
              }}
            >
              <TextField
                fullwidth="true"
                label="Senha"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "16px",
              }}
            >
              <Button fullwidth="true" variant="contained" endIcon={<LoginIcon />}>
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
