import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Header } from './Header';


const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  
  height: '780px'
}
const slideImages = [
  {
    original: process.env.PUBLIC_URL + "./images/xxxxxxxxx.jpg",
    caption: 'Bhe sound system(BHE) Balep Holding Entertainment'
  },
  {
    original: process.env.PUBLIC_URL + "./images/xx.jpg",
   
  },
  {
    original: process.env.PUBLIC_URL + "./images/aaa.jpg",
   
  },
  {
    original: process.env.PUBLIC_URL + "./images/xxx.jpg",
   
  },
  {
    original: process.env.PUBLIC_URL + "./images/xxxxxxxx.jpg",
 
  },
  {
    original: process.env.PUBLIC_URL + "./images/nnnnnn.jpg",
 
  },
  {
    original: process.env.PUBLIC_URL + "./images/nnnnnnnn.jpg",
 
  },
];
export const Banner = () => {

    return (
      <div className="slide-container" >
      <Header/>
        <Slide style={{}}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.original})`,maxWidth:'100%' }}>
                <span style={{spanStyle,fontSize:'80px',color:'red'}}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
  
}
