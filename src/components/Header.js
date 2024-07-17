import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { teal } from '@mui/material/colors';

function Header() {
  function toggleSideBar() {
    const sidebar = document.querySelector('.mob-list');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
  }
  const handleAboutClick = (event) => {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header id="header">
        <nav className="navbar">
          <ul className="list">
            <Link href="/">
              {' '}
              <li>Home</li>
            </Link>
            <a href="#about" id='about-link' onClick={handleAboutClick}>
              <li>About</li>
            </a>
            <li>Resume</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Drop Down <KeyboardArrowDownIcon fontSize="small" />
              <ul className="drop-down">
                <li>drop 1</li>
                <li>drop 2</li>
                <li>drop 3</li>
                <li>drop 4</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* MOBILE VIEW */}

        <nav className="mob-navbar">
          <MenuIcon onClick={toggleSideBar} sx={{ color: teal[50] }} />
          <ul className="mob-list">
            <Link href="/">
              {' '}
              <li>Home</li>
            </Link>
            <a href="#about" id='about-link' onClick={handleAboutClick}>
              <li>About</li>
            </a>
            <li>Resume</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Drop Down <KeyboardArrowDownIcon fontSize="small" />
              <ul className="mob-drop-down">
                <li>drop 1</li>
                <li>drop 2</li>
                <li>drop 3</li>
                <li>drop 4</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
