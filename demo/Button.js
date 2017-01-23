'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Button, Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: 'Flat buttons',
    demo: (
      <div>
        <p>
          <Button>button</Button>
        </p>
        <p>
          <Button disabled>disabled</Button>
        </p>
      </div>
    ),
    code:
`<Button>button</Button>
<Button disabled>disabled</Button>`
  },
  {
    label: 'Raised buttons',
    demo: (
      <div>
        <p>
          <Button raised>button</Button>
        </p>
        <p>
          <Button raised disabled>disabled</Button>
        </p>
      </div>
    ),
    code:
`<Button raised>button</Button>
<Button raised disabled>disabled</Button>`
  },
  {
    label: 'Icon buttons',
    demo: (
      <div>
        <p>
          <Button icon><Icon materialIcon="add" /></Button>
        </p>
        <p>
          <Button><Icon materialIcon="share" right/> Share</Button>
        </p>
        <p>
          <Button><Icon materialIcon="share" left/> Share</Button>
        </p>
        <p>
          <Button disabled><Icon materialIcon="share" left/> Share</Button>
        </p>
      </div>
    ),
    code:
`<Button icon><Icon materialIcon="add" /></Button>
<Button><Icon materialIcon="share" right /> Share</Button>
<Button><Icon materialIcon="share" left /> Share</Button>
<Button disabled><Icon materialIcon="share" left /> Share</Button>`
  }
];

export default examples;
