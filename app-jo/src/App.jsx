import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composants/Navbar';
import './App.css'
import Home from './composants/Home';
import Sports from './composants/Sports';
import Epreuves from './composants/Epreuves';
import Connexion from './composants/Connexion';
import SitesOlympiques from './composants/SitesOlympiques';
import PrivateRoute from './composants/context/PrivateRoute';
import Admin from './composants/backoffice/Admin';
import AdminSports from './composants/backoffice/Sports';
import AdminEpreuves from './composants/backoffice/Epreuves';
import AdminAthletes from './composants/backoffice/Athletes';
import FormSport from './composants/backoffice/FormSport';
import FormEpreuve from './composants/backoffice/FormEpreuve';
import FormAthlete from './composants/backoffice/FormAthlete';
import Single from './composants/Single';
import Podium from './composants/Podium';



function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/sports/:id" element={<Single/>} />
        <Route path="/epreuves" element={<Epreuves />} />
        <Route path="/sites" element={<SitesOlympiques />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/podium" element={<Podium />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/sports" element={<AdminSports />} />
          <Route path="/admin/epreuves" element={<AdminEpreuves />} />
          <Route path="/admin/athletes" element={<AdminAthletes />} />
          <Route path="/admin/formsport/:id?" element={<FormSport />} />
          <Route path="/admin/formepreuve/:id?" element={<FormEpreuve />} />
          <Route path="/admin/formathlete/:id?" element={<FormAthlete />} />
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
