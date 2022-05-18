import { Button, Table, TableContainer, TableCell, TableHead, TableRow, TableBody, Paper } from "@mui/material"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
//import {connect} from "react-redux"

const AllDetails = ({ users: { _id, displayName, email, address, contact } }) => {
  const navigate = useNavigate()

  const handleOnDelete = () => {
    axios.delete(`https://employee-management-system-backend-ten.vercel.app/app/users/deleteEmployee/${_id}`)
      .then((response) => console.log(response))
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell><strong>Employee Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Contact</strong></TableCell>
              <TableCell><strong>Edit</strong></TableCell>
              <TableCell><strong>Delete</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 1.5 } }} >
              <TableCell>{displayName}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{address}</TableCell>
              <TableCell>{contact}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => navigate(`update/${_id}`)}>Edit</Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={handleOnDelete}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AllDetails
