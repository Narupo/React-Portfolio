import React from 'react';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1>The Village Hidden On The Web </h1>
    </header>
  );
}

export default Header;