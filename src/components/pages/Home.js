import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Robot from "./Robot";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function Home() {
  const [robots, setRobots] = useState([]);
  const [robot, setRobot] = useState({});
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const URL = "http://localhost:3001/robots";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setRobots(data);
      });
  }, []);

  const handleClick = (robot) => {
    setRobot(robot);
    setSelected(true);
  };

  return (
    <Container spacing={2} sx={{ width: "100%", marginBottom: "4rem" }}>
      <Stack spacing={2}>
        <Item elevation={0}>
          <Typography
            variant="h4"
            sx={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Adopta un Robot con Robot Lovers!
          </Typography>
        </Item>
        <img
          src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
          alt="robot"
        />
        <Grid2 container spacing={2}>
          <Grid2 item xs={2}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      ID
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Nombre
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Modelo
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Empresa Fabricante
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {robots.map((robot) => (
                    <TableRow key={robot.id} onClick={() => handleClick(robot)}>
                      <StyledTableCell component="th" scope="row">
                        {robot.id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {robot.nombre}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {robot.modelo}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {robot.empresaFabricante}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
          <Grid2 item>{selected && <Robot robot={robot} />}</Grid2>
        </Grid2>
      </Stack>
    </Container>
  );
}

export default Home;
