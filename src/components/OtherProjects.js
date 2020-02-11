import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const OtherProjects = () => (

  <div className="fadeIn" id="work">
  <div className="workBackground"></div>
    <div className="main-content">
      <div id="workCopy">
        <h1>Other Projects</h1>
        <p>When I'm trying to learn new things or keep up my skills, I'll often take on personal development projects, and this is where I'll be keeping those sorts of things.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="workGallery">
        <a href="/vanilla-js/tip-calculator.html">
          <Image publicId="javascript-tip-split-calculator.jpg" alt="Screenshot of the Learning How to Roast on a Hottop blog at Prima Coffee.">
            <Transformation width="800" crop="scale" />
          </Image>
        </a>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/work">Back</NavLink></div>
  </div>
);

export default OtherProjects;