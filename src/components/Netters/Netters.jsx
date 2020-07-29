import React from 'react'

import './Netters.css'

import Nav from './Nav/Nav'

class Netters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Netters">
        {/* Nav */}
        <Nav />
        {/*  */}
        <header className="w3-container w3-theme w3-padding" id="myHeader">
          {/* This code was getting int he way of the nav button */}
          {/* <input
            type="button"
            className="fa fa-bars w3-xlarge w3-button w3-theme"
          /> */}
          <div className="w3-center w3-text-white">
            <h4>Donations without the frustrations</h4>
            <h1 className="w3-xxxlarge w3-animate-bottom">FundFlow</h1>
            <div className="w3-padding-32">
              <p>Button</p>
              <input
                type="button"
                name="learnMoreButton"
                className="w3-btn w3-large w3-light-green w3-hover-light-grey w3-text-white"
              />
            </div>
          </div>
        </header>
        {/*  */}
        <div id="id01" className="w3-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-top">
            <header className="w3-container w3-theme-l1">
              <span
                // onclick="document.getElementById('id01').style.display='none'"
                className="w3-button w3-display-topright"
              >
                ×
              </span>
              <h4>Want to know more about FundFlow?</h4>
              <h5>You are in luck!</h5>
            </header>
            {/*  */}
            <div className="w3-padding">
              <p>For any questions or genuine curiosity...</p>
              <p>Check out our to learn more!</p>
            </div>
            <footer className="w3-container w3-theme-l1">
              <p>
                {' '}
                <input type="button" className="fa fa-smile-o" />
              </p>
            </footer>
          </div>
        </div>
        {/*  */}
        <header className="w3-container w3-theme w3-padding" id="myHeader">
          <input
            type="button"
            className="fa fa-bars w3-xlarge w3-button w3-theme"
          />
          <div className="w3-center w3-text-white">
            <h4>Donations without the frustrations</h4>
            <h1 className="w3-xxxlarge w3-animate-bottom">FundFlow</h1>
            <div className="w3-padding-32">
              <input
                type="button"
                className="w3-btn w3-large w3-light-green w3-hover-light-grey w3-text-white"
                // onclick="document.getElementById('id01').style.display='block'"
                // style="font-weight:900;"
              />
            </div>
          </div>
        </header>
        {/*  */}
        <div id="id01" className="w3-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-top">
            <header className="w3-container w3-theme-l1">
              <span
                // onclick="document.getElementById('id01').style.display='none'"
                className="w3-button w3-display-topright"
              >
                ×
              </span>
              <h4>Want to know more about FundFlow?</h4>
              <h5>You are in luck!</h5>
            </header>
            <div className="w3-padding">
              <p>For any questions or genuine curiosity...</p>
              <p>Check out our to learn more!</p>
            </div>
            <footer className="w3-container w3-theme-l1">
              <p>
                {' '}
                <input type="button" className="fa fa-smile-o" />
              </p>
            </footer>
          </div>
        </div>
        {/*  */}
        <div className="w3-row-padding w3-center w3-margin-top">
          <div className="w3-third">
            <div className="w3-card w3-container">
              <h3>Tracking</h3>
              <br />
              <i
                className="fa fa-arrows w3-margin-bottom w3-text-theme"
                // style="font-size:120px"
              />
              <p>Real-time tracking of organizations</p>
              <p>Maintain donations with our system</p>
              <p>Find out what organizations are doing with your money</p>
            </div>
          </div>

          <div className="w3-third">
            <div
              className="w3-card w3-container"
              // style="min-height:460px"
            >
              <h3>Organizations</h3>
              <br />
              <i
                className="fa fa-css3 w3-margin-bottom w3-text-theme"
                // style="font-size:120px"
              />
              <p>Trusted organizations with a great purpose</p>
              <p>Search for any non-profit here in the US</p>
              <p>Access to IRS Form 990</p>
            </div>
          </div>

          <div className="w3-third">
            <div
              className="w3-card w3-container"
              // style="min-height:460px"
            >
              <h3>Secure</h3>
              <br />
              <i
                className="fa fa-diamond w3-margin-bottom w3-text-theme"
                // style="font-size:120px"
              />
              <p>Reliable donation payment</p>
              <p>Secure technology to protect sensitive information</p>
              <p>Remain anonymous when donating</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w3-center">
          <h2>What we do</h2>
          <p className="w3-large">Check out how FundFlow works</p>
        </div>
        <br />
        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-blue w3-border">
            <h5>
              <b>Non-profit Database</b>
            </h5>
            <p>Gain access to hundreds of non-profits right here in the US.</p>
            <p>
              Search for a non-profit by looking for the region, state, category
              of non-profit, and even type of non-profit.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>*Insert Image*</h5>
          </div>
        </div>
        <br />
        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-light-blue w3-border">
            <h5>
              <b>IRS Form 990</b>
            </h5>
            <p>Non-profits are required to complete an IRS Form 990</p>
            <p>
              Form 990 is used to gather information about the non-profit,
              promote compliance, and shares information with the public about a
              program.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>*Insert Image*</h5>
          </div>
        </div>
        <br />
        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-light-green w3-border">
            <h5>
              <b>Donation Payment</b>
            </h5>
            <p>Donate to your favorite non-profit using our website!</p>
            <p>
              Backed by Paypal, all donations are safe and secure. Our users
              also have the neat option of having a donation remain anonymous.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>*Insert Image*</h5>
          </div>
        </div>
        <br />
        <br />
        <div className="w3-center">
          <h2>Our Mission</h2>
          <p>
            FundFlow is misson is simple: making sure no good deed is undone
          </p>
        </div>
        <header className="w3-container w3-blue">
          <h2>Our mission</h2>
        </header>
        <div className="w3-padding w3-white w3-display-container">
          <span
            // onclick="this.parentElement.style.display='none'"
            className="w3-button w3-display-topright"
          />
          <h2>FundFlow is Mission</h2>
          <p>
            With recent events, the world is beginning to turn around. We have
            witnessed the countless injustices done to people. From Breonna
            Taylor to Ahmaud Aubrey to George Floyd, and sadly, many more.
          </p>
          <p>
            As such, people are now tired of the mistreatment and are standing
            up to these unspeakable acts. We are now fighting against these
            injustices. Many fight through protests, others through petitions
            and donations.
          </p>
          <p>
            FundFlow is here to help those of us who are fighting through
            donations. Many organizations and movements are asking for
            donations, but we must remain vigilante and make sure these
            organizations are legitimate and are using your money for a greater
            purpose. We want to make sure your donation is purposefully used and
            help ease any worries you may have.
          </p>
        </div>
        <footer className="w3-container w3-blue">
          <h5>
            <input type="button" className="fa fa-smile-o" />
          </h5>
        </footer>
        <hr />
        <div className="w3-container w3-center">
          <h3>Our Reach</h3>
          <p>Read how FundFlow has helped these fighters!</p>
        </div>
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-card-4 w3-hover-dark-grey">
              <img
                src="/w3images/avatar.jpg"
                alt="man1"
                // style="width:100%"
              />
              <div className="w3-container">
                <p>John Doe - volunteer at ____</p>
              </div>
            </div>
          </div>

          <div className="w3-third">
            <div className="w3-card-4 w3-hover-dark-grey">
              <img
                src="/w3images/man_bench.jpg"
                alt="man2"
                // style="width:100%"
              />
              <div className="w3-container">
                <p>John Smith - founder of ____</p>
              </div>
            </div>
          </div>

          <div className="w3-third">
            <div className="w3-card-4 w3-hover-dark-grey">
              <img
                src="/w3images/girl_hat.jpg"
                alt="lady1"
                // style="width:100%"
              />
              <div className="w3-container">
                <p>Mary Sue - donated to ____</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="w3-center">Forms and Lists</h2>
        <div className="w3-row-padding">
          <div className="w3-center">
            <form className="w3-container w3-card-4">
              <h2>
                Sign up to receive emails and newsletters with updates and
                notifications
              </h2>
              {/*  */}
              <div className="w3-section">
                <p>Name</p>
                <input name="w3" className="w3-input" type="text" required />
              </div>
              {/*  */}
              <div className="w3-section">
                <p>Email</p>
                <input className="w3-input" type="text" required />
              </div>
              {/*  */}
              <div className="w3-section">
                <p>Address</p>
                <input className="w3-input" type="text" required />
              </div>
              <div className="w3-row">
                <div className="w3-half">
                  <input
                    id="emails"
                    className="w3-check"
                    type="checkbox"
                    checked="checked"
                    readOnly
                  />
                  <p>Receive emails</p>
                  <br />
                  <input
                    id="newsletters"
                    className="w3-check"
                    type="checkbox"
                  />
                  <p>Receive newsletters</p>
                  <br />
                </div>

                <div className="w3-half">
                  <p>
                    <i>Would you like to receive a newsletter every week?</i>
                  </p>
                  <input
                    id="weekly"
                    className="w3-radio"
                    type="radio"
                    name="gender"
                    value="weekly"
                    checked
                    readOnly
                  />
                  <p>Yes, I would like a weekly newsletter</p>
                  <br />
                  <input
                    id="monthly"
                    className="w3-radio"
                    type="radio"
                    name="gender"
                    value="monthly"
                  />
                  <p>No, I would prefer a monthly newsletter</p>
                  <br />
                  <input
                    id="none"
                    className="w3-radio"
                    type="radio"
                    name="gender"
                    value="none"
                  />
                  <p>No, I do not want any newsletter</p>
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
        <h2 className="w3-center">Goal of the Week</h2>
        <p>
          {' '}
          FundFlow has chosen the donation goal of the organization to showcase
          on the homepage!
        </p>
        <p>
          {' '}
          Below is a progress bar to show how close they are donation goal!
        </p>
        <div className="w3-container">
          <div className="w3-light-gray">
            <div
              id="myBar"
              className="w3-center w3-padding w3-theme"
              // style="width:15%"
            >
              15%
            </div>
          </div>
          <br />
        </div>
        <h2 className="w3-center">Organizations of the week</h2>
        <p>
          {' '}
          Below is a slideshow of FundFlows chosen organizations of the week!
          Scroll through and click on an organization that speaks to you!
        </p>
        <div
          className="w3-content"
          // style="max-width:800px;position:relative"
        >
          <img
            alt="snow pic not available"
            className="mySlides w3-animate-opacity"
            src="/w3images/snow.jpg"
            // style="width:100%"
          />
          <img
            alt="lights pic not available"
            className="mySlides w3-animate-opacity"
            src="/w3images/lights.jpg"
            // style="width:100%"
          />
          <img
            alt="mountains pic not available"
            className="mySlides w3-animate-opacity"
            src="/w3images/mountains.jpg"
            // style="width:100%"
          />
          <img
            alt="forest pic not available"
            className="mySlides w3-animate-opacity"
            src="/w3images/forest.jpg"
            // style="width:100%"
          />
        </div>
        <h2 className="w3-center">More Info</h2>
        <p>The Power Of Donation!</p>
        <input
          type="button"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        />
        <div id="Demo1" className="w3-hide">
          <div className="w3-container">
            <p>
              Donations are a powerful way to help non-profits that are fighting
              for a good cause. Donations are the best way to show support, next
              to volunteering!
            </p>
          </div>
        </div>
        <p>Links to our articles of the week</p>
        <input
          type="button"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        />

        <p>Video</p>
        <div id="Demo2" className="w3-hide">
          <p>Demo2</p>
        </div>
        <input
          type="button"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        />
        <div id="Demo3" className="w3-hide w3-black">
          <div className="w3-container">
            <p>This is ____ , a non-profit aiming to help troubled youth:</p>
            <img
              alt="animate-zoom not available"
              src="img_snowtops.jpg"
              // style="width:30%;"
              className="w3-animate-zoom"
            />
          </div>
        </div>
        <h2 className="w3-center">Our Tools</h2>
        <div className="w3-border">
          <div className="w3-bar w3-theme">
            <p>Database API</p>
            <input
              type="button"
              className="w3-bar-item w3-button testbtn w3-padding-16"
            />

            <p>PayPal</p>
            <input
              type="button"
              className="w3-bar-item w3-button testbtn w3-padding-16"
            />
            <p>React</p>
            <input className="w3-bar-item w3-button testbtn w3-padding-16" />
          </div>

          <div id="London" className="w3-container city w3-animate-opacity">
            <h2>Non-Profit Database API</h2>
            <p>
              We use Non-Profit Database API to give you the ability to search
              for any non-profit here in the US
            </p>
            <p>It is easy to use and are able to garner results in seconds</p>
          </div>

          <div id="Paris" className="w3-container city w3-animate-opacity">
            <h2>PayPal</h2>
            <p>Donate through our web app using PayPal</p>
            <p>
              PayPal is a trusted payment service that will make sure your
              donation is securely sent and received to a non-profit
            </p>
          </div>

          <div id="Tokyo" className="w3-container city w3-animate-opacity">
            <h2>React</h2>
            <p>Do you like how our web page looks?</p>
            <p>
              Thanks to React, we are able to create an amazing web page for you
              to enjoy. Navigating through our web app is easy and fast!
            </p>
          </div>
        </div>
        <br />
        <footer className="w3-container w3-theme-dark w3-padding-16">
          <h3>Footer</h3>
          <p>Powered by</p>
          <div
            // style="position:relative;bottom:55px;"
            className="w3-tooltip w3-right"
          >
            <span className="w3-text w3-theme-light w3-padding">Go To Top</span>
            <a className="w3-text-white" href="#myHeader">
              <span className="w3-xlarge">
                <i className="fa fa-chevron-circle-up" />
              </span>
            </a>
          </div>
          <p>
            Check us out on
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
          </p>
          <p>Remember to check out our</p>
        </footer>
      </div>
    )
  }
}

export default Netters
