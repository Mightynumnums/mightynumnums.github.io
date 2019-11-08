import React from 'react';
import Page from '../components/Page.js';
import data from '../data';
import './styles/resume.css';

export default class Resume extends React.Component {
  constructor() {
    super()
    this.state = {
      resume: data
    }
  }
  render() {
    return (
    <Page>
      <div className='myResume'>
          <h1 className='resume-tag'>
            { data.technologies.section_name }
          </h1>
          <div className='skills'>
            <ul>
                {
                this.state.resume.technologies.col_1.map((skill) =>
                    <li key={skill}>
                        { skill }
                    </li>
                )}
            </ul>
            <ul>
                {
                    this.state.resume.technologies.col_2.map((skill) =>
                    <li key={ skill }>
                        { skill }
                    </li>
                )
                }
            </ul>
            <ul>
                {
                    this.state.resume.technologies.col_3.map((skill) =>
                    <li key={ skill }>
                        { skill }
                    </li>
                )
                }
            </ul>
          </div>
        </div>
        <div className='myResume work'>
            <h1 className='resume-tag'>
                { this.state.resume.work.section_name }
            </h1>
            <div className='skills work-exp'>
                <div className='work-header'>
                    { this.state.resume.work.jobs.map((job) => {
                        return (
                            <div key={ job.dates }>
                                <h2>{ job.name }</h2>
                                <h3> { job.title }</h3>
                                <h4>{ job.dates }</h4>
                                <ul className='work-description'>
                                { job.skills.map((skill) => {
                                    return (
                                        <li key={ skill }>
                                            { skill }
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                    )})}
                </div>
            </div>
        </div>

          <div className='myResume education'>
                <h1 className='resume-tag'>
                    { data.education.section_name }
                </h1>
                <div className='skills education'>
                    <div className='education-header'>
                    {
                        this.state.resume.education.education.map((school) => {
                            return (
                                <div className="education-details" key={ school.name }>
                                    <h2>{ school.name }</h2>
                                    <h3>{ school.degree }</h3>
                                    <h4 className="spacer">{ school.dates }</h4>
                                </div>
                        )})
                    }
                    </div>
                </div>
          </div>
    </Page>
    )
  }
}
