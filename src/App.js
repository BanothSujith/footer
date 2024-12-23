import React from 'react';
import QuickLinks from './components/QuickLinks';
import './App.css';
import Links from './links';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { useJaipurWeather } from "./wheatheAPI";


function App() {
  const { temperature, humidity, windSpeed } = useJaipurWeather();
  return (
    <footer className='footer'>
      <div className="footer-header"> 
      <h2> Stay in Touch </h2>
      <p>Subscribe to our Newsletter to receive best deals and offers</p>
      <form className="footer-form">
        <input type="email" placeholder="Enter your email..." />
        <button type="submit">Subscribe</button>
        </form>
        </div>
      <div className="footer-container">
      <section className="footer-ourstory">
        <h2>Our Story</h2>
        <p>
          The underlying theme and vision for all the ventures pursued by
          Mahindra Hotel & Residences India Limited.
        </p>
      </section>

      <section className="footer-locateus">
        <h2>Locate Us</h2>
        <address>
          1234 Mahindra Towers, Mumbai, Maharashtra, India
        </address>
        <p>Landline:+917988483737</p>
        <p>Email: Example.com</p> 
      </section>

      <section className="footer-quick">
        <h2>Quick Links</h2>
        {Links.map((link, index) => (
          <QuickLinks key={index} links={link} />
        ))}
      </section>

      <section className="footer-imp">
        <h2>Important Links</h2>
        {Links.map((link, index) => (
          <QuickLinks key={index} links={link} />
        ))}
        <br/>
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
