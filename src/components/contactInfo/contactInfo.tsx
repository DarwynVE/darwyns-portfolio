import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider'

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