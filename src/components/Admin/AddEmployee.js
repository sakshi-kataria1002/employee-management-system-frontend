import { Grid, TextField, Button, Box, Container } from "@mui/material";
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux"

const AddEmployee = ({ getToken }) => {
    const navigate = useNavigate()
    const [input, setInput] = useState({ displayName: '', email: '', address: '', contact: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
        console.log(input)
    }

    // const handleOnClick = async () => {
    //     await axios.post("https://employee-management-system-backend-ten.vercel.app/app/users/adminEmployeeSignup", input)
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    //         .then(() => {
    //             navigate("/admin/display")
    //         })
    //         .catch(error => console.log(error))
    //     alert("Employee Added Successfully")
    // }

    const handleOnClick = (async () => {
        const url = ("https://employee-management-system-backend-ten.vercel.app/app/users/adminEmployeeSignup")
        const config = {
            headers: {
                "auth-token": getToken
            }
        }
        await axios.post(url, input, config)
            .then((res) => {
                console.log(res.data)
            })
            .then(() => {
                navigate("/admin/display")
            })
            .catch(error => console.log(error))
        alert("Employee Added Successfully")
    })
    
    return (
        <>
            <Container fixed>
                <Box sx={{ bgcolor: '#e6ffe6', height: '75vh' }} >
                    <h2 style={{ textAlign: 'center' }}>ADD NEW EMPLOYEE DETAILS</h2>
                    <Grid container spacing={2}>
                        <Grid item lg={12} mx={24}>
                            <TextField
                                style={{ width: '100%', marginButton: '10px' }}
                                name="displayName"
                                label="Employee Name"
                                variant="filled"
                                onChange={handleChange} />
                        </Grid>
                        <Grid item lg={12} mx={24}>
                            <TextField
                                style={{ width: '100%', marginButton: '10px' }}
                                name="email"
                                label="Email"
                                variant="filled"
                                onChange={handleChange} />
                        </Grid>
                        <Grid item lg={12} mx={24}>
                            <TextField
                                style={{ width: '100%', marginButton: '10px' }}
                                name="address"
                                label="Address"
                                variant="filled"
                                onChange={handleChange} />
                        </Grid>
                        <Grid item lg={12} mx={24}>
                            <TextField
                                style={{ width: '100%', marginButton: '10px' }}
                                name="contact"
                                label="Contact"
                                variant="filled"
                                onChange={handleChange} />
                        </Grid>
                        <Grid item lg={12} mx={24}>
                            <TextField
                                style={{ width: '100%', marginButton: '10px' }}
                                name="password"
                                type="password"
                                label="Password"
                                variant="filled"
                                onChange={handleChange} />
                        </Grid>
                        <Grid item lg={12} mx={24}>
                            <TextField
                                style={{ width: '100%', marginButton: '10px' }}
                                name="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                variant="filled"
                                onChange={handleChange} />
                        </Grid>
                        <Grid item lg={12} mx={29}>
                            <Button
                                style={{ width: '90%', marginButton: '10px' }}
                                id="addButton"
                                variant="contained"
                                onClick={handleOnClick}
                            >SIGN UP
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    getToken: state.token.token
})

export default connect(mapStateToProps, null)(AddEmployee)