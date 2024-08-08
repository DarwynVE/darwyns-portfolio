"use client";

import * as React from "react";
import HomePage from "@/components/homePage/homePage";
import Modal from '@mui/material/Modal';
import ContactInfo from "@/components/contactInfo/contactInfo";
import Button from '@mui/material/Button';

export default function Home() {
  const [open, setOpen] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <HomePage />
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal 
        open={open} 
        onClose={handleClose}>
          <ContactInfo />
        </Modal>
      </div>
  );
}
