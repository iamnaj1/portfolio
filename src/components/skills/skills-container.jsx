import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import { makeStyles, useTheme } from '@mui/styles'
import { Box, Grid } from '@mui/material'

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// position: relative;
// z-index: 1;
// align-items: center;
// `

// const Wrapper = styled.div`
// position: relative;
// display: flex;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;
// width: 100%;
// max-width: 1100px;
// gap: 12px;
// @media (max-width: 960px) {
//     flex-direction: column;
// }
// `

// export const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
// margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// export const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         font-size: 16px;
//     }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 30px;
//   justify-content: center;
// `

// const Skill = styled.div`
//   width: 100%;
//   max-width: 500px;
//   background: ${({ theme }) => theme.card};
//   border: 0.1px solid #854CE6;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
//   @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }


// `

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center; 
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `

// const SkillItem = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   border-radius: 12px;
//   padding: 12px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `

// const SkillImage = styled.img`
//   width: 24px;
//   height: 24px;
// `


const Skills = () => {
    const theme = useTheme();
    const useStyles = makeStyles(() => ({
        Container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '1',
            alignItems: 'center'
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
        SkillsContainer: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '30px',
            gap: '30px',
            justifyContent: 'center'
        },
        Skill: {
            width: '100%',
            maxWidth: '500px',
            background: 'card',
            border: '0.1px solid #854CE6',
            boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
            borderRadius: '16px',
            padding: '18px 36px',
            '@media (max-width: 768px)': {
                maxWidth: '400px',
                padding: '10px 36px'
            },
            '@media (max-width: 500px)': {
                maxWidth: '330px',
                padding: '10px 36px'
            }
        },
        SkillTitle: {
            fontSize: '28px',
            fontWeight: '600',
            color: `${theme.text_secondary}`,
            marginBottom: '20px',
            textAlign: 'center'
        },
        SkillList: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px'
        },
        SkillItem: {
            fontSize: '16px',
            fontWeight: '400',
            color: `${theme.text_primary}`,
            border: `1px solid ${theme.text_primary}`,
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            '@media (max-width: 768px)': {
                fontSize: '14px',
                padding: '8px 12px'
            },
            '@media (max-width: 500px)': {
                fontSize: '14px',
                padding: '6px 12px'
            }
        },
        SkillImage: {
            width: '24px',
            height: '24px'
        }
    }));
    const classes = useStyles();


  return (
    <Grid id="skills" className={classes.Container}>
      <Grid className={classes.Wrapper}>
        <Box className={classes.Title}>Skills</Box>
        <Box className={classes.Desc}>Here are some of my skills on which I have been working on for the past 2 years.
        </Box>
        <Grid className={classes.SkillsContainer}>
          {skills.map((skill, index) => (
            <Grid className={classes.Skill} key={index}>
              <Box className={classes.SkillTitle}>{skill.title}</Box>
              <Grid className={classes.SkillList}>
                {skill.skills.map((item, idx) => (
                  <Box className={classes.SkillItem} key={idx}>
                    <img src={item.image} alt={item.name} className={classes.SkillImage} />
                    {item.name}
                  </Box>
                ))}
              </Grid>
            </Grid>
          ))}

        </Grid>
      </Grid>
    </Grid>
  )
}

export default Skills