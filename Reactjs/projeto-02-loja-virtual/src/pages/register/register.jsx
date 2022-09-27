import React, { useState } from "react";
import cover from "../../assets/img/login.jpg";
import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { BuildTwoTone, Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [visibilityToggle, setVisibilityToggle] = useState(false);

  const toggleVisibility = () => {
    setVisibilityToggle(!visibilityToggle);
  };

  return (
    <Grid container spacing={2} styla={{ hight: "100vh" }}>
      <Grid
        className="leftSide"
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
            alignIten: "center",
          }}
        >
          <img src={cover} style={{ width: "100vw" }} alt="Logo" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Stack
          spacing={2}
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 16,
            paddingLeft: 16,
            boxSizing: "border-box",
          }}
        >
          <img src={logo} style={{ width: "150px" }} alt="Logo" />
          <h1>Cadastre-se</h1>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField
                fullWidth="true"
                label="Usuário"
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField
                fullWidth="true"
                label="E-mail"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Senha</InputLabel>
                <OutlinedInput
                  color="primary"
                  fulWidth="true"
                  label="Senha"
                  type={visibilityToggle ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Exibir"
                        onClick={toggleVisibility}
                      >
                        {visibilityToggle ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ margimBottom: "16px" }}>
              <TextField
                color="primary"
                fullWidth="true"
                label="Confirmar"
                type={visibilityToggle ? "text" : "password"}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sx={{ margimBottom: "16px" }}>
              <Button
                fullWidth="true"
                variant="contained"
                endIcon={<LoginIcon />}
              >
                Cadastrar
              </Button>
            </Grid>
            <Link
              style={{ textAlign: "center", display: "block", width: "100%" }}
              to="/login"
            >
              Entrar
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Register;
