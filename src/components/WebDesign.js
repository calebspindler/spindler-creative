import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const WebDesign = () => (

  <div className="fadeIn" id="work">
  <div className="workBackground"></div>
    <div className="main-content">
      <div id="workCopy">
        <h1>Web Design</h1>
        <p>When it comes to web design and development, my specialty is producing websites that are responsive, interactive, and aesthetically pleasing. I begin by designing projects in Figma, and then I develop them, using JavaScript (React) or WordPress, by taking a mobile-first approach, ensuring that they look great on all devices.</p>
        <p>My current focus is on crafting unique websites for personal portfolios and small businesses.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="workGallery">
        <NavLink to="/kha-do-photo">
          <Image publicId="kha-do-photo-homepage.jpg" alt="Screenshot of Kha Do's photography portfolio website, showing the logo, menu, and gallery.">
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
        <NavLink to="/the-resolved-collective">
          <Image publicId="trc-home-main.jpg" alt="Screenshot of The Resolved Collective home page, showing the menu, title, slogan, join link, and image slider.">
            <Transformation width="800" crop="scale" />
          </Image>
        </NavLink>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/work">Back</NavLink></div>
  </div>
);

export default WebDesign;