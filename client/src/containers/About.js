import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone'
import EqualizerTwoToneIcon from '@material-ui/icons/EqualizerTwoTone'
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone'
import FlashOnTwoToneIcon from '@material-ui/icons/FlashOnTwoTone'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import Beat from '../components/helper/Beat'

function About() {
    const beats = [
        {
            icon: ImportContactsTwoToneIcon,
            title: 'Introduction',
            desc: 'The Illustration of the fields and the specializations inside the healthcare system.',
        },
        {
            icon: SchoolTwoToneIcon,
            title: 'Education',
            desc: 'Following up on the scientific developments in the fields of work concerned with the healthcare system.',
        },
        {
            icon: EqualizerTwoToneIcon,
            title: 'Qualification',
            desc: 'The gradation from theoretical studies to the fields of work.',
        },
        {
            icon: BusinessTwoToneIcon,
            title: 'Employment',
            desc: 'Finding suitable mechanisms and ways to connect graduates with work places.',
        },
        {
            icon: FlashOnTwoToneIcon,
            title: 'Activation',
            desc: 'Working on removing the obstacles found in the healthcare system.',
        },
        {
            icon: PeopleAltTwoToneIcon,
            title: 'Communication',
            desc: 'Building up a communication network among the members of the healthcare system.',
        },
        {
            icon: TrendingUpIcon,
            title: 'Development',
            desc: 'Utilizing the hidden capabilities found in both the healthcare and the educational systems.',
        },
    ]
    return (
        <div>
            <Grid container >

                <Grid
                    item
                    md={12}
                    xs={12}
                  style={{ textAlign:'center' }}
                >
                  <h1 style={{fontSize:'3em', color: '#000b26'}}>About US &nbsp;
                    <i className="fas fa-info-circle" aria-hidden="true"></i>
                  </h1>
                </Grid>

                <Grid
                    item
                    md={6}
                    xs={12}
                  style={{ textAlign:'center', padding: '15px' }}
                >
                  <h1 style={{color:'#a40116', marginTop:'0px'}}>VISION & MISSION</h1>
                </Grid>

              <Grid container direction="column" item md={6} xs={12} style={{padding:'15px'}}>
                <h1 style={{color:'#fc414a', marginTop:'0px', color:'#2276e7',textAlign:'center'}}>OUR BEATS</h1>
                  {beats.map((beat) => {
                      return (
                          <Beat
                              icon={beat.icon}
                              title={beat.title}
                              desc={beat.desc}
                          />
                      )
                  })}
              </Grid>

            </Grid>
        </div>
    )
}

export default About