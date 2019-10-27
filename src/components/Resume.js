import React from 'react';
import Page from '../components/Page.js';
import data from '../data';
import './styles/resume.css';

const Resume = () => {
  return (
    <Page>
      <div className='myResume'>
          <h1 className='resume-tag'>{ data.technologies.section_name }</h1>
          <div className='skills'>
            <ul>
            {
              data.technologies.col_1.map((skill) =>
              <li>{ skill }</li>
              )
            }
            </ul>
            <ul>
            {
              data.technologies.col_2.map((skill) =>
              <li>{ skill }</li>
              )
            }
            </ul>
            <ul>
            {
              data.technologies.col_3.map((skill) =>
              <li>{ skill }</li>
              )
            }
            </ul>
          </div>
        </div>
        <div className='myResume work'>
        <h1 className='resume-tag'>{ data.work.section_name }</h1>
        <div className='skills work-exp'>
          <div className='work-header'>
            { data.work.jobs.map((job) => {
              return <div>
                  <h2>{ job.name }</h2>
                  <h3> {job.title }</h3>
                  <h4>{ job.dates }</h4>
                  <ul className='work-description'>
                    {job.skills.map((skill) => {
                      return <li>{ skill }</li>
                    })}
                  </ul>
                </div>

            })}
          </div>
        </div>

          <div className='myResume education'>
            <h1 className='resume-tag'>{ data.education.section_name }</h1>
            <div className='skills education'>
              <div className='education-header'>
              {
                data.education.education.map((school) =>
                  <div class="education-details">
                    <h2>{ school.name }</h2>
                    <h3>{ school.degree }</h3>
                    <h4 className="spacer">{ school.dates }</h4>
                  </div>
                )
            }
              </div>
            </div>
          </div>
        </div>
    </Page>
  )
}

export default Resume
