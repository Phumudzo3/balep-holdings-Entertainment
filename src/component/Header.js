// Header.js

import React, { useState } from 'react';
import './header.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'react-slideshow-image/dist/styles.css';
import CustomModal from './Modal';
import Booking from './Booking';
// /import WhatsApp from '@mui/icons-material/WhatsApp';


export const Header = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [isAboutModalOpen, setIAboutModalOpen] = useState(false);
  const [isWhatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [isFacebookModalOpen, setFacebookModalOpen] = useState(false);
  const openFacebookModal = () => {
    setFacebookModalOpen(true);
  };

  const closeFacebookModal = () => {
    setFacebookModalOpen(false);
  };
  const openWhatsappModal = () => {
    setWhatsappModalOpen(true);
  };

  const closeWhatsappModal = () => {
    setWhatsappModalOpen(false);
  };
  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const openBookingModal = () => {
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  const openAboutModal = () => {
    setIAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setIAboutModalOpen(false);
  };

  return (
    <div className='header'>
      <div className='social-link'>
        <span onClick={openFacebookModal} ><FacebookIcon/></span>
        <span onClick={openWhatsappModal} ><WhatsAppIcon/></span>
        <span><EmailIcon/></span>
      </div>
      <CustomModal isOpen={isFacebookModalOpen} onClose={closeFacebookModal}>
     <div className='items_items align-p'>
 <img className='picc-face'src='\images\aaaaa.jpg' width={500} height={400} alt=''/>
 <div className='items_items'>
    
    <span style={{marginTop:'200px'}}>Lets Connect</span>
    <span style={{marginTop:'200px'}} ><a href=" https://www.facebook.com/djayultimate?sfnsn=scwspwa&mibextid=RUbZ1f" target='blank' ><FacebookIcon  style={{color:"red",fontSize:'60'}}/></a></span>


 </div>



     </div>
    
      </CustomModal>
      <CustomModal isOpen={isWhatsappModalOpen} onClose={closeWhatsappModal}>
     <div className='items_items'>
    
        <span style={{marginTop:'200px'}}>Lets Chat</span>
        <span style={{marginTop:'200px'}} ><a href=" https://www.whatsapp.com/catalog/27714444370/?app_absent=0" target='blank' ><WhatsAppIcon style={{color:"red",fontSize:'60'}}/></a>
        
</span>

     </div>
    
      </CustomModal>
      {/* Modals */}
      <CustomModal isOpen={isContactModalOpen} onClose={closeContactModal}>
     <div className='items_items contat-item'>
   
        <img className='image_image' src='\images\logo.jpg' width={400} height={200} alt='x' />
        <span><LocalPhoneIcon style={{color:"red"}}/> 0714444370/0645073613

</span>
<span> <MailIcon style={{color:"red"}}/> Balepholding@gmail.com/Djayultimate@gmail.com
</span>
     </div>
    
      </CustomModal>

      <CustomModal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
      <br/><br/><br/><br/><br/>
       <Booking  />
      </CustomModal>

      <CustomModal isOpen={isAboutModalOpen} onClose={closeAboutModal} >
        <div className='info_business'>
        <span><img className='image_image prt-imag' src='\images\dd.jpg' width={400} height={200} alt='x' /></span>
<div className='intro p-intro'>

<h4>BHE sound system(BHE) Balep Holding Entertainment</h4>
<h5>Best sound. best service</h5>
<span >

Welcome to Balep Holding Entertainment (BHE), your premier destination for top-notch sound systems that elevate your events to unparalleled heights. At BHE, we pride ourselves on being the go-to source for cutting-edge audio solutions in Thohoyandou and beyond. Whether you're hosting a corporate gathering, a wedding, a concert, or any other event that demands exceptional sound quality, BHE has you covered.

Our commitment to excellence is reflected in the quality of our sound systems, meticulously designed to deliver crystal-clear audio and immersive experiences. With a passion for creating memorable moments, we understand the significance of pristine sound in enhancing the overall ambiance of any occasion.

Located in Thohoyandou, BHE is not just a sound system provider; we are your partners in ensuring that your event is remembered for its impeccable audio delivery. Our dedicated team of professionals is committed to working closely with you, tailoring our services to meet your specific needs and preferences.

Choose BHE for your sound system needs, and let us transform your event into a sonic masterpiece. Elevate your gatherings with the best in the business – Balep Holding Entertainment, where excellence meets entertainment.
</span>
</div>
        </div>
     
      
     
  
      </CustomModal>

      {/* Rest of the header */}
     
        <img className='c' src='\images\logo.jpg' width={120} height={80} alt='x' />
    
      <div className='nav'>
        <span onClick={openContactModal}>Contact</span>
        <span onClick={openBookingModal}>Bookings</span>
        <span  onClick={openAboutModal}>About Us</span>
      </div>
    </div>
  );
};
