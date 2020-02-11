import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const Work = () => (

  <div className="fadeIn" id="work">
  <div className="workBackground"></div>
    <div className="main-content">
      <div id="workCopy">
        <h1>Recent Work</h1>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="workGallery">
        <NavLink to="/web-development">
          <h1>Development</h1>
          <Image publicId="kha-do-photo-homepage.jpg" alt="Screenshot of Kha Do's photography portfolio website, showing the logo, menu, and gallery.">
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
        <NavLink to="/copywriting">
          <h1>Copywriting</h1>
          <Image publicId="prima-coffee-roasting-blog.jpg" alt="Screenshot of the Learning How to Roast on a Hottop blog at Prima Coffee.">
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
        <NavLink to="/other-projects">
          <h1>Projects</h1>
          <Image publicId="javascript-tip-split-calculator.jpg" alt="Screenshot of the Learning How to Roast on a Hottop blog at Prima Coffee.">
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/">Back</NavLink></div>
  </div>
);

export default Work;