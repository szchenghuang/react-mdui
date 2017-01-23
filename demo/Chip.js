'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Chip, Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: "Basic",
    demo: <Chip title="Click Me" />,
    code: '<Chip title="Click Me" />'
  },
  {

    label: "Text icon",
    demo: <Chip icon="A" title="Chip" />,
    code: '<Chip icon="A" title="Chip" />'
  },
  {
    label: "Image icon",
    demo: <Chip iconSrc="img/avatar1.jpg" title="Chip" />,
    code: '<Chip iconSrc="img/avatar1.jpg" title="Chip" />'
  },
  {
    label: "Material icon",
    demo: (
      <Chip
        icon={ <Icon materialIcon="face" /> }
        title="Chip" />
    ),
    code:
`<Chip
  icon={ <Icon materialIcon="face" /> }
  title="Chip" />`
  },
  {
    label: "Colorful Material icon",
    demo: (
      <Chip
        icon={ <Icon materialIcon="face" /> }
        classNameIcon="mdui-color-blue"
        title="Chip" />
    ),
    code:
`<Chip
  icon={ <Icon materialIcon="face" /> }
  classNameIcon="mdui-color-blue"
  title="Chip" />`
  },
  {
    label: "Close button",
    demo: (
      <Chip
        icon={ <Icon materialIcon="face" /> }
        title="Chip"
        delete
        onDelete={ function() { alert( 'delete!' ) } } />
    ),
    code:
`<Chip
  icon={ <Icon materialIcon="face" /> }
  title="Chip"
  delete
  onDelete={ function() { alert( 'delete!' ) } } />`
  }
];

export default examples;
