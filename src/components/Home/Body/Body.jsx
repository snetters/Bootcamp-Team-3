import React from 'react';

import OrgAccordion from './OrgAccordion/OrgAccordion';
import MainCards from './MainCards/MainCards';
import Mission from './Mission/Mission';
import ProgressBar from './ProgressBar/ProgressBar';
import Reach from './Reach/Reach';
import Slideshow from './Slideshow/Slideshow';
import Tabs from './Tabs/Tabs';

export default function Body() {
  return (
    <div className="Body">
      <OrgAccordion />
      <MainCards />
      <Mission />
      <ProgressBar />
      <Reach />
      <Slideshow />
      <Tabs />
    </div>
  );
}
