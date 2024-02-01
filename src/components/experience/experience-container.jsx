
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import ExperienceCard from './experience-card';


const Experience = () => {
    const theme = useTheme();
    const useStyles = makeStyles(() => ({
        Container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '1',
            alignItems: 'center',
            padding: '40px 0px 80px 0px',
            '@media (max-width: 960px)': {
                padding: '0px'
            }
        },
        Wrapper: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '1100px',
            gap: '12px',
            '@media (max-width: 960px)': {
                flexDirection: 'column'
            }
        },
        Title: {
            fontSize: '42px',
            textAlign: 'center',
            fontWeight: '600',
            marginTop: '20px',
            color: `${theme.text_primary}`,
            '@media (max-width: 768px)': {
                marginTop: '12px',
                fontSize: '32px'
            }
        },
        Desc: {
            fontSize: '18px',
            textAlign: 'center',
            maxWidth: '600px',
            color: `${theme.text_secondary}`,
            '@media (max-width: 768px)': {
                fontSize: '16px'
            }
        },
        TimelineSection: {
            width: '100%',
            maxWidth: '1000px',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
        }
    }));
    const classes = useStyles();
    return (
        <Grid id="experience" className={classes.Container}>
            <Grid className={classes.Wrapper}>
                <h1 className={classes.Title}>Experience</h1>
                <Box className={classes.Desc}>
                    My work experience as a software engineer and working on different companies and projects.
                </Box>

                <Grid className={classes.TimelineSection}>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience