import React from 'libs/react';
import SubHeading2 from 'remote2/SubHeading2';
import {getMessage} from './helper'

const Heading1 = () => {
  return (<>
    <SubHeading2 />
    <h1>R1: This is the heading hey hey!</h1>
    <p>Helper : {getMessage()}</p>
  </>);
};

export default Heading1;
