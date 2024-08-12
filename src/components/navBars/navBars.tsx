"use client";
import ContactInfo from '../contactInfo/contactInfo';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function NavBars() {
    const [open, setOpen] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
            position='static'
            sx={{background: '#DBDBDB'}}>
                <Toolbar>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, color: '#474747'}}
                    >
                        DARWYNS PORTFOLIO
                    </Typography>
                    <Button
                        onClick={handleOpen}
                        variant='outlined'
                        sx={{color: '#474747', borderColor: '#474747'}} 
                    >
                        Contact Info
                    </Button>
                </Toolbar>
            </AppBar>
                    <Modal
                        open={open}
                        onClose={handleClose}>
                        <ContactInfo />
                    </Modal>
        </Box>
    )
}