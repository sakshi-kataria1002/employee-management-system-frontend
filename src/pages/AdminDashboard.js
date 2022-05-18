import { Container, Grid, Box } from "@mui/material";
import SignUp from "../components/Admin/SignUp"
import SignIn from "../components/Admin/SignIn"

function Admin() {
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#f0f0f5', height: '100vh' }} >
          <h1 style={{ textAlign: 'center' }}>Welcome To Admin Dashboard</h1>
          <Grid container>
            <Grid lg={6}>
              <h2 style={{ textAlign: 'center' }}>SIGN UP</h2>
              <SignUp />
            </Grid>
            <Grid lg={6}>
              <h2 style={{ textAlign: 'center' }}>SIGN IN</h2>
              <SignIn />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Admin