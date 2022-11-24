import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Main } from './Components/Main/Main';

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Home />
        {/*<Main />
  <Footer />*/}
      </Router>
    </>
  );
};

export default App;
