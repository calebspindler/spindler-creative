import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const KhaDoPhoto = () => (
  <div className="fadeIn" id="kha-do-project">
    <div className="workBackground"></div>
    <div className="main-content">
      <div class="projectCopy">
        <h1>Project: Kha Do Photo</h1>
        <p>For this project, I designed and developed a responsive portfolio for Kha Do, a freelance photographer in Louisville, KY. Kha wanted a clean, modern, minimalist aesthetic that would not distract visitors from viewing some of his best work. I used HTML, CSS, and JavaScript to create a photo gallery with a popup modal and a contact form using Netlify's backend.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="kha-do-project-images">
          <Image publicId="kha-do-photo-homepage.png" alt="Screenshot of Kha Do's photography portfolio website, showing the logo, menu, and gallery.">
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="kha-do-photo-modal.png" alt="Screenshot of the image modal on Kha Do's photography portfolio website.">
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="kha-do-photo-about.png" alt="Screenshot of the about page on Kha Do's photography portfolio website.">
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="kha-do-photo-contact.png" alt="Screenshot of the contact page on Kha Do's photography portfolio website.">
            <Transformation width="800" crop="scale" />
          </Image>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/web-design">Back</NavLink></div>
  </div>
);

export default KhaDoPhoto;