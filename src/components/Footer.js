import React from 'react'
import './footer.css'
import FooterImg from '../images/web-footer.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-img-div"><img src={FooterImg} alt="" /></div>
    <div className="container"> 
      <h2>Sufiyan</h2>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links">
        <a href=" https://wa.me/919895711307"><WhatsAppIcon/></a>
        <a href="https://www.facebook.com/sufiyan.atthekattil?mibextid=ZbWKwL "><FacebookIcon/></a>
        <a href="https://www.instagram.com/__sufiyan_a/" ><InstagramIcon/></a>
        <a href="linkedin.com/in/mohammad-sufiyan-866b38263" ><LinkedInIcon/> </a>
        <a href="https://github.com/sufiyaandev"><GitHubIcon/></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>Sufiyan</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
  )
}

export default Footer