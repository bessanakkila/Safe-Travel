
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbarhead from './Components/Navbarhead/Navbarhead';
import Home from './Components/Home/Home';
import WhyUs from './Components/WhyUs/WhyUs';
import AboutUs from './Components/AboutUs/AboutUs';
import JoinUs from './Components/JoinUs/JoinUs';
import Registration from './Components/Registration/Registration';
import FeaturesSection from './Components/Features/Features';
import Payment from './Components/Payment/Payment';
import Footer from './Components/Footer/Footer';
import Faqs from './Components/Faqs/Faqs';
import Contact from './Components/Contact/Contact';



const Big =()=>{
  return(
    <>
     <Home/>
     <WhyUs/>
     <AboutUs/>
     <JoinUs/>
     
  
     <FeaturesSection/>
  
   
    

    
   
    
 
    </>
  ) 
}



function App() {


  return (
    <>
    <Router>
       <Navbarhead/>
        <Routes>
      <Route path="/" element={< Big />} />
      <Route path="/Survey" element={<Registration/>} />
       <Route path="/Payment" element={<Payment/>} />
       <Route path="/Faqs" element={<Faqs/>} />
       <Route path="/Contact" element={<Contact/>} />
            
     

      </Routes>
        <Footer/>

    </Router>
    
 
    
    
    
     
   
     
     
    </>
  )
}

export default App
