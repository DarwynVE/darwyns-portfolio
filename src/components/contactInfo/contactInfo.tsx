import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function ContactInfo() {
    return (
        <Container
            sx={{width: '25em', justifyContent: 'center', alignContent: 'center', alignItems: 'center', background: '#FFFFFF'}}
        >
            <List
            sx={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex', flexDirection: 'column', textAlign: 'center'}}
            >
                <ListItem>
                    Location: Yonkers, New York
                </ListItem>
                <ListItem>
                    EMAIL: ESTEVEZDARWYN@GMAIL.COM
                </ListItem>
                <ListItem>
                   <a href='https://github.com/DarwynVE' target='_blank'>GITHUB</a>
                </ListItem>
            </List>
        </Container>
    )
}