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

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (user.user === user && user.password === password) {
      console.log("Usuario correcto");
      setError(false);
      navigate("/home");
    } else {
      console.log("Usuario incorrecto");
      setError(true);
    }
  };

  return (
    <Container spacing={2} sx={{ marginTop: "1rem" }}>
      <Stack spacing={2}>
        <Item elevation={0}>
          <Typography
            variant="h4"
            sx={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Adopta un Robot con Robot Lovers!
          </Typography>
        </Item>
        <img
          src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
          alt="robot"
        />
        <Item elevation={0}>
          <Typography
            
            sx={{ textAlign: "center", color: "#000000", fontSize: "32px", fontWeight: "700", paddingBottom: "0px" }}
          >
            Inicio de sesión
          </Typography>
        </Item>
        <Item elevation={0} sx={{ textAlign: "center" }}>
          <FormControl>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Nombre de usuario
            </FormLabel>
            <TextField
              variant="outlined"
              required
              fullWidth
              onChange={handleUser}
              sx={{
                marginBottom: "0.3rem",
                width: "556px",
                backgroundColor: "rgba(217, 217, 217, 1)",
                borderRadius: "0",
              }}
            />
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Contraseña
            </FormLabel>
            <TextField
              type="password"
              variant="outlined"
              onChange={handlePassword}
              required
              sx={
                {
                  backgroundColor: "rgba(217, 217, 217, 1)",
                }
              }
            />
          </FormControl>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            marginTop={2}
            spacing={4}
          >
            <Grid>
              <Item elevation={0}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "rgba(0, 59, 147, 1)",
                    textTransform: "none",
                    fontSize: "20px",
                    width: "253px",
                    height: "53px",
                    borderRadius: "0px",
                    boxShadow: "0px",
                  }}
                >
                  Ingresar
                </Button>
              </Item>
            </Grid>
            <Grid>
              <Item elevation={0}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    backgroundColor: "rgba(231, 93, 93, 1)",
                    color: "#000000",
                    textTransform: "none",
                    fontSize: "20px",
                    fontWeight: "bold",
                    width: "253px",
                    height: "53px",
                    borderRadius: "0px",
                    boxShadow: "0px",
                  }}
                >
                  Cancelar
                </Button>
              </Item>
            </Grid>
          </Grid>
          {error && (
            <Typography
              sx={{
                textAlign: "center",
                color: "rgba(205, 50, 50, 1)",
                fontSize: "21px",
                fontWeight: "700",
              }}
            >
              Error de autenticación. Revise sus crendenciales.
            </Typography>
          )}
        </Item>
      </Stack>
    </Container>
  );
}

export default Login;
