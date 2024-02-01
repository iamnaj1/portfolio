import React from 'react'
import HeroImg from '../../images/pp.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import HeroBgAnimation from './hero-bg-animation';

const HeroSection = () => {
    const theme = useTheme();
    const useStyles = makeStyles(() => ({
        HeroContainer : {
            background: `${theme.card_light}`,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            padding: '80px 30px',
            '@media (max-width: 960px)': {
                padding: '66px 16px'
            },
            '@media (max-width: 640)': {
                padding: '32px 16px'
            },
            zIndex: '1',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)'
        },
        HeroBg: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'end',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            maxWidth: '1360px',
            overflow: 'hidden',
            padding: '0 30px',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            '@media (max-width: 960px)': {
                justifyContent: 'center',
                padding: '0 0px'
            }
        },
        HeroInnerContainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1100px',
            '@media (max-width: 960px)': {
                flexDirection: 'column'
            }
        },
        HeroLeftContainer: {
            width: '100%',
            order: '1',
            '@media (max-width: 960px)': {
                order: '2',
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            '@media (max-width: 640px)': {
                order: '2',
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
        },
        HeroRightContainer: {
            width: '100%',
            display: 'flex',
            order: '2',
            justifyContent: 'end',
            gap: '12px',
            '@media (max-width: 960px)': {
                order: '1',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '80px'
            },
            '@media (max-width: 640px)': {
                marginBottom: '30px'
            }
        },
        Img: {
            position: 'relative',
            width: '100%',
            height: '100%',
            maxWidth: '400px',
            maxHeight: '400px',
            borderRadius: '50%',
            border: '2px solid ${theme.primary}',
            '@media (max-width: 768px)': {
                maxWidth: '400px',
                maxHeight: '400px'
            },
            '@media (max-width: 640px)': {
                maxWidth: '280px',
                maxHeight: '280px'
            }
        },
        Title: {
            fontWeight: '700',
            fontSize: '50px',
            color: `${theme.text_primary}`,
            lineHeight: '68px',
            '@media (max-width: 960px)': {
                textAlign: 'center'
            },
            '@media (max-width: 640px)': {
                fontSize: '40px',
                lineHeight: '48px',
                marginBottom: '8px'
            }
        },
        TextLoop: {
            fontWeight: '600',
            fontSize: '32px',
            display: 'flex',
            gap: '12px',
            color: `${theme.text_primary}`,
            lineHeight: '68px',
            '@media (max-width: 960px)': {
                textAlign: 'center'
            },
            '@media (max-width: 640px)': {
                fontSize: '22px',
                lineHeight: '48px',
                marginBottom: '16px'
            }
        },
        Span: {
            color: `${theme.primary}`,
            cursor: 'pointer'
        },
        SubTitle: {
            fontSize: '20px',
            lineHeight: '32px',
            marginBottom: '42px',
            color: `${theme.text_primary + 95}`,
            '@media (max-width: 960px)': {
                textAlign: 'center'
            },
            '@media (max-width: 640px)': {
                fontSize: '16px',
                lineHeight: '32px'
            }
        },
        ResumeButton: {
            WebkitAppearance: 'button',
            MozAppearance: 'button',
            appearance: 'button',
            textDecoration: 'none',
            width: '95%',
            maxWidth: '300px',
            textAlign: 'center',
            padding: '16px 0',
            color: `${theme.white}`,
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: '600',
            transition: 'all 0.2s ease-in-out !important',
            background: 'hsla(271, 100%, 50%, 1)',
            background: 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)',
            background: '-moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)',
            background: '-webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)',
            boxShadow: '20px 20px 60px #1F2634, -20px -20px 60px #1F2634',
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'all 0.4s ease-in-out',
                boxShadow: '20px 20px 60px #1F2634, filter: brightness(1)'
            },
            '@media (max-width: 640px)': {
                padding: '12px 0',
                fontSize: '18px'
            }
        }
    }));
    const classes = useStyles();
    return (
        <div id="about">
            <Grid container className={classes.HeroContainer}>
                <Grid className={classes.HeroBg}>
                    <HeroBgAnimation />
                </Grid>
                <Grid className={classes.HeroInnerContainer}>
                    <Grid id="Left" className={classes.HeroLeftContainer}>
                        <Box className={classes.Title}>Hi, I am <br /> {Bio.name}</Box>
                        <Box className={classes.TextLoop}>
                            I am a
                            <Box className={classes.Span}>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className={classes.SubTitle}>{Bio.description}</Box>
                        <a className={classes.ResumeButton} href={Bio.resume} target='display'>Check Resume</a>
                    </Grid>

                    <Grid id="Right" className={classes.HeroRightContainer}>
                        <img src={HeroImg} alt="hero-image" className={classes.Img}/>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default HeroSection