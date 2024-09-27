import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Card, Container, Grid2, Typography, Box, Button, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Home() {
  const [robots, setRobots] = useState([]);
  const [robot, setRobot] = useState({});

  useEffect(() => {
    const URL = "http://localhost:3001/robots";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setRobots(data);
      });
  }, []);

  return (
    <Container
      spacing={2}
      sx={{ width: "100%", marginTop: "4rem", marginBottom: "2rem" }}
    >
      <Stack spacing={2}>
        <Item elevation={0}>
          <Typography variant="h4">Adopta un Robot con Robot Lovers</Typography>
        </Item>
        <img
          src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
          alt="robot"
        />
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Modelo</TableCell>
                    <TableCell align="right">Empresa Fabricante</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {robots.map((robot) => (
                    <TableRow key={robot.id} onClick={() => setRobot(robot)}>
                      <TableCell  component="th" scope="row">
                        {robot.id}
                      </TableCell>
                      <TableCell align="right">{robot.nombre}</TableCell>
                      <TableCell align="right">{robot.modelo}</TableCell>
                      <TableCell align="right">
                        {robot.empresaFabricante}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
          <Grid2 item>
            <Card
                sx={{
                    padding: "1rem",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "1rem",
                }}
            >
              <CardContent>
              <Typography variant="h3"
              sx={{
                textAlign: "center",
                marginBottom: "1rem",
              }}>{robot.nombre}</Typography>
              <Typography variant="body1">Año fabricacion: {robot.añoFabricacion}</Typography>
              <Typography variant="body1">Capacida de Procesamiento: {robot.capacidadProcesamiento}</Typography>
             
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Stack>
    </Container>
  );
}

export default Home;
