import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, Grid } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const useStyles = makeStyles(() => ({
        FooterContainer: {
            width: '100%',
            padding: '2rem 0',
            display: 'flex',
            justifyContent: 'center',
            background: 'linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%)'
        },
        FootWrapper: {
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            alignItems: 'center',
            padding: '1rem',
            color: theme.text_primary,
        },
        Logo: {
            fontSize: '2rem',
            fontWeight: '600',
            color: theme.text_primary,
        },
        Nav: {
            width: '100%',
            maxWidth: '800px',
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            justifyContent: 'center',
            '@media (max-width: 768px)': {
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '12px',
            }  
        },
        NavLink: {
            color: theme.text_primary,
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
                color: theme.primary,
            },
            '@media (max-width: 768px)': {
                fontSize: '1rem',
            }
        },
        SocialMediaIcons: {
            display: 'flex',
            marginTop: '1rem',
        },
        SocialMediaIcon: {
            display: 'inline-block',
            margin: '0 1rem',
            fontSize: '1.5rem',
            color: theme.text_primary,
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
                color: theme.primary,
            }
        },
        Copyright: {
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            color: theme.soft2,
            textAlign: 'center',
        }
    }));
    const classes = useStyles();
    return (
        <Grid container className={classes.FooterContainer}>
            <Grid container className={classes.FootWrapper}>
                <Box className={classes.Logo}>Jan Cielo Gayares</Box>
                <Box className={classes.Nav}>
                    <a href="#about" className={classes.NavLink}>About</a>
                    <a href="#skills" className={classes.NavLink}>Skills</a>
                    <a href="#experience" className={classes.NavLink}>Experience</a>
                    <a href="#projects" className={classes.NavLink}>Projects</a>
                    <a href="#education" className={classes.NavLink}>Education</a>
                </Box>
                <Box className={classes.SocialMediaIcons}>
                    {/* <a href={Bio.facebook} target="display" className={classes.SocialMediaIcon}><FacebookIcon /></a> */}
                    {/* <a href={Bio.twitter} target="display" className={classes.SocialMediaIcon}><TwitterIcon /></a> */}
                    <a href={Bio.linkedin} target="display" className={classes.SocialMediaIcon}><LinkedInIcon /></a>
                    {/* <a href={Bio.insta} target="display" className={classes.SocialMediaIcon}><InstagramIcon /></a> */}
                </Box>
                <Box className={classes.Copyright}>
                    &copy; 2024 Jan Cielo Gayares. All rights reserved.
                </Box>
            </Grid>
        </Grid>
    );
}

export default Footer;