import React from "react";
import { connect } from "react-redux";
import { Grid, List, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

const DisplayEmployee = ({ getEmployee: { displayName, email, address, contact } }) => {

  const navigate = useNavigate()

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <h1>Employee Details</h1>
          <div>
            Name: {displayName}<br />
            Email: {email}<br />
            Address: {address}<br />
            Contact: {contact}<br />
          </div><br />
          <Button variant="contained" onClick={() => navigate("/employee")}>Go Back To Employee Dashboard</Button>
        </List>
      </Grid>
    </>
  )
}

const mapStateToProps = state => ({
  getEmployee: state.signin.employee
})

export default connect(mapStateToProps, null)(DisplayEmployee)
