import React from 'react';

// import { Accordion, Card, Button } from 'react-bootstrap';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './OrgAccordion.css';

class OrgAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Accordion className="OrgAccordion" allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">
                The Power of Donations!
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div id="Demo1" className="w3-white">
                <div className="w3-container">
                  <p>
                    Donations are a powerful way to help non-profits that are
                    fighting for a good cause. Donations are the best way to
                    show support, next to volunteering!
                  </p>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">
                Video
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div id="Demo2" className="w3-white">
                <p>Demo2</p>
              </div>
              <img
                    alt="video-demo"
                    src="#"
                    // style="width:30%;"
                    className="w3-animate-zoom"
                  />
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">
                Links to our articles of the week
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div id="Demo3" className="w3-white">
                <div className="w3-container">
                  <p>
                    How To Know An Organization Is Legit
                  </p>
                  <p>
                    Donation Scam: Avoid These Shady Organizations
                  </p>
                  <p>
                    How Donations Saved This Small Town
                  </p>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <hr />
      </div>
    );
  }
}

export default OrgAccordion;
