'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: "Material icon for modern browsers",
    demo: <Icon materialIcon="check_box" />,
    code: '<Icon materialIcon="check_box" />'
  },
  {
    label: "Material icon for all browsers",
    demo: <Icon materialIcon="&#xe834;" />,
    code: '<Icon materialIcon="&#xe834;" />'
  },
  {
    label: "Colored icon",
    demo: <Icon className="mdui-text-color-red" materialIcon="&#xe834;" />,
    code: '<Icon className="mdui-text-color-red" materialIcon="&#xe834;" />'
  }
];

export default examples;
