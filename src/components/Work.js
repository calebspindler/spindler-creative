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
        <p>When it comes to web design and development, my specialty is producing ReactJS web apps that are responsive, interactive, and aesthetically pleasing. I begin by designing projects in Figma, and then I develop them by taking a mobile-first approach, ensuring that they look great on all devices.</p>
        <p>My current focus is on crafting unique websites for personal portfolios and small businesses.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="workGallery">
        <NavLink to="/kha-do-photo">
          <Image publicId="kha-do-photo-homepage.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
        <NavLink to="/the-resolved-collective">
          <Image publicId="trc-home-main.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/">Back</NavLink></div>
  </div>
);

export default Work;