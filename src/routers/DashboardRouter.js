import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heros/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

import { Navbar } from '../components/ui/Navbar';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact index path="/" element={<SearchScreen />} />
          <Route exact path="marvel" element={<MarvelScreen />} />
          <Route exact path="hero/:heroID" element={<HeroScreen />} />
          <Route exact path="dc" element={<DcScreen />} />
        </Routes>
      </div>
    </>
  );
};
