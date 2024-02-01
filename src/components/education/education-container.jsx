
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import EducationCard from './education-card';
 
const Education = () => {
    const theme = useTheme();
    const useStyles = makeStyles(() => ({
        Container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
            padding: '0px 0px 60px 0px',
            '@media (max-width: 960px)': {
                padding: '0px',
            }
        },
        Wrapper: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '1350px',
            padding: '40px 0px 0px 0px',
            gap: '12px',
            '@media (max-width: 960px)': {
                flexDirection: 'column',
            }
        },
        Title: {
            fontSize: '42px',
            textAlign: 'center',
            fontWeight: '600',
            marginTop: '20px',
            color: theme.text_primary,
            '@media (max-width: 768px)': {
                marginTop: '12px',
                fontSize: '32px',
            }
        }, 
        Desc: {
            fontSize: '18px',
            textAlign: 'center',
            maxWidth: '600px',
            color: theme.text_secondary,
            '@media (max-width: 768px)': {
                marginTop: '12px',
                fontSize: '16px',
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
            gap: '12px',
            '@media (max-width: 660px)': {
                alignItems: 'end',
            }
        }
    }));
    const classes = useStyles();
    return (
        <Grid container className={classes.Container} id="education">
            <Grid item className={classes.Wrapper}>
                <Box className={classes.Title}>Education</Box>
                <Box className={classes.Desc}>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Box>
                <Grid container className={classes.TimelineSection}>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Education