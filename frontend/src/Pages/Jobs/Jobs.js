import { Grid, Pagination, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import Container from '../../Components/Container/Container';
import './Jobs.css';

const Jobs = () => {
  const [tabValue, setTabValue] = useState(0);
  const jobs = [
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
    <Container padding='25px 50px'>
      <div className='jobs'>
        <div className='jobs-display'>
          <div className='all-jobs'>
            <Tabs
              value={tabValue}
              className='jobs-tabs'
              onChange={(newValue) => setTabValue(newValue)}
            >
              <Tab value={0} label='All Jobs' />
              <Tab value={1} label='Applied Jobs' />
            </Tabs>
            <div className='jobs-min-view'>
              {jobs.map((job) => {
                return (
                  <div className='job'>
                    <img src={job.recruiterImg} alt='recruiter' />
                    <div>
                      <h3>{job.title}</h3>
                      <span>
                        {job.experienceFrom} - {job.experienceTo} yr
                      </span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                );
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
          <div className='job-details'></div>
        </div>
      </div>
    </Container>
  );
};

export default Jobs;
