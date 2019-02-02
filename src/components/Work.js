import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const Work = () => (
  <div className="main-content fadeIn">
    <div id="contact">
        <p>When it comes to Front-End Development, my specialty is producing ReactJS apps that are responsive, interactive, and aesthetically pleasing. I begin by designing projects in Figma, and then I develop them by taking a mobile-first approach, ensuring that they look great on all devices.</p>
        <p>My current focus is on crafting websites for small businesses and personal portfolios.</p>
    </div>
    <h2>Recent Work</h2>
    <CloudinaryContext cloudName="spindler-creative">
      <NavLink to="/kha-do-photo">
        <Image publicId="kha-do-photo-homepage.png" >
          <Transformation width="500" crop="scale" />
        </Image>
      </NavLink>
    </CloudinaryContext>

  </div>
);

export default Work;