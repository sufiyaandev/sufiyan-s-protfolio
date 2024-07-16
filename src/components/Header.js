import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  function toggleSideBar() {
    const sidebar = document.querySelector('.mob-list');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
  }
  return (
    <div>
      <header id="header">
        <nav className="navbar">
          <ul className="list">
            <Link href="/">
              {' '}
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Resume</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Drop Down  <KeyboardArrowDownIcon fontSize='small'/>
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
                   <MenuIcon onClick={toggleSideBar}/>
          <ul className="mob-list">
            <Link href="/">
              {' '}
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Resume</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Drop Down  <KeyboardArrowDownIcon fontSize='small'/>
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
