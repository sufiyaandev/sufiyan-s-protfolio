import React from 'react';
import './home.css';
import Header from '../components/Header';
import homeImage from '../images/IMG_4938.JPG';
import About from './About';
import Footer from '../components/Footer';

function Home() {

  const handleAboutClick = (event) => {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-main">
      <div className="header-div">
        <Header />
      </div>
      <div className="home-text-div">
        <h1>Sufiyan.</h1>
        <h4>I'm a Web Developer In Cosmo Solution.</h4>

        <a href="#about" id='about-link' onClick={handleAboutClick}>
          <svg
            className="svg-text"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#e8eaed"
          >
            <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
          </svg>
        </a>
      </div>
      <div className="home-img-div">
        <img className="home-img" src={homeImage} alt="" srcset="" />
      </div>
      <div id="about" className="home-about-div">
        <About />
        <div className='home-footer-div'><Footer/></div>
      </div>
      
    </div>
  );
}

export default Home;
