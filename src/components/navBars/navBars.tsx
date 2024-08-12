"use client";
import { useState } from 'react';
import { Modal, Button, Box, AppBar, Typography, Toolbar } from '@mui/material';
import ContactInfo from '../contactInfo/contactInfo';

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
                        sx={{color: '#474747', borderColor: '#474747',
                            '&:hover' : {
                                borderColor: 'blue',
                            }
                        }} 
                    >
                        Contact Info
                    </Button>
                </Toolbar>
            </AppBar>
                    <Modal
                        open={open}
                        onClose={handleClose}>
                        <ContactInfo handleClose={handleClose}/>
                    </Modal>
        </Box>
    )
}