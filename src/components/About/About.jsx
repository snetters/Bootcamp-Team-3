import React from 'react';

import './About.css';

function About() {
  return (
    <div className="About">
      <title> About </title>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="Home.css" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
      />
      {/*
      
      */}
      <p>About Us</p>
      <br />
      <p>
        This donation tracking website was made by Team Three (members of IBMs
        Bootcamp) in lieu of misappropriated funds during the 2020 presidential
        campaign cycle.
      </p>
      {/* 
      
      */}
      <div class="w3-container w3-padding-32" id="contact">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
          Contact
        </h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank">
          <input
            class="w3-input w3-border"
            type="text"
            placeholder="Name"
            required
            name="Name"
          />
          <input
            class="w3-input w3-section w3-border"
            type="text"
            placeholder="Email"
            required
            name="Email"
          />
          <input
            class="w3-input w3-section w3-border"
            type="text"
            placeholder="Subject"
            required
            name="Subject"
          />
          <input
            class="w3-input w3-section w3-border"
            type="text"
            placeholder="Comment"
            required
            name="Comment"
          />
          <button class="w3-button w3-black w3-section" type="submit">
            <i class="fa fa-paper-plane" /> SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
