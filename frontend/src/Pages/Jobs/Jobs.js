import { Pagination, Tab, Tabs, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Container from '../../Components/Container/Container';
import './Jobs.css';
import JobCard from '../../Components/JobCard/JobCard';
import JobDetails from '../../Components/JobDetails/JobDetails';

const Jobs = () => {
  const [tabValue, setTabValue] = useState(0);
  const isMobileOrTab = useMediaQuery('(max-width:730px)');
  const jobs = [
    {
      title: 'Product Designer',
      recruiterName: 'Innova',
      recruiterImg:
        'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Software Engineer',
      recruiterName: 'Instagram',
      recruiterImg:
        'https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'Bengaluru',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Business Analyst',
      recruiterName: 'LinkedIn',
      recruiterImg:
        'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Some title',
      recruiterName: 'Innova',
      recruiterImg:
        'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Some title',
      recruiterName: 'Innova',
      recruiterImg:
        'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Some title',
      recruiterName: 'Innova',
      recruiterImg:
        'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Some title',
      recruiterName: 'Innova',
      recruiterImg:
        'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
    {
      title: 'Some title',
      recruiterName: 'Innova',
      recruiterImg:
        'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
      description:
        'sdkfsdk lsnfk klsdnfklsk lkdnfkd lsnfk ksndfk lndfkn lskdnfk ksdnfkn lsdknfkd slkdnfk slkfdkn slkfndkn sldknkn dfkndk',
      location: 'delhi',
      experienceFrom: 0,
      experienceTo: 3,
      skills: ['GoLang', 'Python', 'Something'],
    },
  ];
  return (
    <Container padding={isMobileOrTab ? '0' : '30px'}>
      <div className='jobs'>
        <div className='jobs-display'>
          <div className='all-jobs'>
            <Tabs
              value={tabValue}
              className='jobs-tabs'
              onChange={(e, newValue) => {
                setTabValue(newValue);
              }}
            >
              <Tab value={0} label='All Jobs' />
              <Tab value={1} label='Applied Jobs' />
            </Tabs>
            <div className='jobs-min-view'>
              {jobs.map((job) => {
                return <JobCard job={job} />;
              })}
            </div>
            <Pagination
              siblingCount={0}
              boundaryCount={1}
              count={80}
              className='jobs-pagination'
              color='primary'
            />
          </div>
          {!isMobileOrTab && (
            <JobDetails
              job={{
                title: 'Some title',
                recruiterName: 'Innova',
                recruiterImg:
                  'https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740',
                description: `

#### Responsibilities

- Collaborate with cross-functional teams, including product managers and developers, to define and implement innovative solutions for product direction, visuals, and experience.
- Execute all visual design stages from concept to final hand-off to engineering.
- Conceptualize original ideas that bring simplicity and user-friendliness to complex design roadblocks.
- Create wireframes, user flows, and prototypes to effectively communicate interaction and design ideas.
- Conduct user research and evaluate user feedback to enhance user experiences.
- Establish and promote design guidelines, best practices, and standards.

#### Requirements

- Proven experience as a Product Designer or similar role.
- Strong portfolio showcasing design proficiency and a deep understanding of user-centered design principles.
- Proficiency in design tools such as Sketch, Figma, Adobe Creative Suite, etc.
- Solid understanding of interaction design, information architecture, and user experience.
- Ability to iterate designs and solutions efficiently and intelligently.
- Excellent communication skills to present and articulate design decisions.

#### Qualifications

- Bachelor’s degree in Design, Human-Computer Interaction, or related field.
- [X] years of relevant experience in product design.
- Knowledge of front-end development technologies is a plus.
- Familiarity with Agile and Scrum methodologies.

#### Benefits

- Competitive salary.
- Health, dental, and vision insurance.
- 401(k) retirement plan.
- Flexible working hours.
- Professional development opportunities.
`,
                location: 'delhi',
                experienceFrom: 0,
                experienceTo: 3,
                skills: ['GoLang', 'Python', 'Something'],
              }}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Jobs;
