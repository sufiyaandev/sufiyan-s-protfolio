import React from 'react'
import './home.css'
import Header from '../components/Header'
import homeImage from '../images/IMG_4938.JPG'


function Home() {

    // const imageId="1VTlJ-5HWbUBnUIZuyn93Svpq13mcUnTX";
    // const imageUrl=`https://drive.google.com/uc?export=view&id=${imageId}`
  
  return (
    <div className='home-main'>
      
        <div className="header-div">
            <Header/>
        </div>
        <div className="home-text-div">
        <h1>Mohammed Sufiyan.</h1>
        <h2>I'm a Web Developer In Cosmo Solution</h2>
        </div>
        <div className="home-img-div">
        <img className='home-img' src={homeImage} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Home