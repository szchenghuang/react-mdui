'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { AppBar, Button, Icon, Tab, TabItem, Toolbar, ToolbarSpacer } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const appBar = (
  <AppBar
    fixed={ false }
    toolbar={
      <Toolbar>
        <Button node='a' icon><Icon materialIcon="&#xe5d2;" /></Button>
        <span className="mdui-typo-title">Title</span>
        <ToolbarSpacer />
        <Button node='a' icon><Icon materialIcon="&#xe8b6;" /></Button>
        <Button node='a' icon><Icon materialIcon="&#xe5d5;" /></Button>
        <Button node='a' icon><Icon materialIcon="&#xe5d4;" /></Button>
      </Toolbar>
    }
    tab={
      <Tab>
        <TabItem
          id="recents"
          icon={ <Icon materialIcon="&#xe0cd;" /> }
          label="Recents" />
        <TabItem
          id="favorites"
          icon={ <Icon materialIcon="&#xe87d;" /> }
          label="Favorites"
          active />
        <TabItem
          id="nearby"
          icon={ <Icon materialIcon="&#xe8a3;" /> }
          label="Nearby" />
      </Tab>
    } />
);

const examples = [
  {
    label: "AppBar with Toolbar and Tab",
    demo: appBar,
    code:
`<AppBar
  fixed={ false }
  toolbar={
    <Toolbar>
      <Button node='a' icon><Icon materialIcon="&#xe5d2;" /></Button>
      <span className="mdui-typo-title">Title</span>
      <ToolbarSpacer />
      <Button node='a' icon><Icon materialIcon="&#xe8b6;" /></Button>
      <Button node='a' icon><Icon materialIcon="&#xe5d5;" /></Button>
      <Button node='a' icon><Icon materialIcon="&#xe5d4;" /></Button>
    </Toolbar>
  }
  tab={
    <Tab>
      <TabItem
        id="recents"
        icon={ <Icon materialIcon="&#xe0cd;" /> }
        label="Recents" />
      <TabItem
        id="favorites"
        icon={ <Icon materialIcon="&#xe87d;" /> }
        label="Favorites"
        active />
      <TabItem
        id="nearby"
        icon={ <Icon materialIcon="&#xe8a3;" /> }
        label="Nearby" />
    </Tab>
  } />`
  }
];

export default examples;
