import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';

const MainPage = lazy(() => import('./components/pages/MainPage/MainPage.jsx'));
const ClothesPage = lazy(() => import('./components/pages/ClothesPage/ClothesPage.jsx'));
const AccessoriesPage = lazy(() => import('./components/pages/AccessoriesPage'));
const BijouteriePage = lazy(() => import('./components/pages/BijouteriePage'));
const ShoesPage = lazy(() => import('./components/pages/ShoesPage'));
const OtherPage = lazy(() => import('./components/pages/OtherPage'));
const MembersPage = lazy(() => import('./components/pages/MembersPage/MembersPage.jsx'));
const ProfilePage = lazy(() => import('./components/pages/ProfilePage/ProfilePage.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerCircular size={49} thickness={100} speed={96} color="rgba(57, 172, 166, 0.84)" secondaryColor="rgba(57, 172, 123, 0.21)" />}>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/clothes' element={<ClothesPage />} />
            <Route path='/accessories' element={<AccessoriesPage />} />
            <Route path='/bijouterie' element={<BijouteriePage />} />
            <Route path='/shoes' element={<ShoesPage />} />
            <Route path='/other' element={<OtherPage />} />
            <Route path='/members' element={<MembersPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
