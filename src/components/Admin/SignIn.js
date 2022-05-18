import { Grid, TextField, Button, Box } from "@mui/material";
import { useState } from "react"
import axios from 'axios'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { connect } from "react-redux"
import { getToken } from "../../redux/token/token.action"
import { useNavigate } from "react-router-dom"

const SignIn = ({ sendToken }) => {
    const [input, setInput] = useState({})
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
        //console.log(input)
    }

    const handleSubmit = async () => {
        await axios
            .post("https://employee-management-system-backend-ten.vercel.app/app/users/adminSignin", input)
            .then((response) => {
                sendToken(response.data)
                if (response.data) {
                    //  navigate('/admin/display')
                } else {
                    response.send("Please recheck your credentials")
                }
            })
        alert("Admin Signed In Successfully")
        navigate('/admin/display')
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="email"
                            type="email"
                            label="Email"
                            variant="standard"
                            onChange={handleChange} />
                    </Box>
                </Grid>
                <Grid item lg={12} mx={18}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            name="password"
                            type="password"
                            label="Password"
                            variant="standard"
                            onChange={handleChange} />
                    </Box>
                </Grid>
                <Grid item lg={12} mx={30}>
                    <Button
                        id="signInButton"
                        onClick={handleSubmit}
                        variant="contained"
                    >SIGN IN
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    sendToken: token => dispatch(getToken(token))
})

export default connect(null, mapDispatchToProps)(SignIn)
