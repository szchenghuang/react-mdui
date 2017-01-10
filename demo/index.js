'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Example from './Example';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const Examples = props => (
  <div>
    <h3>{ props.label }</h3>
    { props.examples.map( ( example, index ) => (
      <Example key={ index } { ...example } />
    ))}
  </div>
);

//#############################################################################
// React components.
//#############################################################################
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>react-mdui</h1>
        <h2>Components</h2>
        <Examples label="Button" examples={ require( './Button' ).default } />
        <Examples label="Chip" examples={ require( './Chip' ).default } />
        <Examples label="Icon" examples={ require( './Button' ).default } />
        <Examples label="Slider" examples={ require( './Slider' ).default } />
      </div>
    );
  }
});

window.onload = () => {
  ReactDOM.render(
    <App />,
    document.querySelector( '#container' )
  );
};
