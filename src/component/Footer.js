import React from 'react';
import "./footer.css";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
  return (
    <div className='footer'>
<div className='business-info'>
      <span><LocalPhoneIcon style={{color:"red"}}/> 0714444370/0645073613

</span>
<span> <MailIcon style={{color:"red"}}/> Balepholding@gmail.com/Djayultimate@gmail.com
</span>
<span><BusinessIcon style={{color:"red"}}/> Thohoyandou 0950</span>
      </div>
      
      <div className='logo'>
        <span>Bhe sound system
(BHE) Balep Holding Entertainment</span>
        <span>Copyright © 2024 All rights reserved</span>
        <span className='dev-name'>Developed by Tshivhula Phumudzo(P3.dev)</span>
      </div>
      <div className='social-link'>
        <span ><WhatsAppIcon style={{color:"red"}}/></span>
        <span ><XIcon style={{color:"red"}}/></span>
        <span ><LinkedInIcon style={{color:"red"}}/></span>
        <span ><img src='' alt=''/></span>
      </div>
        
      </div>

    
  )
}
