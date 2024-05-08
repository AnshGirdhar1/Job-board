import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './RecruiterAndLocation.css';

const RecruiterAndLocation = ({ recruiterName, location }) => {
  return (
    <div className='recruiter-and-location'>
      <div className='recruiter'>
        <ApartmentIcon fontSize='15px' />
        <span>{recruiterName}</span>
      </div>
      <div className='location'>
        <LocationOnIcon fontSize='15px' />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default RecruiterAndLocation;
