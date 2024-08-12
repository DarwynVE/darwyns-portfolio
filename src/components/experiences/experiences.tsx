"use client";
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState } from 'react';

const timelineData = [
    {
        time: 'May 2024 - July 2024',
        title: 'Home Depot Software Engineer Internship',
        details: 'During this internship me and 3 other associates were able to create and deploy a scalable application for thousands of associates to use within the company. Using products such as GCP Firestore we established cloud connectivity for data storage. We also allowed live collaboration between associates. While working, I leveraged knowledge in Full Stack Web Development, REST API\'s, Git, REACT, Vitest, Node, GCP and Docker.'
    },
    {
        time: 'August 2024',
        title: 'Portfolio Project',
        details: 'Suprise! You are currently on this project.'
    },
    {
        time: 'Nov 2023',
        title: 'Restaurant Website',
        subheader: 'https://joebiden.com',
        details: 'This was the first ever project I really worked on. It\'s a bit outdated now but during the creation I learned how REACT really works when it comes to things such as the Router or the use of components. This website is also hosted on a personal server I built using Ubuntu with NGINX Proxy Manager and Cloudflare as protection. I also learned how to use CSS to style the website and make it look more appealing.'
    },
    {
        time: 'Dec 2022 - Present',
        title: 'Home Depot Sales Associate',
        details: 'As a sales associate I learned how to have meaningful and productive conversations with people. This job allowed me to get out of my comfort zone and learn how to work with others while working on my communication skills.'
    },
    // Add more items as needed
];

export default function Experiences() {
    const [expanded, setExpanded] = useState(Array(timelineData.length).fill(false));

    const handleExpandClick = (index: number) => {
        setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
    };
    //TODO: SEPERATE WORK EXPERIENCES FROM PROJECTS IT LOOKS GOOFY
    return (
        <Box sx={{ width: '35em' }}>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.4,
                    },
                }}
            >
                {timelineData.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="textSecondary">
                            {item.time}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='primary' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box display="flex">
                                <IconButton
                                    aria-label="expand"
                                    sx={{ padding: 0 }}
                                    onClick={() => handleExpandClick(index)}
                                >
                                    <Typography
                                        sx={{ fontWeight: 'bold', color: 'black' }}
                                    >{item.title}</Typography>
                                    {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </Box>
                            <Typography
                                component='a'
                                href={item.subheader}
                                target='_blank'
                                variant="subtitle2"
                                color="textSecondary"
                                sx={{ fontStyle: 'italic' }}
                            >{item.subheader}</Typography>
                            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                <Box mt={2}>
                                    <Typography variant="body2">
                                        {item.details}
                                    </Typography>
                                </Box>
                            </Collapse>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )
}