'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Progress } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: "Indeterminate (default)",
    demo: <Progress />,
    code: '<Progress />'
  },
  {
    label: "Determinate",
    demo: <Progress percentage={ 30 } />,
    code: '<Progress percentage={ 30 } />'
  }
];

export default examples;
