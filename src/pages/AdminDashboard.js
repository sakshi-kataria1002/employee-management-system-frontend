import { Container, Grid, Box, Button } from "@mui/material";
import SignUp from "../components/Admin/SignUp"
import SignIn from "../components/Admin/SignIn"
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate()
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#f9e6ff', height: '100vh' }} >
          <h1 style={{ textAlign: 'center' }}>Welcome To Admin Dashboard</h1>
          <Grid container>
            <Grid lg={6}>
              <h2 style={{ textAlign: 'center' }}>SIGN UP</h2>
              <SignUp />
            </Grid>
            <Grid lg={6}>
              <h2 style={{ textAlign: 'center' }}>SIGN IN</h2>
              <SignIn />
              <Grid item lg={12} mx={25}><Button variant="outlined" onClick={() => navigate("/")}>Go To Homepage</Button></Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Admin