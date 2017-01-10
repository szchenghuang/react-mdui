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
import { Slider } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const SliderWrapper = React.createClass({
  getInitialState() {
    return {
      value: 0
    };
  },
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
});

const examples = [
  {
    label: "Continuous slider",
    demo: <Slider defaultValue={ 5 } />
  },
  {
    label: "Discrete slider",
    demo: <Slider discrete />
  },
  {
    label: "Default value",
    demo: <Slider defaultValue={ 5 } discrete />
  },
  {
    label: "Min/max",
    demo: <Slider defaultValue={ 5 } min={ 3 } max={ 50 } discrete />
  },
  {
    label: "Controlled slider",
    demo: <SliderWrapper />,
    code:
    'class SliderWrapper extends React.PureComponent { \n' +
    '  constructor( props ) { \n' +
    '    super( props ); \n' +
    '    this.state = { \n' +
    '      value: 0 \n' +
    '    }; \n' +
    '  } \n' +
    '  render() { \n' +
    '    return ( \n' +
    '      <Slider \n' +
    '        discrete \n' +
    '        step={ 2 } \n' +
    '        min={ 10 } \n' +
    '        max={ 20 } \n' +
    '        value={ this.state.value } \n' +
    '        onChange={ value => this.setState( { value } ) } /> \n' +
    '    ); \n' +
    '  } \n' +
    '}'
  }
];

export default examples;
