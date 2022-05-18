import { Container, Grid, Box, Button } from "@mui/material";
import SignUp from "../components/Employee/SignUp"
import SignIn from "../components/Employee/SignIn"
import { useNavigate } from "react-router-dom";

function Employee() {
  const navigate = useNavigate()
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#e6ffe6', height: '100vh' }} >
          <h1 style={{ textAlign: 'center' }}>Welcome To Employee Dashboard</h1>
          <Grid container>
            <Grid lg={6}>
              <h2 style={{ textAlign: 'center' }}>SIGN UP</h2>
              <SignUp />
            </Grid>
            <Grid lg={6}>
              <h2 style={{ textAlign: 'center' }}>SIGN IN</h2>
              <SignIn />
              <Grid item lg={10} mx={25}><Button variant="outlined" onClick={() => navigate("/")}>Go To Homepage</Button></Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Employee