'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { Icon, Tab, TabItem } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const tab = (
  <Tab>
    <TabItem
      id="recents"
      icon={ <Icon materialIcon="&#xe0cd;" /> }
      label="Recents"
    >
      <div className="mdui-p-a-2">
        Recents conetnt
      </div>
    </TabItem>
    <TabItem
      id="favorites"
      icon={ <Icon materialIcon="&#xe87d;" /> }
      label="Favorites"
      active
    >
      <div className="mdui-p-a-2">
        Favorites conetnt
      </div>
    </TabItem>
    <TabItem
      id="nearby"
      icon={ <Icon materialIcon="&#xe8a3;" /> }
      label="Nearby"
    >
      <div className="mdui-p-a-2">
        Nearby conetnt
      </div>
    </TabItem>
  </Tab>
);

const examples = [
  {
    label: "Tab",
    demo: tab,
    code:
`<Tab>
  <TabItem
    id="recents"
    icon={ <Icon materialIcon="&#xe0cd;" /> }
    label="Recents"
  >
    <div className="mdui-p-a-2">
      Recents conetnt
    </div>
  </TabItem>
  <TabItem
    id="favorites"
    icon={ <Icon materialIcon="&#xe87d;" /> }
    label="Favorites"
    active
  >
    <div className="mdui-p-a-2">
      Favorites conetnt
    </div>
  </TabItem>
  <TabItem
    id="nearby"
    icon={ <Icon materialIcon="&#xe8a3;" /> }
    label="Nearby"
  >
    <div className="mdui-p-a-2">
      Nearby conetnt
    </div>
  </TabItem>
</Tab>`
  }
];

export default examples;
