import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowSummaryScreen from '../Component/ShowSummary';
import ShowList from '../Component/ShowListScreen';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/summary" element={<ShowSummaryScreen/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
