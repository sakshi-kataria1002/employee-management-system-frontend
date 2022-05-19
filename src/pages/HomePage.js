import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <Container fixed>
                <Box sx={{ bgcolor: '#D8D8D8', height: '93vh' }} >
                    <h1 style={{ textAlign: 'center' }}>EMPLOYEE MANAGEMENT SYSTEM</h1>
                    <Grid container>
                        <Grid lg={6}>
                            <h2 style={{ textAlign: 'center' }}>Employee Dashboard</h2>
                            <Grid item lg={12} mx={25}>
                                <Button mx={60}
                                    variant="contained"
                                    onClick={() => navigate('/employee')}>
                                    Go To Employee Dashboard
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid lg={6}>
                            <h2 style={{ textAlign: 'center' }}>Admin Dashboard</h2>
                            <Grid item lg={12} mx={25}>
                                <Button mx={60}
                                    variant="contained"
                                    onClick={() => navigate('/admin')}>
                                    Go To Admin Dashboard
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default HomePage