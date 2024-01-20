import Navbar from '../Navbar/Navbar';
import './Banner.css';
import BannerHeroLogin from '../../images/jpg/Banner-Hero-Login.png';
import BannerHeroSignup from '../../images/jpg/Banner-Hero-Signup.png';
import Container from '../Container/Container';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { useState } from 'react';
const Banner = () => {
  const [isformTypeLogin, setIsFormTypeLogin] = useState(true);
  return (
    <div className='banner'>
      <Container>
        <Navbar setIsFormTypeLogin={setIsFormTypeLogin} />
        <div
          className='banner-content'
          style={{
            flexDirection: isformTypeLogin ? 'row' : 'row-reverse',
          }}
        >
          <div className='hero-image'>
            <img
              loading='eager'
              src={isformTypeLogin ? BannerHeroLogin : BannerHeroSignup}
              alt='banner-hero'
            />
          </div>
          <div className='banner-form'>
            {isformTypeLogin ? <Login /> : <Signup />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
