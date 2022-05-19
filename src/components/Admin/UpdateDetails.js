import React, { useState } from 'react'
import { Button, TextField, Container, Box, Modal, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdateDetails = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdate = async () => {
        await axios.put(`http://localhost:8080/app/users/editEmployee/${params.id}`, input)
            //.then(response => console.log(response.data))
            .then(() => {
                handleOpen();
                setTimeout(() => {
                    navigate('/admin/display');
                }, 1000);
            })
    }

    return (
        <>
            <Container fixed>
                <Box sx={{ bgcolor: '#ffe6e6', height: '50vh' }} >
                    <h1 style={{ textAlign: 'center' }}>UPDATE EMPLOYEE DETAILS</h1>
                    <TextField
                        style={{ width: '100%', marginButton: '10px' }}
                        name='displayName'
                        id="outlined-basic"
                        label="Update Employee Name"
                        variant="filled"
                        onChange={handleChange}
                    >
                    </TextField>
                    <TextField
                        style={{ width: '100%', marginButton: '10px' }}
                        name='email'
                        id="outlined-basic"
                        label="Update Email"
                        variant="filled"
                        onChange={handleChange}
                    >
                    </TextField>
                    <TextField
                        style={{ width: '100%', marginButton: '10px' }}
                        name='address'
                        id="outlined-basic"
                        label="Update Address"
                        variant="filled"
                        onChange={handleChange}
                    >
                    </TextField>
                    <TextField
                        style={{ width: '100%', marginButton: '10px' }}
                        name='contact'
                        id="outlined-basic"
                        label="Update Contact"
                        variant="filled"
                        onChange={handleChange}
                    >
                    </TextField>
                    <Button onClick={handleUpdate} > <SaveIcon /></Button>
                </Box>
                <Button onClick={handleOpen}>Save Details</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            UPDATED DETAILS
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Details Updated Successfully!!
                        </Typography>
                    </Box>
                </Modal>
            </Container>
        </>
    )
}

export default UpdateDetails
