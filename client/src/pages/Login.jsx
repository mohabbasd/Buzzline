import React from "react";
import { Container, Paper } from "@mui/material";

const Login = () => {
  return (
    <Container component={"main"} maxWidth="sx">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        This is the Login page
      </Paper>
    </Container>
  );
};

export default Login;
