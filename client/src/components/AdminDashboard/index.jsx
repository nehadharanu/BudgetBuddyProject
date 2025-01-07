import {  Container, Grid, Typography } from "@mui/material"
import { AdminWelcome } from "./AdminWelcome"


export default function AdminDashboard() {

    return (
        <Container maxWidth={'xl'}>
                <Grid container spacing={3}>
                    <AdminWelcome />
                </Grid>
        </Container>
    )
}