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
                Links to our articles of the week
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div id="Demo1" className="w3-hide">
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
              <div id="Demo2" className="w3-hide">
                <p>Demo2</p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">
                Links to our articles of the week
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div id="Demo3" className="w3-hide w3-black">
                <div className="w3-container">
                  <p>
                    This is ____ , a non-profit aiming to help troubled youth:
                  </p>
                  <img
                    alt="animate-zoom not available"
                    src="img_snowtops.jpg"
                    // style="width:30%;"
                    className="w3-animate-zoom"
                  />
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default OrgAccordion;
