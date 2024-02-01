import React from 'react'
import { makeStyles, useTheme } from '@mui/styles'
import { Box, Grid } from '@mui/material';

const EducationCard = ({ education }) => {
    const theme = useTheme();
    const useStyles = makeStyles(() => ({
        Document: {
            display: 'none',
            height: '70px',
            width: 'fit-content',
            backgroundColor: '#000',
            borderRadius: '10px',
            '&:hover': {
                cursor: 'pointer',
                opacity: '0.8',
            }
        },
        Description: {
            width: '100%',
            fontSize: '15px',
            fontWeight: '400',
            color: theme.text_primary + 99,
            marginBottom: '10px',
            '@media only screen and (max-width: 768px)': {
                fontSize: '12px',
            }
        },
        Span: {
            overflow: 'hidden',
            display: '-webkit-box',
            maxWidth: '100%',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
        },
        Card: {
            width: '650px',
            borderRadius: '10px',
            boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
            padding: '12px 16px',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
                transform: 'translateY(-5px)',
            },
            '@media only screen and (max-width: 768px)': {
                padding: '10px',
                gap: '8px',
                width: '300px',
            },
            '&:hover $Document': {
                display: 'flex',
            },
            '&:hover $Span': {
                overflow: 'visible',
                WebkitLineClamp: 'unset',
            },
            border: '0.1px solid #854CE6',
        },
        Top: {
            width: '100%',
            display: 'flex',
            gap: '12px',
        },
        Image: {
            height: '50px',
            backgroundColor: '#000',
            borderRadius: '10px',
            marginTop: '4px',
            '@media only screen and (max-width: 768px)': {
                height: '40px',
            }
        },
        Body: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        Name: {
            fontSize: '18px',
            fontWeight: '600',
            color: theme.text_primary + 99,
            '@media only screen and (max-width: 768px)': {
                fontSize: '14px',
            }
        },
        Degree: {
            fontSize: '14px',
            fontWeight: '500',
            color: theme.text_secondary + 99,
            '@media only screen and (max-width: 768px)': {
                fontSize: '12px',
            }
        },
        Date: {
            fontSize: '12px',
            fontWeight: '400',
            color: theme.text_secondary + 80,
            '@media only screen and (max-width: 768px)': {
                fontSize: '10px',
            }
        },
        Grade: {
            fontSize: '14px',
            fontWeight: '500',
            color: theme.text_secondary + 99,
            '@media only screen and (max-width: 768px)': {
                fontSize: '12px',
            }
        }
    }));
    const classes = useStyles();
    return (
        <Grid container className={classes.Card}>
            <Grid container className={classes.Top}>
                <img src={education.img} alt="school" className={classes.Image} />
                <Box item className={classes.Body}>
                    <Box item className={classes.Name}>{education.school}</Box>
                    <Box item className={classes.Degree}>{education.degree}</Box>
                    <Box item className={classes.Date}>{education.date}</Box>
                </Box>
            </Grid>
            <Box item className={classes.Grade}><b>Grade: </b>{education.grade}</Box>
            <Box item className={classes.Description}>
                <Box item className={classes.Span}>{education.desc}</Box>
            </Box>
        </Grid>
    )
}

export default EducationCard