import React from "react";
import { connect } from "react-redux";
import { Grid, List, Button, Container, Box } from '@mui/material'
import { useNavigate } from "react-router-dom";

const DisplayEmployee = ({ getEmployee: { displayName, email, address, contact } }) => {

  const navigate = useNavigate()

  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#ffff99', height: '50vh' }} >
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <List sx={{ width: '100%', maxWidth: 360 }}>
              <h1>Employee Details</h1><br />
              <div>
                <strong>Name:</strong>{displayName}<br />
                <strong>Email:</strong>{email}<br />
                <strong>Address:</strong>{address}<br />
                <strong>Contact:</strong>{contact}<br />
              </div><br />
              <Button variant="contained" onClick={() => navigate("/employee")}>Go Back To Employee Dashboard</Button>
            </List>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  getEmployee: state.signin.employee
})

export default connect(mapStateToProps, null)(DisplayEmployee)
