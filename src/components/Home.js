import React from 'react';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const Home = () => (
  <div className="main-content fadeIn" id="home">
    <div id="about">
      <div id="rectangle"></div>
      <CloudinaryContext cloudName="spindler-creative">
        <Image id="aboutImage" publicId="about-image.jpg">
          <Transformation width="800" crop="scale" />
        </Image>
      </CloudinaryContext>
    </div>
    <div id="aboutCopy">
      <p>Hi, I'm Caleb Spindler! I am a web designer, developer, and content creator currently living in Louisville, KY.</p>
      <p>When I’m not designing or developing websites, you’ll probably find me hanging with my fam, and we’ll likely be drinking coffee, hiking, or eating tacos.</p>
    </div>
    <div id="mobileNav">
      <button>Recent Work</button>
      <button>Contact</button>
    </div>
  </div>
);

export default Home;
