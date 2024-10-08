import { Container, List, ListItem, ListItemText, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@emotion/react';

interface ContactInfoProps {
    handleClose: () => void;
}

const spin = keyframes`
  0% {
    border-color: #15a084;
  }
  20% {
    border-color: transparent;
  }
  40% {
    border-color: #15a084;
  }
   100% {
    border-color: transparent;
  }
`;
export default function ContactInfo({ handleClose }: ContactInfoProps) {
    return (
        <Container
            sx={{
                width: { xs: '23em', sm: '25em', md: '25em' },
                height: 'auto',
                background: '#FFFFFF',
                position: { md: 'absolute' },
                marginTop: { xs: '4em', md: '4em' },
                borderRadius: '10px',
                right: '2em',
                border: '5px solid',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                animation: `${spin} 4s linear infinite`,
            }}
        >
            <List
                sx={{ display: 'flex', flexDirection: 'column', padding: '0.5em' }}
            >
                <ListItem>
                    <ListItemText
                        sx={{ textAlign: 'center' }}
                        primary={'CONTACT ME'}
                    />
                    <CloseIcon
                        onClick={handleClose}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'red',
                                scale: '120%',
                                transition: 'ease-in-out 0.2s'
                            }
                        }} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        sx={{
                            textAlign: 'center',
                            textDecoration: 'underline',
                            fontSize: '12px'
                        }}
                    >EMAIL: ESTEVEZDARWYN@GMAIL.COM</ListItemText>
                </ListItem>
                <ListItem
                    component='a'
                    target='_blank'
                    sx={{
                        textAlign: 'center',
                        textDecoration: 'underline'
                    }}
                    href="https://github.com/DarwynVE">
                    <ListItemText
                    >GitHub</ListItemText>
                </ListItem>
                <ListItem
                    component='a'
                    target='_blank'
                    sx={{
                        textAlign: 'center',
                        textDecoration: 'underline'
                    }}
                    href="https://www.linkedin.com/in/darwynve/">
                    <ListItemText
                    >LinkedIn</ListItemText>
                </ListItem>
                <ListItem
                    sx={{
                        textAlign: 'center',
                        textDecoration: 'underline',
                        fontWeight: '12px'
                    }}
                >
                    <ListItemText
                    >LOCATION: YONKERS, NEW YORK</ListItemText>
                </ListItem>
            </List>
        </Container>
    )
}