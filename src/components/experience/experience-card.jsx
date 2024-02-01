import { Box, Grid } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles'
import React from 'react'


const ExperienceCard = ({ experience }) => {
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
                opacity: '0.8'
            }
        },
        Description: {
            width: '100%',
            fontSize: '15px',
            fontWeight: '400',
            color: `${theme.text_primary + 99}`,
            marginBottom: '10px',
            '@media (max-width: 768px)': {
                fontSize: '12px'
            }
        },
        Span: {
            overflow: 'hidden',
            display: '-webkit-box',
            maxWidth: '100%',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical',
            textOverflow: 'ellipsis',
        },
        Card: {
            width: '650px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
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
                transform: 'translateY(-5px)'
            },
            '@media only screen and (max-width: 768px)': {
                padding: '10px',
                gap: '8px',
                width: '300px'
            },
            border: '0.1px solid #306EE8',
            boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
            '&:hover $Document': {
                display: 'flex'
            },
            '&:hover $Span': {
                overflow: 'visible',
                '-webkit-line-clamp': 'unset'
            }
        },
        Top: { 
            width: '100%',
            display: 'flex',
            gap: '12px'
        },
        Image: {
            height: '50px',
            backgroundColor: '#000',
            borderRadius: '10px',
            marginTop: '4px',
            '@media only screen and (max-width: 768px)': {
                height: '40px'
            }
        },
        Body: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        Role: {
            fontSize: '18px',
            fontWeight: '600',
            color: `${theme.text_primary + 99}`,
            '@media only screen and (max-width: 768px)': {
                fontSize: '14px'
            }
        },
        Company: {
            fontSize: '14px',
            fontWeight: '500',
            color: `${theme.text_secondary + 99}`,
            '@media only screen and (max-width: 768px)': {
                fontSize: '12px'
            }
        },
        Date: {
            fontSize: '12px',
            fontWeight: '400',
            color: `${theme.text_secondary + 80}`,
            '@media only screen and (max-width: 768px)': {
                fontSize: '10px'
            }
        },
        Skills: {
            width: '100%',
            display: 'flex',
            gap: '12px',
            marginTop: '-10px'
        },
        ItemWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
        },
        Skill: {
            fontSize: '15px',
            fontWeight: '400',
            color: `${theme.text_primary + 99}`,
            '@media only screen and (max-width: 768px)': {
                fontSize: '12px'
            }
        }
    }))
    const classes = useStyles();
    return (
        // <Card>
        //     <Top>
        //         <Image src={experience.img} />
        //         <Body>
        //             <Role>{experience.role}</Role>
        //             <Company>{experience.company}</Company>
        //             <Date>{experience.date}</Date>
        //         </Body>
        //     </Top>
        //     <Description>
        //         {experience?.desc &&
        //             <Span>{experience?.desc}</Span>

        //         }
        //         {experience?.skills &&
        //             <>
        //                 <br />
        //                 <Skills>
        //                     <b>Skills:</b>
        //                     <ItemWrapper>
        //                         {experience?.skills?.map((skill, index) => (
        //                             <Skill>• {skill}</Skill>
        //                         ))}
        //                     </ItemWrapper>
        //                 </Skills>
        //             </>
        //         }
        //     </Description>
        //     {experience.doc &&
        //         <a href={experience.doc} target="new">
        //             <Document src={experience.doc} />
        //         </a>
        //     }
        // </Card>
        <Grid className={classes.Card}>
            <Grid className={classes.Top}>
                <img src={experience.img} alt={experience.role} className={classes.Image} />
                <Grid className={classes.Body}>
                    <Box className={classes.Role}>{experience.role}</Box>
                    <Box className={classes.Company}>{experience.company}</Box>
                    <Box className={classes.Date}>{experience.date}</Box>
                </Grid>
            </Grid>
            <Box className={classes.Description}>
                {experience?.desc &&
                    <Box className={classes.Span}>{experience?.desc}</Box>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Grid className={classes.Skills}>
                            <b>Skills:</b>
                            <Grid className={classes.ItemWrapper}>
                                {experience?.skills?.map((skill, index) => (
                                    <Box className={classes.Skill} key={index}>• {skill}</Box>
                                ))}
                            </Grid>
                        </Grid>
                    </>
                }
            </Box>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <img className={classes.Document} src={experience.docThumbnail} />
                </a>
            }
        </Grid>

    )
}

export default ExperienceCard