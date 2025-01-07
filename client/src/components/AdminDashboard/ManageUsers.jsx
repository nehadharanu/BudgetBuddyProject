import React, { useState, useEffect } from 'react';
import Loading from '../loading';
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { Container, Typography, IconButton } from '@mui/material'
import { adminDeleteUser, getUsers } from '../../../src/services/auth';
import DeleteIcon from "@mui/icons-material/Delete";

export default function ManageUsers(){
    const [loading, setLoading] = useState(false);
    const [usersList, setUsersList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(" ");

    useEffect(() => {
        getUsersList()
        
    }, []);

    const getUsersList = async () => {
        setLoading(true)
        const response = await getUsers()
        var list = response.data.user
        setUsersList(list)
        setLoading(false)
    }

    const handleDelete = (user) => {
        console.log("handle delete")
        const deleteUser = async (user) => {
            const response = await adminDeleteUser(user, setShowAlert, setAlertMessage)
        }
        deleteUser(user)
        getUsersList()
    };

    return (
        <Container>
            {loading ?  <Loading /> :
                <>
                    <Typography variant="h4" pb={2} mb={3} gutterBottom>
                        List of all Users
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Email Id</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usersList.map((user, index) => (
                                    <TableRow  sx={{
                                        "&:hover": {
                                            backgroundColor: "#f5f5f5", // Light gray background on hover
                                            cursor: "pointer",
                                        },
                                    }}>
                                        <TableCell>{user.firstName}</TableCell>
                                        <TableCell>{user.lastName}</TableCell>
                                        <TableCell>{user.emailId}</TableCell>
                                        <TableCell>{user.type}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                color="error"
                                                onClick={() => handleDelete(user)}
                                                aria-label={`Delete ${user.firstName}`}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>}
        </Container>
    )
}