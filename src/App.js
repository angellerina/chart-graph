import React, { useState } from 'react';
import GeoForm from './components/GeoForm';
import WeatherChart from './components/WeatherChart';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  const [latLng, setLatLng] = useState(null);

  return (
    <Router>
    <Switch>
    <Route path="/weather-chart">

    <div>
    <Header />
    <div className="app">
      {/* form goes here */}
      <GeoForm setLatLng={setLatLng} />

      {/* chart goes here */}
      {latLng && <WeatherChart latLng={latLng} />}
    </div>
    <Footer />
    </div>

    </Route>
    </Switch>
    </Router>
  );
}
