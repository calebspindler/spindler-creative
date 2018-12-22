import React from 'react';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const Home = () => (
  <div className="main-content">
    <div id="home">
      <CloudinaryContext cloudName="spindler-creative">
        <Image publicId="logo.png" >
          <Transformation height="800" crop="scale" />
        </Image>
      </CloudinaryContext>
    </div>
  </div>
);

export default Home;
