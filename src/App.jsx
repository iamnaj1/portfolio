// import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
// import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/navbar/navbar-container.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";
import './App.css';
import styled from "styled-components";
import HeroSection from "./components/hero-section/hero-section-container.jsx";
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  bg:"#1C1C27",
  bgLight: "#1C1E27",
  primary:"#854CE6",
  text_primary:"#F2F3F4",
  text_secondary:"#b1b2b3",
  card:"#171721",
  card_light: '#191924',
  button:"#854CE6",
  white:"#FFFFFF",
  black:"#000000",
});

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const useStyles = makeStyles(() => ({
    Body: {
      background: `${theme.bg}`,
      width: '100%',
      overflowX: 'hidden'
    },
    Wrapper: {
      background: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`,
      width: '100%',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)'
    }
  }));
  const classes = useStyles();
  console.log(openModal)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router >
          <Navbar />
          <Grid className={classes.Body}>
            <HeroSection />
            <Grid className={classes.Wrapper}>
              {/* <Skills /> */}
              {/* <Experience /> */}
            </Grid>
            {/* <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            } */}
          </Grid>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
