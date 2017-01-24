'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Switch } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
class SwitchWrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <Switch
        checked={ this.state.checked }
        onChange={ checked => this.setState( { checked } ) } />
    );
  }
}

const examples = [
  {
    label: 'Switch',
    demo: <SwitchWrapper />,
    code:
`class SwitchWrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <Switch
        checked={ this.state.checked }
        onChange={ checked => this.setState( { checked } ) } />
    );
  }
}`
  },
  {
    label: 'Switches (controlled)',
    demo: (
      <div>
        <p><Switch /></p>
        <p><Switch checked /></p>
        <p><Switch disabled /></p>
        <p><Switch checked disabled /></p>
      </div>
    ),
    code:
`<Switch />
<Switch checked />
<Switch disabled />
<Switch checked disabled />`
  }
];

export default examples;
