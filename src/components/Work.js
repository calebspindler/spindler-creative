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
  <div id="workBackground"></div>
    <div className="main-content">
      <div id="recentWork">
        <h1>Recent Work</h1>
        <p>When it comes to Front-End Development, my specialty is producing ReactJS apps that are responsive, interactive, and aesthetically pleasing. I begin by designing projects in Figma, and then I develop them by taking a mobile-first approach, ensuring that they look great on all devices.</p>
        <p>My current focus is on crafting websites for small businesses and personal portfolios.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative">
        <NavLink to="/kha-do-photo">
          <Image publicId="kha-do-photo-homepage.png" >
            <Transformation width="500" crop="scale" />
          </Image>
        </NavLink>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/">Back</NavLink></div>
  </div>
);

export default Work;