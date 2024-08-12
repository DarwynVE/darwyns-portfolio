import NavBars from '../navBars/navBars';
import UserInfo from '../userInfo/userInfo';
import Experiences from '../experiences/experiences';
import { Box } from '@mui/material';

export default function HomePage() {
    return (
        <Box>
            <NavBars />
            <UserInfo />
            <Experiences />
        </Box>
    )
}