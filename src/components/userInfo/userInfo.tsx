"use client";
import { useState } from 'react';
import { Typography, Box, Tab, Tabs, Divider } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
            <Box sx={{ width: '30em' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Tabs containing some information about me"
                        centered
                        sx={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Tab label="About Me" {...a11yProps(0)} />
                        <Tab label="University" {...a11yProps(1)} />
                        <Tab label="Question Mark" {...a11yProps(2)} />
                    </Tabs>
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
                        Something will go here, I don't know what yet.
                    </Typography>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}