'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Radio } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
class RadioWrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      checked: 'A'
    };
  }

  render() {
    return (
      <div>
        <p>
          <Radio
            label="Plan A"
            value="A"
            checked={ 'A' === this.state.checked }
            onChange={ value => this.setState( { checked: value } ) } />
        </p>
        <p>
          <Radio
            label="Plan B"
            value="B"
            checked={ 'B' === this.state.checked }
            onChange={ value => this.setState( { checked: value } ) } />
        </p>
      </div>
    );
  }
}

const examples = [
  {
    label: 'Radio',
    demo: <RadioWrapper />,
    code:
`class RadioWrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      Optionchecked: 'A'
    };
  }

  render() {
    return (
      <div>
        <Radio
          label="Plan A"
          value="A"
          checked={ 'A' === this.state.checked }
          onChange={ value => this.setState( { checked: value } ) } />
        <Radio
          label="Plan B"
          value="B"
          checked={ 'B' === this.state.checked }
          onChange={ value => this.setState( { checked: value } ) } />
      </div>
    );
  }
}`
  },
  {
    label: 'Radios (controlled)',
    demo: (
      <div>
        <p><Radio name="group1" label="Unchecked" /></p>
        <p><Radio name="group1" label="Checked" checked /></p>
        <p><Radio name="group2" label="Disabled" disabled /></p>
        <p><Radio name="group2" label="Disabled checked" checked disabled /></p>
      </div>
    ),
    code:
`<Radio name="group1" label="Unchecked" />
<Radio name="group1" label="Checked" checked />
<Radio name="group2" label="Disabled" disabled />
<Radio name="group2" label="Disabled checked" checked disabled />`
  }
];

export default examples;
