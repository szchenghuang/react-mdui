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
import Example from './Example';

const Examples = props => (
  <div>
    <h3>{ props.label }</h3>
    { props.examples.map( ( example, index ) => (
      <Example key={ index } { ...example } />
    ))}
  </div>
);

const App = React.createClass({
  render() {
    return (
      <div>
        <Drawer scrollBar open>
          <List>
            <CollapseItem>
              <CollapseItemHeader>
                <ListItem>
                  <ListItemContent>react-mdui</ListItemContent>
                </ListItem>
              </CollapseItemHeader>
            </CollapseItem>
            <CollapseItem>
              <CollapseItemHeader>
                <ListItem>
                  <ListItemIcon>widgets</ListItemIcon>
                  <ListItemContent>Components</ListItemContent>
                  <CollapseItemArrow />
                </ListItem>
              </CollapseItemHeader>
              <CollapseItemBody ripple>
                <ListItem ripple>Button</ListItem>
                <ListItem ripple>Chip</ListItem>
              </CollapseItemBody>
            </CollapseItem>
          </List>
        </Drawer>
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
