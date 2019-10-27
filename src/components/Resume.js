import React from 'react';
import Page from '../components/Page.js';
import data from '../data';
import './styles/resume.css';

const Resume = () => {
  return (
    <Page>
      <div className='resume'>
        <div className='myResume'>
          <h2 className='resume-tag'>{ data.technologies.section_name }</h2>
          <div className='skills'>
            <ul>
            {
              data.technologies.skills.map((skill) =>
              <li>{ skill }</li>
              )
            }
            </ul>
          </div>
        </div>
        <div className='myResume work'>
        <h2 className='resume-tag'>{ data.work.section_name }</h2>
        <div className='skills work-exp'>
          <div className='work-header'>
            { data.work.jobs.map((job) => {
              return <div>
                  <h1>{ job.name }</h1>
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

          <div className='myResume educationDiv'>
            <h2 className='resume-tag'>{ data.education.section_name }</h2>
            <div className='skills education'>
              <div className='education-header'>
              {
                data.education.education.map((school) =>
                  <div>
                    <h1>{ school.name }</h1>
                    <h3>{ school.degree}</h3>
                    <h4 className="spacer">{ school.dates}</h4>
                  </div>
                )
            }
              </div>
            </div>
          </div>

        </div>
      </div>
    </Page>
  )
}


export default Resume
