import { Link } from 'react-router-dom';
import './NotFound.css';

import React from 'react';

const NotFound = () => {
  return (
    <>
      <h1>404! Pagina niet gevonden!</h1>
      <Link to="/">Klik hier om terug te gaan naar de homepage</Link>
    </>
  );
};

export default NotFound;
