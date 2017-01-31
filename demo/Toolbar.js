'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Button, Icon, Toolbar, ToolbarSpacer } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const toolbar = (
  <Toolbar className="mdui-color-red">
    <Button node='a' icon><Icon materialIcon="&#xe5d2;" /></Button>
    <span className="mdui-typo-title">Title</span>
    <ToolbarSpacer />
    <Button node='a' icon><Icon materialIcon="&#xe8b6;" /></Button>
    <Button node='a' icon><Icon materialIcon="&#xe5d5;" /></Button>
    <Button node='a' icon><Icon materialIcon="&#xe5d4;" /></Button>
  </Toolbar>
);

const examples = [
  {
    label: "Toolbar",
    demo: toolbar,
    code:
`<Toolbar className="mdui-color-red">
  <Button node='a' icon><Icon materialIcon="&#xe5d2;" /></Button>
  <span className="mdui-typo-title">Title</span>
  <ToolbarSpacer />
  <Button node='a' icon><Icon materialIcon="&#xe8b6;" /></Button>
  <Button node='a' icon><Icon materialIcon="&#xe5d5;" /></Button>
  <Button node='a' icon><Icon materialIcon="&#xe5d4;" /></Button>
</Toolbar>`
  }
];

export default examples;
