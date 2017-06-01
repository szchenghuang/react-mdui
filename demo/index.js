'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
  AppBar,
  Button,
  Collapse, CollapseItem, CollapseItemArrow, CollapseItemBody, CollapseItemHeader,
  Drawer,
  Icon,
  List, ListItem, ListItemContent, ListItemIcon,
  Toolbar
} from '../dist';
import Demos from './Demos';
import Example from './Example';

const COMPONENTS = [
  'AppBar',
  'Button',
  'Checkbox',
  'Chip',
  'Collapse',
  'Drawer',
  'Headroom',
  'Icon',
  'List',
  'Panel',
  'Progress',
  'Radio',
  'Slider',
  'Spinner',
  'Switch',
  'Tab',
  'Toolbar'
];

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      component: COMPONENTS[ 0 ],
      open: true,
      blank: false
    };
  }
  render() {
    const { component, open, blank } = this.state;

    return (
      <div>
        { !blank && (
          <div>
          <AppBar
            fixed
            toolbar={
              <Toolbar>
                <Button
                  node='a'
                  icon
                  onClick={ () => this.setState( { open: !open } ) }
                >
                  <Icon materialIcon="&#xe5d2;" />
                </Button>
                <span className="mdui-typo-title">react-mdui</span>
              </Toolbar>
            } />
          <Drawer scrollBar open={ this.state.open }>
            <Collapse>
              <CollapseItem
                defaultOpen
                onToggle={ this.onClickComponents }
              >
                <CollapseItemHeader>
                  <List>
                    <ListItem>
                      <ListItemIcon materialIcon="&#xe1bd;" />
                      <ListItemContent>Components</ListItemContent>
                      <CollapseItemArrow />
                    </ListItem>
                  </List>
                </CollapseItemHeader>
                <CollapseItemBody ripple>
                  <List>
                    { COMPONENTS.map( ( COMPONENT, index ) => (
                      <ListItem
                        key={ index }
                        ripple
                        onClick={ event => this.onClickComponent( event, COMPONENT ) }
                      >
                        { COMPONENT }
                      </ListItem>
                    ))}
                  </List>
                </CollapseItemBody>
              </CollapseItem>
            </Collapse>
          </Drawer>
          </div>
        )}
        <div className="mdui-container">
          <h3>{ component }</h3>
          { Demos[ component ].map( ( demo, index ) => {
            const props = {
              key: component + '-' + index,
              ...( 'Headroom' === component && {
                back: () => this.setState( { blank: false } ),
                onClick: () => this.setState( { blank: true } )
              } ),
              ...demo
            };

            return <Example { ...props } />;
          } ) }
        </div>
      </div>
    );
  }
  onClickComponent = ( event, component ) => {
    event.stopPropagation();
    this.setState( { component } );
  }
}

window.onload =
  () => ReactDOM.render( <App />, document.querySelector( '#container' ) );
