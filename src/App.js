import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import Routes from './components/Routes'


function App() {
  return (
    <div className="container">
    <h2>This app shows how to PREVENT duplicate ROUTE when click on the SAME ROUTE </h2>
    <h3>(Solution is in Routes.js - componentDidMount)</h3>
      <BrowserRouter >
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
