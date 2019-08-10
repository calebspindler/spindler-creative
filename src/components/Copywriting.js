import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Contact Component with a clickable email address.
const Copywriting = () => (

  <div className="fadeIn" id="work">
  <div className="workBackground"></div>
    <div className="main-content">
      <div id="workCopy">
        <h1>Copywriting</h1>
        <p>As a content creator, my primary goal is to create and write copy for blogs, websites, and email promotions. On top of this, I have experience starring in product videos, shooting photos and videos, and managing social media accounts.</p>
      </div>
      <CloudinaryContext cloudName="spindler-creative" id="workGallery">
        <a href="https://prima-coffee.com/learn/article/roasting-guides/learning-how-to-roast-coffee-at-home-with-a-hottop/learn-roast-hottop">
          <Image publicId="prima-coffee-roasting-blog.jpg" alt="Screenshot of the Learning How to Roast on a Hottop blog at Prima Coffee.">
            <Transformation width="800" crop="scale" />
          </Image>
        </a>
        <a href="https://prima-coffee.com/learn/article/brewing-guides/comparing-chemex-recipes/33027">
          <Image publicId="prima-coffee-chemex-blog.jpg" alt="Screenshot of the Comparing Chemex Recipes at Prima Coffee.">
            <Transformation width="800" crop="scale" />
          </Image>
        </a>
      </CloudinaryContext>
    </div>
    <div id="backButton" type="button"><NavLink to="/work">Back</NavLink></div>
  </div>
);

export default Copywriting;