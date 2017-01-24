'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Checkbox } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
class CheckboxWrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <Checkbox
        label="Checkbox"
        checked={ this.state.checked }
        onChange={ checked => this.setState( { checked } ) } />
    );
  }
}

const examples = [
  {
    label: 'Checkbox',
    demo: <CheckboxWrapper />,
    code:
`class CheckboxWrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <Checkbox
        label="Checkbox"
        checked={ this.state.checked }
        onChange={ checked => this.setState( { checked } ) } />
    );
  }
}`
  },
  {
    label: 'Checkboxes (controlled)',
    demo: (
      <div>
        <p><Checkbox label="Unchecked" /></p>
        <p><Checkbox label="Checked" checked /></p>
        <p><Checkbox label="Disabled" disabled /></p>
        <p><Checkbox label="Disabled checked" checked disabled /></p>
      </div>
    ),
    code:
`<Checkbox label="Unchecked" />
<Checkbox label="Checked" checked />
<Checkbox label="Disabled" disabled />
<Checkbox label="Disabled checked" checked disabled />`
  }
];

export default examples;
