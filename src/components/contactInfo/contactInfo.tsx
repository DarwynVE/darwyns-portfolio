import { Container, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function ContactInfo() {
    return (
        <Container
            sx={{ width: '28em', height: 'auto', background: '#FFFFFF', marginTop: '2em', borderRadius: '10px' }}
        >
            <List
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                <ListItem>
                    <ListItemText
                        sx={{ textAlign: 'center' }}
                        primary={'CONTACT ME'}
                    />
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