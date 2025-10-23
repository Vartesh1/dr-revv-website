
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import DriveAssistPage from './pages/DriveAssistPage';
import GarageAssistPage from './pages/GarageAssistPage';
import InfoPage from './pages/InfoPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/drive-assist" element={<DriveAssistPage />} />
          <Route path="/garage-assist" element={<GarageAssistPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
