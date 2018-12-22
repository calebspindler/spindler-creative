import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudinaryContext,
  Image,
  Transformation
} from 'cloudinary-react';

// Header Component with blog name, slogan, and nav
const Header = props =>
  <header>
    <div>
      <CloudinaryContext cloudName="spindler-creative">
        <Image publicId="logo.png" >
          <Transformation height="50" crop="scale" />
        </Image>
      </CloudinaryContext>
      <h1>branding</h1>
    </div>
    <div>
      <ul className="main-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/about">About</NavLink></li>
        <li><NavLink exact to="/work">Work</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </header>

  export default Header;
