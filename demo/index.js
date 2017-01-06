'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Chip, Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################

//#############################################################################
// Inline styles.
//#############################################################################

//#############################################################################
// React components.
//#############################################################################
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>react-mdui</h1>
        <h3>Components</h3>
        <h4>Button</h4>
        <Button
          node="button"
          raised
          ripple
        >
          This is a button
        </Button>
        <h4>Icon</h4>
        <Chip
          icon={ <Icon materialIcon="&#xe87c;" /> }
          title="Click Me"
          delete
          onClickDelete={ function() { console.log( 'delete' ) } }
        >
          This is a chip
        </Chip>
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
