'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import {
  Button,
  Drawer,
  List, ListItem, ListItemIcon, ListItemContent
} from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
class ComplexDrawer extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
        <Button
          raised
          onClick={ this.onToggle }
        >
          Toggle
        </Button>
        <Drawer
          className="mdui-color-red"
          open={ this.state.open }
          right
          overlay
          fullHeight
          scrollBar
          onChange={ open => this.setState({ open }) }
        >
          <List>
            <ListItem>
              <ListItemIcon materialIcon="&#xe88a;" />
              <ListItemContent>Home</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemIcon materialIcon="&#xe871;" />
              <ListItemContent>Dashboard</ListItemContent>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }

  onToggle = () => {
    this.setState({ open: !this.state.open });
  }
}

let examples = [
  {
    label: "Complex drawer",
    demo: <ComplexDrawer />,
    code:
`class ComplexDrawer extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
        <Button
          raised
          onClick={ this.onToggle }
        >
          Toggle
        </Button>
        <Drawer
          className="mdui-color-red"
          open={ this.state.open }
          right
          overlay
          fullHeight
          scrollBar
          onChange={ open => this.setState({ open }) }
        >
          <List>
            <ListItem>
              <ListItemIcon materialIcon="&#xe88a;" />
              <ListItemContent>Home</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemIcon materialIcon="&#xe871;" />
              <ListItemContent>Dashboard</ListItemContent>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }

  onToggle = () => {
    this.setState({ open: !this.state.open });
  }
}`
  }
];

export default examples;
