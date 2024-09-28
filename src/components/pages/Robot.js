import { useEffect, useState } from "react";
import { Card, Container, Typography, Box, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Robot({ robot }) {
  const [selectedRobot, setSelectedRobot] = useState({});

  const imageURL = `https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/main/images/robot${selectedRobot.id}.png`;

  useEffect(() => {
    const URL = `http://localhost:3001/robots/${robot.id}`;
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setSelectedRobot(data);
        console.log(data);
      });
  }, [robot.id]);

  return (
    <Card
      elevation={0}
      sx={{
        paddingTop: "0.2rem",
        paddingRight: "1rem",
        paddingLeft: "1rem",
        backgroundColor: "#f5f5f5",
        width: "100%",
        maxWidth: "400px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        border: "1.5px solid #000000",
        borderRadius: "0", 
      }}
    >
        <CardContent>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          paddingBottom: "0.4rem",
          fontWeight: "bold",
        }}
      >
        {selectedRobot.nombre}
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            width: 210,
            border: "1px solid black",
          }}
          src={imageURL}
          alt="robotsito"
        />
      </Container>
      <Typography
        variant="body1"
        sx={{
          wordWrap: "break-word",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 18, marginRight: "0.2rem" }} />
        <strong>Año fabricacion:</strong>{" "}
        <span style={{ marginLeft: "2px" }}></span>
        {selectedRobot.anoFabricacion}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          wordWrap: "break-word",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 18,  marginRight: "0.2rem" }} />
        <strong>Capacidad de Procesamiento: </strong>
        {""}
        <span style={{ marginLeft: "4px" }}>
          {selectedRobot.capacidadProcesamiento}
        </span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          flexWrap: { xs: "wrap" },
          overflow: "hidden",
          alignItems: "center",
          
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 18,  marginRight: "0.2rem" }} />
        <strong>Humor:</strong> 
        <span style={{ marginLeft: "4px" }}>
        {selectedRobot.humor}
        </span>
      </Typography>
      </CardContent>
    </Card>
  );
}

export default Robot;
