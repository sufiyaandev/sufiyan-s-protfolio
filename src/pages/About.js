import React from 'react';
import './about.css';
import imgAbout from '../images/IMG_2909.JPG'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProgressBar from 'react-bootstrap/ProgressBar';


function About() {
  return (
    <div className="about-main">
      <div className="head-about">
        <span>About Me</span>
        <h2>About Me</h2>
        <p>
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
      </div>
      <div className="content-about">
        <div className="img-about">
          <img src={imgAbout} alt="" srcset="" />
        </div>
        <div className="text-about">
        <div className="text-in-row">
                <div class="text-in-colum">
                  <ul className='text-in-colum-ul'>
                    <li><ChevronRightIcon/> <strong>Name:</strong> <span>Mohammed Sufiyan</span></li>
                    <li> <ChevronRightIcon/> <strong>Website:</strong> <a href='https://sufiyan-s-protfolio.vercel.app/'>https://sufiyan-s-protfolio.vercel.app/</a></li>
                    <li> <ChevronRightIcon/> <strong>Phone:</strong> <span>+91 9895711307</span></li>
                    <li> <ChevronRightIcon/> <strong>City:</strong> <span>Kerala, INDIA</span></li>
                  </ul>
                </div>
                <div class="text-in-colum">
                  <ul className='text-in-colum-ul'>
                    <li><ChevronRightIcon/>  <strong>Age:</strong> <span>22</span></li>
                    <li><ChevronRightIcon/>  <strong>Diploma:</strong> <span>Electronics Engineering</span></li>
                    <li><ChevronRightIcon/>  <strong>PhEmailone:</strong> <span>sifuak99@gmail.com</span></li>
                    <li><ChevronRightIcon/>  <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <div className="progress-div">
              {/* <ProgressBar now={75} striped animated label={`${75}%`} variant="success"/> */}
              </div>
        </div>

      </div>
    </div>
  );
}

export default About;
