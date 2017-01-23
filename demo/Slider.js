'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Slider } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
class ComplexSlider extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: 16
    };
  }

  render() {
    return (
      <Slider
        discrete
        step={ 2 }
        min={ 10 }
        max={ 20 }
        value={ this.state.value }
        onChange={ value => this.setState( { value } ) } />
    );
  }
}

const examples = [
  {
    label: "Complex slider",
    demo: <ComplexSlider />,
    code:
`class ComplexSlider extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: 16
    };
  }

  render() {
    return (
      <Slider
        discrete
        step={ 2 }
        min={ 10 }
        max={ 20 }
        value={ this.state.value }
        onChange={ value => this.setState( { value } ) } />
    );
  }
}`
  }
];

export default examples;
