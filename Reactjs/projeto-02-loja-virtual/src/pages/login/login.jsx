import cover from "../../assets/img/login.jpg"
import { Grid, Stack, TextField, Button } from "@mui/material";
import { boxSizing } from "@mui/system";

const Login = () => {
  return (
    <Grid container >
      <Grid item sx={
        {
            padding: '10px',
            boxSizing: 'border-box',
        }
      }
      xs={0} md={7} lg={8}>
        <Stack spacing={2} style={{
        height: '100vh',
        justifyContent: 'center',
            alignItems: 'center',
    }}>
        <img src={cover} style={{
            width: '100%'
            }} alt='Logo'/>
      </Stack>
    <Grid item xs={12} md={5} lg={4}>
        <Stack spacing={2} style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 16,
            paddindRigth: 16,
            boxSizing: 'borde-box',
        }}>

                <h1>Entre com seu usuário</h1>
                <Grid container  sx={{
                    marginBotton: '10px',
                }}>

                    <Grid item xs={12}>
                    <TextField fullwidth label="E-mail" type="text" variant="Outlined"/>
                    </Grid>

                    <Grid item xs={12}>
                    <TextField fullwidth label="Senha" type="password" variant="Outlined"/>
                    </Grid>

                    <Grid item xs={12}>
                    <Button fullwidth variant="contained" endIcon={<LoginIcon/>}>Entrar</Button>
                    </Grid>

                </Grid>
        </Stack>
      </Grid>
    </Grid>
    
  );
};

export default Login;
