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

const Examples = props => (
  <div className="mdui-container">
    <h3>{ props.label }</h3>
    { props.examples.map( ( example, index ) => (
      <Example
        key={ props.label + '-' + index }
        back={ props.back }
        onClick={ props.onClick }
        { ...example } />
    ))}
  </div>
);

const App = React.createClass({
  getInitialState() {
    return {
      component: COMPONENTS[ 0 ],
      open: true,
      blank: false
    };
  },
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
        <Examples
          label={ component }
          examples={ Demos[ component ] }
          onClick={ () => this.setState( { blank: true } ) }
          back={ () => this.setState( { blank: false } ) } />
      </div>
    );
  },
  onClickComponent( event, component ) {
    event.stopPropagation();
    this.setState( { component } );
  }
});

window.onload = () => {
  ReactDOM.render(
    <App />,
    document.querySelector( '#container' )
  );
};
