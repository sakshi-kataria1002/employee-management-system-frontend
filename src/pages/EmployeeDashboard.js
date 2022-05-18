import { Container, Grid, Box } from "@mui/material";
import SignUp from "../components/Employee/SignUp"
import SignIn from "../components/Employee/SignIn"

function Employee() {
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#f7f6f6', height: '100vh' }} >
          <h1 style={{ textAlign: 'center' }}>Welcome To Employee Dashboard</h1>
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

export default Employee