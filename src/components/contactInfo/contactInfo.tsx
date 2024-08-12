import { Container, List, ListItem, ListItemText, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ContactInfo({ handleClose }) {
    return (
            <Container
                sx={{ width: '28em', height: 'auto', background: '#FFFFFF', marginTop: '2em', borderRadius: '10px', border: '2px solid black' }}
            >
                <List
                    sx={{ display: 'flex', flexDirection: 'column', padding: '1em' }}
                >
                    <ListItem>
                        <ListItemText
                            sx={{ textAlign: 'center' }}
                            primary={'CONTACT ME'}
                        />
                        <CloseIcon 
                        onClick={handleClose} 
                        sx={{cursor: 'pointer',
                            '&:hover' : {
                                color: 'red',
                                scale: '120%',
                                transition: 'ease-in-out 0.2s'
                            }
                        }} />
                    </ListItem>
                    <Divider />
                    <ListItem
                        component='a'
                        target='_blank'
                        sx={{ textAlign: 'center', textDecoration: 'underline' }}
                        href="https://github.com/DarwynVE">
                        <ListItemText
                            primary={'GITHUB'}
                        />
                    </ListItem>
                    <ListItem
                    >
                        <ListItemText
                            sx={{ textAlign: 'center', textDecoration: 'underline' }}
                            primary={'LOCATION: YONKERS, NEW YORK'} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            sx={{ textAlign: 'center', textDecoration: 'underline' }}
                            primary={'EMAIL: ESTEVEZDARWYN@GMAIL.COM'} />
                    </ListItem>
                </List>
            </Container>
    )
}