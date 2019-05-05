import React from 'react';
import { NavLink } from 'react-router-dom';


// Contact Component with a clickable email address.
const Contact = () => (
  <div className="fadeIn" id="contact">
    <div id="contactBackground"></div>
    <div className="main-content">
      <div id="contactCopy">
        <h1>Contact</h1>
        <p>If you are interested in working with me, or have any questions, leave me a message, and I'll get back to you as soon as possible.</p>
      </div>
      <form name="contact" method="POST" data-netlify="true" id="contactForm">
        <p>
          <label>Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit" id="contactSend">Send</button>
        </p>
      </form>
    </div>
    <div id="contactButton" type="button"><NavLink to="/" class="button">Back</NavLink></div>
  </div>
);

export default Contact;
