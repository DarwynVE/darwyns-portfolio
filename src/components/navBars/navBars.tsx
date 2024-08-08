"use client";
import ContactInfo from '../contactInfo/contactInfo';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function NavBars() {
    const [open, setOpen] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>Nav
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal 
        open={open} 
        onClose={handleClose}>
          <ContactInfo />
        </Modal>
        </div>
    )
}