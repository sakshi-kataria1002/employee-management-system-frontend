import { Grid, TextField, Button, Box } from "@mui/material";
import { useState } from "react"
import axios from 'axios'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import CallIcon from '@mui/icons-material/Call';

const SignUp = () => {
    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
        //console.log(input)
    }

    const handleSubmit = () => {
        axios.post("https://employee-management-system-backend-omega.vercel.app/adminSignup", input)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        alert("User Created Successfully")
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="displayName"
                            label="Enter Your Name"
                            variant="outlined"
                            onChange={handleChange} />
                    </Box>
                    <label>contain atleast 3 characters</label>
                </Grid>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="email"
                            type="email"
                            label="Enter Your Email"
                            variant="outlined"
                            onChange={handleChange} />
                    </Box>
                    <label>should be a valid email</label>
                </Grid>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="address"
                            label="Address"
                            variant="outlined"
                            onChange={handleChange} />
                    </Box>
                    <label>contain more than 5 characters</label>
                </Grid>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="contact"
                            label="Contact Number"
                            variant="outlined"
                            onChange={handleChange} />
                    </Box>
                    <label>contain 10 numbers</label>

                </Grid>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={handleChange} />
                    </Box>
                    <label>length should be 8 atleast</label>
                </Grid>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            onChange={handleChange} />
                    </Box>
                    <label>length should be 8 atleast</label>
                </Grid>
                <Grid item lg={12} mx={29}>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                    >SIGN UP
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUp