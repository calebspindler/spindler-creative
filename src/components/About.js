import React from 'react';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const About = () => (
  <div className="main-content fadeIn">
    <div id="contact">
      <CloudinaryContext cloudName="spindler-creative">
        <Image id="aboutImage" publicId="about-image.jpg" />
      </CloudinaryContext>
      <h2>About</h2>
        <p>Hi, I'm Caleb Spindler! I am a web designer, developer, and content creator currently living in Louisville, KY. After completing two degrees in theology, I came across a long lost passion of mine for mixing creativity with technology.</p>
        <p>Since then, I have completed the Front-End Web Development track and the Full-Stack JavaScript track at <a class="copy-link" href="https://codelouisville.org/">Code Louisville</a>, which have prepared me to code websites using HTML, CSS, and JavaScript (React). I am also enrolled in the Ruby on Rails track starting in January 2019.</p>
    </div>
  </div>
);

export default About;
