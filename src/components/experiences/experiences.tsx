"use client";
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState } from 'react';

const timelineData = [
    { time: 'May 2024 - July 2024', title: 'Home Depot Software Engineer Internship', details: 'During this internship me and 3 other associates were able to create and deploy a scalable application for thousands of associates to use within the company. Using products such as GCP Firestore we established cloud connectivity for data storage. We also allowed live collaboration between associates. While working, I leveraged knowledge in Full Stack Web Development, REST API\'s, Git, REACT, Vitest, Node, GCP and Docker.' },
    { time: 'Dec 2022 - Present', title: 'Home Depot Sales Associate', details: 'Detailed information about coding goes here. You can add more text, images, or any other content you need.' },
    // Add more items as needed
];

export default function Experiences() {
    const [expanded, setExpanded] = useState(Array(timelineData.length).fill(false));

    const handleExpandClick = (index: number) => {
        setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
    };
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
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box display="flex" alignItems="center">
                                {item.title}
                                <IconButton
                                    aria-label="expand"
                                    onClick={() => handleExpandClick(index)}
                                >
                                    {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </Box>
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