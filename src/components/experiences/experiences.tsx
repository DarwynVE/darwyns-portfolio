"use client";
import { Box, Typography, IconButton, Collapse, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState } from 'react';
import Image from 'next/image';
import { GCPLogo, MaterialUILogo, ReactLogo, JavaScriptLogo, TypeScriptLogo, ViteLogo, NextJSLogo, GitHubLogo } from '@/images';

const timelineData = [
    {
        time: 'May 2024 - July 2024',
        title: 'Home Depot Software Engineer Internship',
        subheader: '',
        details: 'During this internship me and 3 other associates were able to create and deploy a scalable application for thousands of associates to use within the company. Using products such as GCP Firestore we established cloud connectivity for data storage. We also allowed live collaboration between associates. While working, I leveraged knowledge in Full Stack Web Development, REST API\'s, Git, REACT, Vitest, Node, GCP and Docker.',
        icons: [ReactLogo, ViteLogo, JavaScriptLogo, MaterialUILogo, GCPLogo, GitHubLogo]
    },
    {
        time: 'Dec 2022 - Present',
        title: 'Home Depot Sales Associate',
        subheader: '',
        details: 'As a sales associate I learned how to have meaningful and productive conversations with people. This job allowed me to get out of my comfort zone and learn how to work with others while working on my communication skills.',
        icons: []
    },
    // Add more items as needed
];

const projectsData = [
    {
        time: 'August 2024',
        title: 'Portfolio Project',
        subheader: '',
        details: 'Suprise! You are currently on this project.',
        icons: [ReactLogo, NextJSLogo, TypeScriptLogo, MaterialUILogo, GitHubLogo]
    },
    {
        time: 'Nov 2023',
        title: 'Restaurant Website',
        subheader: '',
        details: 'This was the first ever project I really worked on. It\'s a bit outdated now but during the creation I learned how REACT really works when it comes to things such as the Router or the use of components. This website is also hosted on a personal server I built using Ubuntu with NGINX Proxy Manager and Cloudflare as protection. I also learned how to use CSS to style the website and make it look more appealing.',
        icons: [ReactLogo, JavaScriptLogo]
    },
];

export default function Experiences() {
    const [expandedWork, setExpandedWork] = useState(Array(timelineData.length).fill(false));
    const [expandedProjects, setExpandedProjects] = useState(Array(projectsData.length).fill(false));
    const handleExpandWorkClick = (index: number) => {
        setExpandedWork(expandedWork.map((exp, i) => (i === index ? !exp : exp)));
    };
    const handleExpandProjectsClick = (index: number) => {
        setExpandedProjects(expandedProjects.map((exp, i) => (i === index ? !exp : exp)));
    };
    return (
        // This line is the container for the entire work experience/projects section of this portfolio.
        <Paper
            elevation={24}
            sx={{
                display: {md: 'flex', xs: 'flexbox'},
                justifyContent: 'center',
                flexDirection: {md: 'row', xs: 'column'},
                minHeight: '20em',
                maxHeight: '25em',
                overflowY: 'scroll',
                overflow: 'wrap',
                background: '#e5e5e5',
                padding: {xs: 'none', md: '2em'},
                paddingTop: {xs: '1em'},
                paddingBottom: {xs: '1em'},
                scrollbarColor: '#1baf95 #e5e5e5',
            }}
        >
            {/* This is the timeline for my work experience. */}
            <Box sx={{ 
                width: {md: '35em', xs: '20em'}, 
                }}>
                    {/* Contains the title of the area. */}
                <Typography
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        fontWeight: 'bold', 
                        fontSize: {md: '1.5em', xs: '1em'}, 
                        textDecoration: 'underline',
                        width: {md: 'auto', xs: '100vw'}
                     }}
                        >Work Experience</Typography>
                {/* Timeline for work experiences. */}
                <Timeline
                    sx={{
                        paddingBottom: {md: '2em', xs: '0.2em'},
                        paddingTop: {md: '2em', xs: '0.2em'},
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: {md: 0.4, xs: 0.3},
                        },
                    }}
                >
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index}>
                            {/* Contains the date. */}
                            <TimelineOppositeContent color="textSecondary"
                            sx={{
                                fontSize: {md: '1em', xs: '0.4em'},
                            }}>
                                {item.time}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot 
                                 sx={{ backgroundColor: '#1baf95' }}
                                />
                                <TimelineConnector 
                                sx={{ backgroundColor: '#b2e3d9' }}
                                />
                            </TimelineSeparator>
                            {/* Contains the title of the experience/project. */}
                            <TimelineContent>
                                <Box display="flex">
                                    <IconButton
                                        aria-label="expand"
                                        sx={{ padding: 0 }}
                                        onClick={() => handleExpandWorkClick(index)}
                                    >
                                        <Typography
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                fontSize: {md: '16px', xs: '0.5em'},
                                                color: 'black' 
                                            }}
                                        >{item.title}</Typography>
                                        {expandedWork[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton>
                                </Box>
                                {/* Box to contain icons of languages/frameworks relating to the work experience/project. */}
                                    <Box
                                    sx={{
                                        display: 'inline-flex',
                                    }}>
                                    {item.icons.map((icon, iconIndex) => (
                                                    <Image 
                                                    key={iconIndex}
                                                    src={item.icons[iconIndex]}
                                                    alt='icon'
                                                    width={20}
                                                    height={20}
                                                    style={{ marginRight: '0.5em'}}
                                                    />
                                    ))}
                                </Box>
                                <Typography
                                    component='a'
                                    href={item.subheader}
                                    target='_blank'
                                    variant="subtitle2"
                                    color="textSecondary"
                                    sx={{ fontStyle: 'italic' }}
                                >{item.subheader}</Typography>
                                <Collapse in={expandedWork[index]} timeout="auto" unmountOnExit>
                                    <Box mt={2}>
                                        <Typography variant="body2"
                                        sx={{
                                            fontSize: {xs: '14px'},
                                            width: {md: 'auto', xs: '63vw'}
                                        }}>
                                            {item.details}
                                        </Typography>
                                    </Box>
                                </Collapse>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
            {/* This is the timeline for my projects.*/}
            <Box sx={{ 
                width: {md: '35em', xs: '20em'}, 
                }}>
                <Typography
                   sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    fontWeight: 'bold', 
                    fontSize: {md: '1.5em', xs: '1em'}, 
                    textDecoration: 'underline',
                    width: {md: 'auto', xs: '100vw'}
                 }}
                >Projects</Typography>
                <Timeline
                    sx={{
                        paddingBottom: {md: '2em', xs: '0.2em'},
                        paddingTop: {md: '2em', xs: '0.2em'},
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: {md: 0.4, xs: 0.3},
                        },
                    }}
                >
                    {projectsData.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent color="textSecondary"
                            sx={{
                                fontSize: {md: '1em', xs: '0.4em'},
                            }}>
                                {item.time}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot 
                                sx={{ backgroundColor: '#af1b36' }}
                                />
                                <TimelineConnector 
                                sx={{ backgroundColor: '#e79aa6' }}
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Box display="flex">
                                    <IconButton
                                        aria-label="expand"
                                        sx={{ padding: 0 }}
                                        onClick={() => handleExpandProjectsClick(index)}
                                    >
                                        <Typography
                                           sx={{ 
                                            fontWeight: 'bold', 
                                            fontSize: {md: '16px', xs: '0.5em'},
                                            color: 'black' 
                                        }}
                                        >{item.title}</Typography>
                                        {expandedProjects[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                    }}>
                                    {item.icons.map((icon, iconIndex) => (
                                                    <Image 
                                                    key={iconIndex}
                                                    src={item.icons[iconIndex]}
                                                    alt='icon'
                                                    width={20}
                                                    height={20}
                                                    style={{ marginRight: '0.5em'}}
                                                    />
                                    ))}
                                </Box>
                                <Typography
                                    component='a'
                                    href={item.subheader}
                                    target='_blank'
                                    variant="subtitle2"
                                    color="textSecondary"
                                    sx={{ fontStyle: 'italic' }}
                                >{item.subheader}</Typography>
                                <Collapse in={expandedProjects[index]} timeout="auto" unmountOnExit>
                                    <Box mt={2}>
                                    <Typography variant="body2"
                                        sx={{
                                            fontSize: {xs: '14px'},
                                            width: {md: 'auto', xs: '63vw'}
                                        }}>
                                            {item.details}
                                        </Typography>
                                    </Box>
                                </Collapse>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Paper>
    )
}