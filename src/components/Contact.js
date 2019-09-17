import React from 'react';
import { NavLink } from 'react-router-dom';


// Contact Component with a clickable email address.
const Contact = () => (
  <div className="fadeIn" id="contact">
    <div id="contactBackground"></div>
    <div className="main-content">
      <div id="contactCopy">
        <h1>Contact</h1>
        <p>Whether you need help with web design or copywriting, shoot me an <a id="contactEmail" href="mailto:caleb.spindler@gmail.com">e-mail</a>, and I'll get back to you shortly! I look forward to hearing from you!</p>
      </div>

      {/* <form name="contact" method="POST" id="contactForm">
        <input type="hidden" name="form-name" value="contact" />
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
      </form> */}
    </div>
    <div id="backButton" type="button"><NavLink to="/">Back</NavLink></div>
  </div>
);

export default Contact;
