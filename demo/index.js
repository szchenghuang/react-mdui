'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
  Collapse, CollapseItem, CollapseItemArrow, CollapseItemBody, CollapseItemHeader,
  Drawer,
  Icon,
  List, ListItem, ListItemContent, ListItemIcon
} from '../dist';
import Demos from './Demos';
import Example from './Example';

const COMPONENTS = [
  'Button',
  'Checkbox',
  'Chip',
  'Collapse',
  'Drawer',
  'Icon',
  'List',
  'Panel',
  'Progress',
  'Radio',
  'Slider',
  'Spinner',
  'Switch'
];

const Examples = props => (
  <div className="mdui-container">
    <h3>{ props.label }</h3>
    { props.examples.map( ( example, index ) => (
      <Example key={ props.label + '-' + index } { ...example } />
    ))}
  </div>
);

const App = React.createClass({
  getInitialState() {
    return {
      component: COMPONENTS[ 0 ]
    };
  },
  render() {
    const { component } = this.state;

    return (
      <div>
        <Drawer scrollBar open>
          <Collapse>
            <CollapseItem>
              <CollapseItemHeader>
                <List>
                  <ListItem>
                    <ListItemContent>react-mdui</ListItemContent>
                  </ListItem>
                </List>
              </CollapseItemHeader>
            </CollapseItem>
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
        <Examples label={ component } examples={ Demos[ component ] } />
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
