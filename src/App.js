/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { Banner } from './component/Banner';

import { BookingForm } from './component/BookingForm';
import { Footer } from './component/Footer';
import { Map } from './component/Map';
import { Section_info } from './component/Section_info';



function App() {
  
  return (
    <div className="App ">

    <Banner/>
    <Section_info/>
  <BookingForm/>
   <Map/>
    <Footer/>
    
     
    </div>
  );
}

export default App;
