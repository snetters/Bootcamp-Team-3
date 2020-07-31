import React from 'react';

import './Modal.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="id01" className="w3-modal">
        <Accordion className="w3-padding-32" allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">
                Learn More
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="w3-modal-content w3-card-4 w3-animate-top">
              <div className="w3-modal-content w3-card-4 w3-animate-top">
                <header className="w3-container w3-theme-l1">
                  <h4>Want to know more about FundFlow?</h4>
                  <h5>You are in luck!</h5>
                </header>
                {/*  */}
                <div className="w3-padding">
                  <p>For any questions or genuine curiosity...</p>
                  <p>Check out our About Page to learn more!</p>
                  {/* Hover over 'About Page' and function as button */}
                </div>
                <footer className="w3-container w3-theme-l1">
                  <p>
                    <AccordionItemButton className="fa fa-smile-o">
                      × Exit
                    </AccordionItemButton>
                  </p>
                </footer>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default Modal;
