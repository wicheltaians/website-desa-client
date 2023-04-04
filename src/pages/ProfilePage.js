import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile/ProfileDetails';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import data from '../json/profileData.json';

export default function ProfilePage() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Profil Desa', path: '/profil-desa' },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Profil Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Breadcrumb links={links} />
      <Header />
      <Profile data={data.profileData} />
    </>
  );
}
