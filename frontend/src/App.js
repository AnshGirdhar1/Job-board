import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Layout from './Pages/Layout/Layout';
import Jobs from './Pages/Jobs/Jobs';
import Profile from './Pages/Profile/Profile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/candidate/jobs'
          element={
            <Layout>
              <Jobs />
            </Layout>
          }
        />
        <Route
          path='/candidate/profile'
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
