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
      component: 'Button'
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
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Button' ) }>Button</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Chip' ) }>Chip</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Collapse' ) }>Collapse</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Drawer' ) }>Drawer</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Icon' ) }>Icon</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'List' ) }>List</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Panel' ) }>Panel</ListItem>
                  <ListItem ripple onClick={ event => this.onClickComponent( event, 'Slider' ) }>Slider</ListItem>
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
