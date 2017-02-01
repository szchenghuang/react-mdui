'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Button, Headroom, Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################
class Wrapper extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      demo: false
    };
  }

  render() {
    return this.state.demo ? (
      <div>
        <Headroom
          style={{
            position: 'fixed', background: '#607D8B',
            top: 0, left: 0, right: 0, height: 60,
            display: 'flex', alignItems: 'center',
            paddingLeft: '16px'
          }}
        >
          <Button icon onClick={ this.back }>
            <Icon materialIcon="&#xe5c4;" />
          </Button>
          <div className="mdui-typo-title">Back</div>
        </Headroom>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    ) : (
      <Button raised onClick={ this.onClick }>Demo</Button>
    );
  }

  back = () => {
    this.setState( { demo: false } );
    this.props.back();
  }

  onClick = () => {
    this.setState( { demo: true } );
    this.props.onClick();
  }
};

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: "Headroom",
    demo: <Wrapper />,
    code:
`<Headroom
  style={{
    position: 'fixed', background: '#607D8B',
    top: 0, left: 0, right: 0, height: 60,
    display: 'flex', alignItems: 'center',
    paddingLeft: '16px'
  }}
>
  <Button icon onClick={ this.back }>
    <Icon materialIcon="&#xe5c4;" />
  </Button>
  <div className="mdui-typo-title">Back</div>
</Headroom>`
  }
];

export default examples;
