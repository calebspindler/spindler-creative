import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const TheResolvedCollective = () => (
  <div className="fadeIn" id="trc-project">
    <div className="workBackground"></div>
    <div className="main-content">
      <div class="projectCopy">
        <h1>Project: The Resolved Collective</h1>
        <p>For this project, utlizing an Underscores starter theme, I designed and developed a responsive WordPress Theme uniquely for The Resolved Collective, a community of like-minded individuals who are focused on wellness through nutrition, exercise, and essential oils. I used HTML, CSS, PHP, and some popular WordPress plugins to create the following pages: home, about, join, events, blog, members-only, and contact.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="trc-project-images">
          <Image publicId="trc-home-main.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-home-about.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-home-blogs.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-home-contact.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-about-1.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-join-option1.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-events-upcoming.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
          <Image publicId="trc-members-unlocked.jpg" >
            <Transformation width="800" crop="scale" />
          </Image>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/work">Back</NavLink></div>
  </div>
);

export default TheResolvedCollective;