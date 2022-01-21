import React from 'react'
import "../styles/Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                  <LinkedInIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                  <FacebookIcon />
            </div>
            <p> &copy; 2021 pedropizza.com</p>
        </div>
    )
}

export default Footer;