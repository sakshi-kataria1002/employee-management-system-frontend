import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import AllDetails from "../../components/Admin/AllDetails"
import { showAllEmployee } from "../../redux/allEmployee/allEmployee.action"
import { Button, Container, Box } from "@mui/material"
import { useNavigate } from "react-router-dom";
//import {Table, TableHead, TableCell, TableRow} from "@mui/material"

const DisplayAll = ({ getEmployee, getToken, sendEmployee }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const url = ("https://employee-management-system-backend-omega.vercel.app/getAllUsers")
    const config = {
      headers: {
        "auth-token": getToken
      }
    }
    axios.get(url, config)
      .then(response => sendEmployee(response.data))
      .catch(error => console.error(error))
  })
  console.log(getEmployee)

  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#f2e6ff', height: '100vh' }} >
          <h2 style={{ textAlign: 'center' }}>ALL EMPLOYEE DETAILS</h2>
          <div>
            {
              getEmployee.map(
                (users) => <AllDetails
                  key={users._id}
                  users={users}
                />
              )
            }
            <Button variant="contained" onClick={() => navigate('/admin/display/addNewEmployee')}>Add New Employee</Button>
            <Button variant="text" onClick={() => navigate('/admin')}>Go Back To Admin Dashboard</Button>
          </div>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => ({
  getToken: state.token.token,
  getEmployee: state.allEmployee.employees
})

const mapDispatchToProps = dispatch => ({
  sendEmployee: getAllEmployee => dispatch(showAllEmployee(getAllEmployee))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAll)
