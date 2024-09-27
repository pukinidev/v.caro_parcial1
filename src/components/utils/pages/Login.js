import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const user = {
  email: "puki@gmail.com",
  password: "1234",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (user.email === email && user.password === password) {
      console.log("Usuario correcto");
      setError(false);
      navigate("/home");
    } else {
      console.log("Usuario incorrecto");
      setError(true);
    }
  };

  return (
    <Container spacing={2} sx={{ width: "100%", marginTop: "2rem" }}>
      <Stack spacing={2}>
        <Item elevation={0}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Adopta un Robot con Robot Lovers
          </Typography>
        </Item>
        <img src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__" alt="robot" />
        <Item elevation={0}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Inicia sesión
          </Typography>
        </Item>
        <Item elevation={0} sx={{ textAlign: "center" }}>
          <FormControl>
            <FormLabel
              sx={{
                textAlign: "left",
              }}
            >
              Correo electrónico
            </FormLabel>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
              onChange={handleEmail}
            />
            <FormLabel
              sx={{
                textAlign: "left",
              }}
            >
              Contraseña
            </FormLabel>
            <TextField
              id="password"
              label="Contraseña"
              type="password"
              variant="outlined"
              onChange={handlePassword}
              required
            />
            {error && (
              <Typography color="error">
                Error de autenticación. Revise sus crendenciales.
              </Typography>
            )}
          </FormControl>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <Grid size={2}>
              <Item elevation={0}>
                <Button onClick={handleSubmit} variant="contained">
                  Iniciar sesión
                </Button>
              </Item>
            </Grid>
            <Grid>
              <Item elevation={0}>
                <Button variant="contained" color="error">
                  Cancelar
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Container>
  );
}

export default Login;
