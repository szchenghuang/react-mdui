'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################
import Styles from './styles';

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { css } from 'glamor';
import { Button, Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: 'Flat button',
    demo: <Button node="button">button</Button>
  },
  {
    label: 'Raised button',
    demo: <Button node="button" raised>button</Button>
  },
  {
    label: 'Icon button',
    demo: (
      <div>
        <div style={ { display: 'inline-block' } }>
          <Button node="button" icon><Icon materialIcon="&#xe145;" /></Button>
        </div>
        <div style={ { display: 'inline-block' } }>
          <Button node="button"><Icon materialIcon="&#xe80d;" right/> Share</Button>
        </div>
        <div style={ { display: 'inline-block' } }>
          <Button node="button"><Icon materialIcon="&#xe80d;" left/> Share</Button>
        </div>
        <div style={ { display: 'inline-block' } }>
          <Button node="button" disabled><Icon materialIcon="&#xe80d;" left/> Share</Button>
        </div>
      </div>
    )
  }
];

export default examples;
