import { Box, Button, Grid, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import configData from '../../config.json'

export const AdminWelcome = () => {
    return (
        <Box sx={{
            p: 5,
            bgcolor: (theme) => theme.palette['success'].light,
            color: (theme) => theme.palette['success'].darker,
            borderRadius: 2,
        }}>
            <Grid container spacing={3} justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item xs={11}>
                    <img src="/static/illustrations/dashboard-card.png" alt="dashboard" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" pb={2} >
                    Welcome, Admin! Here’s a quick snapshot of the platform’s activities. 
                    Use the tools below to monitor transactions, resolve disputes, and manage users effectively. 
                    Stay proactive and ensure a seamless experience for all users.
                    </Typography>


                </Grid>
                <Grid item>
                    <Button variant="outlined"
                        component={RouterLink}
                        to={configData.MANAGE_USERS_URL}
                    >
                        View Users
                    </Button>
                </Grid>

            </Grid>
        </Box>
    )
}