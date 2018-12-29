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
      <CloudinaryContext cloudName="spindler-creative">
        <Image id="logo" publicId="logo.png" >
          <Transformation height="450" crop="scale" />
        </Image>
      </CloudinaryContext>
    </div>
  </div>
);

export default Home;
