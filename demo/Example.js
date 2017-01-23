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
import Highlight from 'react-highlight';

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
class Example extends React.Component{
  constructor( props ) {
    super( props );
    this.state = {
      expand: false
    };
  }

  render() {
    const {
      label,
      demo,
      code
    } = this.props;

    const styleCode = {
      ...Styles[ 'doc-example-code' ],
      ...( this.state.expand && Styles[ 'doc-example-showcode doc-example-code' ] )
    };

    return (
      <div { ...css( Styles[ 'doc-example' ] ) }>
        <div
          { ...css( Styles[ 'doc-example-tools' ] ) }
          onClick={ () => this.setState( { expand: !this.state.expand } ) }
        >
          <a { ...css( Styles[ 'doc-example-tools a' ] ) } href="javascript:;">
            <i className="mdui-icon material-icons"></i>
          </a>
        </div>
        <div { ...css( Styles[ 'doc-example-demo-label' ] ) }>
          { label }
        </div>
        <div { ...css( Styles[ 'doc-example-demo' ] ) }>
          { demo }
        </div>
        <pre { ...css( styleCode ) }>
          <code { ...css( Styles[ 'doc-example-code code' ] ) }>
            <Highlight className="js">
              { code }
            </Highlight>
          </code>
        </pre>
      </div>
    );
  }
};

export default Example;
