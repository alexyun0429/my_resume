import React, { useState } from 'react';

import './Resume.css';
import resumeData from '../../utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';

import { Grid, Typography } from '@mui/material';
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {

  const [isExpanded, setIsExpanded] = useState(
    new Array(resumeData.experiences.length).fill(false)
  );
  
  const toggleExpanded = (index) => {
    setIsExpanded((prevIsExpanded) =>
      prevIsExpanded.map((value, i) => (i === index ? !value : value))
    );
  };
  
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'> About me </h6>
        </Grid>
        <Grid item xs={12} >
          <Typography variant='body2 ' className='aboutme_text'>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experience */}
      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>

            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                {resumeData.experiences.map((experience, index) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{experience.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                      {isExpanded[index] ? (
                        <Typography variant='body2' className='timeline_description'>
                          {experience.description}
                        </Typography>
                      ) : (
                        <div>
                          <Typography variant='body2' className='timeline_description'>
                            {experience.description.slice(0, 100) + '...'}
                          </Typography>
                          <button className='timeline_description_limitbutton' onClick={() => toggleExpanded(index)}>Show more</button>
                        </div>
                      )}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline 
                  title='Education' 
                  icon={<SchoolIcon />}>
                    {resumeData.educations.map((education) => (
                      <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className='timeline_content'>
                          <Typography className='timeline_title'>{education.title}</Typography>
                          <Typography variant='subtitle2' className='timeline_date'>{education.bachelor}</Typography>
                          <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                          {isExpanded[index] ? (
                        <Typography variant='body2' className='timeline_description'>
                          {education.description}
                        </Typography>
                      ) : (
                        <div>
                          <Typography variant='body2' className='timeline_description'>
                            {education.description.slice(0, 100) + '...'}
                          </Typography>
                          <button className='timeline_description_limitbutton' onClick={() => toggleExpanded(index)}>Show more</button>
                        </div>
                      )}
                        </TimelineContent>
                      </TimelineItem>
                    ))}
              </CustomTimeline>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container className='section'>
            
      </Grid>

      {/* Contact */}
      <Grid container className='section'>
            
      </Grid>
    </>
  )
}

export default Resume;