"use client";
import ContactInfo from '../contactInfo/contactInfo';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import { useState } from 'react';

export default function NavBars() {
    const [open, setOpen] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <Button onClick={handleOpen}>Open Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <ContactInfo />
            </Modal>
        </Container>
    )
}