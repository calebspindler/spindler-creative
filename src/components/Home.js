import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

import Header from './Header';

// Contact Component with a clickable email address.
const Home = () => (
  <div className="fadeIn" id="home">
    <div id="homeBackground"></div>
    <Header />
    <div id="homeContent">
      <div id="about" className="swing">
        <div id="rectangle"></div>
        <CloudinaryContext cloudName="spindler-creative">
          <Image id="aboutImage" publicId="about-image.jpg">
            <Transformation width="800" crop="scale" />
          </Image>
        </CloudinaryContext>
      </div>
      <div id="aboutCopy">
        <p>Hi, I'm Caleb Spindler! I am a web designer, developer, and content creator currently living in San Diego, California.</p>
        <p>When I’m not designing or developing websites, you’ll probably find me hanging with my fam, and we’ll likely be drinking coffee, hiking, or eating tacos. Check out my portfolio, and hit me up if you'd like to work together!</p>
      </div>
    </div>
    <nav id="mainNav">
      <li type="button"><NavLink to="/work" className="button">Recent Work</NavLink></li>
      <li type="button" id="homeContactBtn"><NavLink to="/contact" className="button">Contact</NavLink></li>
    </nav>
  </div>
);

export default Home;
