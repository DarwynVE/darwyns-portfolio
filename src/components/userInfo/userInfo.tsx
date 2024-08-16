"use client";
import { useState } from 'react';
import { Typography, Box, Tab, Tabs, Divider, styled } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        centered
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 100,
        width: '100%',
        backgroundColor: '#af1b36',
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#54bea8',
    '&.Mui-selected': {
        color: '#129277',
        transition: 'ease-in-out 0.2s',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function UserInfo() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0 1em 0' }}>
            <Box sx={{ width: '30em', height: '12em' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Tabs containing some information about me"
                        // centered
                        >
                        <StyledTab label="About Me" {...a11yProps(0)} />
                        <StyledTab label="University" {...a11yProps(1)} />
                        <StyledTab label="Question Mark" {...a11yProps(2)} />
                    </StyledTabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Typography sx={{ textAlign: 'center', fontWeight: '200' }}>
                        Hey there! Welcome to my virtual portfolio. My name is Darwyn I am from New York. Some of my current hobies are Sim Racing, Cycling, and going to the gym. Software Engineering is my passion and I hope to find a position within this career.
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography sx={{ textAlign: 'center', fontWeight: '300' }}>
                        Maryville University
                        <Divider />
                        Major: Computer Science
                        <Divider />
                        Focus: Software Engineering
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography sx={{ textAlign: 'center', fontWeight: '200' }}>
                        Something will go here, I dont know what yet.
                    </Typography>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}