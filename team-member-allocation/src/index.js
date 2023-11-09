import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Employees from './components/Employees';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Employees />
    <Footer />
  </React.StrictMode>
);

