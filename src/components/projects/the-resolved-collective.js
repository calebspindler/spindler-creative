import React from 'react';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const TheResolvedCollective = () => (
  <div className="fadeIn" id="kha-do-project">
    <div id="khaBackground"></div>
    <div className="main-content">
    <div id="">
      <p>For this project, I designed and developed a responsive portfolio for Kha Do, a freelance photographer in Louisville, KY. Kha wanted a clean, modern, minimalist aesthetic that would not distract visitors from viewing some of his best work. For this project, I used HTML, CSS, and JavaScript to create a photo gallery with a popup modal and a contact form using Netlify's backend.</p>
    </div>
      <CloudinaryContext cloudName="spindler-creative" id="kha-do-project-images">
          <Image publicId="kha-do-photo-homepage.png" >
            <Transformation width="500" crop="scale" />
          </Image>
          <Image publicId="kha-do-photo-modal.png" >
            <Transformation width="500" crop="scale" />
          </Image>
          <Image publicId="kha-do-photo-about.png" >
            <Transformation width="500" crop="scale" />
          </Image>
          <Image publicId="kha-do-photo-contact.png" >
            <Transformation width="500" crop="scale" />
          </Image>
      </CloudinaryContext>
    </div>
  </div>
);

export default TheResolvedCollective;