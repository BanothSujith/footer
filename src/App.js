import React  from 'react';
import QuickLinks from './components/QuickLinks';
import './App.css';
import Links from './links';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { useJaipurWeather } from "./wheatheAPI";
import { useState, useEffect} from "react";
import Form from './components/Form';


function App() {
  const { temperature, humidity, windSpeed } = useJaipurWeather();
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (sectionName) => {
    setActiveSection((prevSection) => (prevSection === sectionName ? null : sectionName));
  };

  return (
    <footer className='footer'>
      <Form/>
      
      <div className="footer-container">
      <section className={`footer-ourstory ${activeSection === 'ourStory' ? 'active' : ''}`}>
      <h2  className="fheading" onClick={isMobile ? () => toggleSection('ourStory') : null}>
  <span>Our Story </span><span className='sign'>{isMobile && (activeSection === 'ourStory' ? ' -' : ' +')}</span>
</h2>
      {(activeSection === 'ourStory'  || !isMobile) && (
            <p>
              The underlying theme and vision for all the ventures pursued by
              Mahindra Hotel & Residences India Limited.
            </p>
          )}
      </section>

      <section className={`footer-locateus ${activeSection === 'locateUs' ? 'active' : ''}`}>
      <h2 className='fheading' onClick={isMobile ?() => toggleSection('locateUs') : null}><span>Locate Us </span><span className='sign'>{isMobile && (activeSection === 'locateUs' ? ' -' : ' +')}</span></h2>
      {(activeSection === 'locateUs' || !isMobile) && (
            <>
              <address>1234 Mahindra Towers, Mumbai, Maharashtra, India</address>
              <p>Landline: +917988483737</p>
              <p>Email: Example.com</p>
            </>
          )}
      </section>

      <section className={`footer-quick ${activeSection === 'quickLinks' ? 'active' : ''}`}>
      <h2 className='fheading' onClick={isMobile? () => toggleSection('quickLinks') : null}><span >Quick Links</span> <span className='sign'>{isMobile && (activeSection === 'quickLinks' ? ' -' : ' +')}</span></h2>
      {(activeSection === 'quickLinks' || !isMobile) &&
            Links.map((link, index) => <QuickLinks key={index} links={link} />)}
      </section>

      <section className={`footer-imp ${activeSection === 'importantLinks' ? 'active' : ''}`}>
      <h2 className='fheading' onClick={() => toggleSection('importantLinks')}><span>Important Links</span> <span className='sign'>{isMobile && (activeSection === 'importantLinks' ? ' -' : ' +')}</span></h2>
      {activeSection === 'importantLinks' &&
            Links.map((link, index) => <QuickLinks key={index} links={link} />)}
        
         <div className='followUs' >
        <h2>Follow Us</h2>
        <a href="https://www.facebook.com/">
          <FaFacebookSquare size="1em" /></a>
        <a href="https://www.instagram.com/">
          <FaInstagram size="1em" /></a>

          <a href="https://www.twitter.com/">
          <FaTwitter size="1em" /></a>

          <a href="https://www.youtube.com/">
          <FaYoutube size="1em" /></a>
          </div>

          <div className='wheather'>
            <div>
              <p>Jaipur<br/>
              {new Date().toLocaleTimeString()}
              </p>
            </div>
            <div><FaCloudSun/> {temperature !== null ? (
        `${temperature}°C`
      ) : (
        `Loading temperature...`
      )}</div>
       <div><p>Wind Speed: {temperature !== null ? (
        `${windSpeed}°C`
      ) : (
        `Loading WindSpeed...`
      )} </p> </div>

       <div>Humidity: {temperature !== null ? (
        `${humidity}°C`
      ) : (
        `Loading humidity...`
      )}
      </div>
      
          </div>

      </section>
      </div>

      <footer className="footer-bottom">
        <p>&copy; 2024 
          <br/>Mahindra Hotel & Residences.<br/>
           All rights reserved.
           <br/>
           <a href="/terms">Terms of Service</a>
           </p>
         
      </footer>
    </footer>
  );
}

export default App;
