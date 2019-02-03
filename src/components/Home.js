import React from 'react';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const Home = () => (
  <div className="main-content fadeIn">
    <div id="home">
      <div id="rectangle"></div>
      <CloudinaryContext cloudName="spindler-creative">
        <Image id="aboutImage" publicId="about-image.jpg" />
      </CloudinaryContext>
    </div>
  </div>
);

export default Home;
