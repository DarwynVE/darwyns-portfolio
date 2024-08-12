"use client";
import ContactInfo from '../contactInfo/contactInfo';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';

export default function NavBars() {
    const [open, setOpen] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <List>
                <ListItem>
                    Test
                </ListItem>
            </List>
            <Button onClick={handleOpen}>Contact Info</Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <ContactInfo />
            </Modal>
        </Container>
    )
}