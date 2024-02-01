import React from 'react'
// import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, Grid, Link } from '@mui/material';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        NavContainer: {
            background: `${theme.card_light}`,
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            position: 'sticky',
            top: '0',
            zIndex: '10',
            '@media (max-width: 960px)': {
                transition: '0.8s all ease'
            }
            
        },
        NavWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '60px',
            zIndex: '1',
            width: '100%',
            padding: '0 24px',
            maxWidth: '1200px',
        },
        NavLogo: {
            width: '80%',
            padding: '0 6px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            textDecoration: 'none',
            '@media (max-width: 640px)': {
                padding: '0 0px'
            }
        },
        MobileIcon: {
            display: 'none',
            '@media (max-width: 960px)': {
                display: 'block',
                position: 'absolute',
                top: '0',
                right: '0',
                transform: 'translate(-100%, 60%)',
                fontSize: '1.8rem',
                cursor: 'pointer',
                color: `${theme.text_primary}`
            }
        },
        NavItems: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '32px',
            padding: '0 6px',
            listStyle: 'none',
            '@media (max-width: 960px)': {
                display: 'none'
            }
        },
        NavLink: {
            color: `${theme.text_primary}`,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            padding: '0 1rem',
            height: '100%',
            cursor: 'pointer',
            '&:hover': {
                color: `${theme.primary}`
            },
            '&.active': {
                borderBottom: `2px solid ${theme.primary}`
            }
        },
        ButtonContainer: {
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            padding: '0 6px',
            '@media (max-width: 960px)': {
                display: 'none'
            }
        },
        GitHubButton: {
            border: `1.8px solid ${theme.primary}`,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            height: '70%',
            borderRadius: '20px',
            color: `${theme.primary}`,
            cursor: 'pointer',
            padding: '0 20px',
            fontWeight: '500',
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'all 0.6s ease-in-out',
            '&:hover': {
                background: `${theme.primary}`,
                color: `${theme.white}`
            },
            '@media screen and (max-width: 768px)': {
            fontSize: '14px'
            }
        },
        MobileMenu: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
            position: 'absolute',
            top: '80px',
            right: '0',
            width: '100%',
            padding: '12px 40px 24px 40px',
            background: `${theme.card_light}`,
            transition: 'all 0.6s ease-in-out',
            transform: `${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')}`,
            borderRadius: '0 0 20px 20px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
            opacity: `${({ isOpen }) => (isOpen ? '100%' : '0')}`,
            zIndex: `${({ isOpen }) => (isOpen ? '1000' : '-1000')}`,
            alignItems: 'center',
        },
        MobileMenuItems: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            listStyle: 'none',
            width: '100%',
            height: '100%',
        },
        MobileMenuLink: {
            color: `${theme.text_primary}`,
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            textDecoration: 'none',
            '&:hover': {
                color: `${theme.primary}`
            },
            '&.active': {
                borderBottom: `2px solid ${theme.primary}`
            }
        },
        MobileMenuButton: {
            border: `1.8px solid ${theme.primary}`,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            height: '70%',
            borderRadius: '20px',
            color: `${theme.primary}`,
            cursor: 'pointer',
            padding: '0 20px',
            fontWeight: '500',
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'all 0.6s ease-in-out',
            '&:hover': {
                background: `${theme.primary}`,
                color: `${theme.white}`
            },
            '@media screen and (max-width: 768px)': {
                fontSize: '14px'
            }
        },
        MobileLink: {
            color: `${theme.text_primary}`,
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            textDecoration: 'none',
            '&:hover': {
                color: `${theme.primary}`
            },
            '&.active': {
                borderBottom: `2px solid ${theme.primary}`
            }
        },
        MobileNavLogo: {
            width: '80%',
            padding: '0 6px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            textDecoration: 'none',
            '@media (max-width: 640px)': {
                padding: '0 0px'
            }
        },
        Span: {
        padding: '0 4px',
        fontWeight: 'bold',
        fontSize: '18px'
        }
    }));
    const classes = useStyles();

  return (
    <Grid className={classes.NavContainer}>
      <Grid className={classes.NavWrapper}>
        <Link to='/' className={classes.NavLogo}>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <span className={classes.Span}>Portfolio</span>
          </a>
        </Link>
        <Box className={classes.MobileIcon}>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </Box>
        <ul className={classes.NavItems}>
          <a className={classes.NavLink} href="#about">About</a>
            <a className={classes.NavLink} href='#skills'>Skills</a>
            <a className={classes.NavLink} href='#experience'>Experience</a>
            <a className={classes.NavLink} href='#projects'>Projects</a>
            <a className={classes.NavLink} href='#education'>Education</a>
        </ul>
        <Box className={classes.ButtonContainer}>
          <a className={classes.GitHubButton} href={Bio.github} target="_blank">Github Profile</a>
        </Box>
        {
          isOpen &&
          <Box isOpen={isOpen} className={classes.MobileMenu}>
            <a className={classes.MobileLink} href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</a>
            <a className={classes.MobileLink}  href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</a>
            <a className={classes.MobileLink}  href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</a>
            <a className={classes.MobileLink}  href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</a>
            <a className={classes.MobileLink}  href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</a>
            <a className={classes.GitHubButton} style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</a>
          </Box>
        }
      </Grid>
    </Grid>
  )
}

export default Navbar