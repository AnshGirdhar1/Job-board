import './JobCard.css';
import RecruiterAndLocation from '../RecruiterAndLocation/RecruiterAndLocation';

const JobCard = ({ job }) => {
  return (
    <div
      className='job-card'
      onClick={(e) => (e.target.style.backgroundColor = '#F4F5FF')}
    >
      <img src={job.recruiterImg} alt='recruiter' />
      <div className='job-info'>
        <h4>{job.title}</h4>
        <RecruiterAndLocation
          recruiterName={job.recruiterName}
          location={job.location}
        />
      </div>
    </div>
  );
};

export default JobCard;
