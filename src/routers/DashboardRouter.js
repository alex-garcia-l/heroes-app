import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heros/HeroScreen';
import { HomeScreen } from '../components/HomeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

import { Navbar } from '../components/ui/Navbar';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact index path="/" element={<HomeScreen />} />
          <Route exact path="marvel" element={<MarvelScreen />} />
          <Route exact path="search" element={<SearchScreen />} />
          <Route exact path="hero/:id" element={<HeroScreen />} />
          <Route exact path="dc" element={<DcScreen />} />
        </Routes>
      </div>
    </>
  );
};
