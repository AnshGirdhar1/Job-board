import PrimaryBlueButton from '../PrimaryBlueButton/PrimaryBlueButton';
import PrimaryBorderButton from '../PrimaryBorderButton/PrimaryBorderButton';
import RecruiterAndLocation from '../RecruiterAndLocation/RecruiterAndLocation';
import './JobDetails.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const JobDetails = ({ job }) => {
  console.log(job)
  return (
    <div className='job-details'>
      <div className='job-content'>
        <h2>{job.title}</h2>
        <RecruiterAndLocation
          recruiterName={job.recruiterName}
          location={job.location}
        />
        <div>Posted on 12/3/2023</div>
        <div>
          <PrimaryBlueButton>Apply</PrimaryBlueButton>
          <PrimaryBorderButton>Save Job</PrimaryBorderButton>
        </div>
      </div>
      {/* <div className='job-description'> */}
        <ReactMarkdown className={'job-description'} remarkPlugins={remarkGfm}>
          {job.description}
        </ReactMarkdown>
      {/* </div> */}
    </div>
  );
};

export default JobDetails;
