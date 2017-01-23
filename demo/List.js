'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################
import Styles from './styles';

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import {
  Divider,
  List, ListItem, ListItemAvatar, ListItemIcon, ListItemContent,
  ListItemTitle, ListItemText,
  Subheader
} from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: 'Trivial',
    demo: (
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Dashboard</ListItem>
      </List>
    ),
    code:
`<List>
  <ListItem>Home</ListItem>
  <ListItem>Dashboard</ListItem>
</List>`
  },
  {
    label: 'Links',
    demo: (
      <List>
        <ListItem href="#">Home</ListItem>
        <ListItem href="#">Dashboard</ListItem>
      </List>
    ),
    code:
`<List>
  <ListItem href="#">Home</ListItem>
  <ListItem href="#">Dashboard</ListItem>
</List>`
  },
  {
    label: 'Icons',
    demo: (
      <List>
        <ListItem>
          <ListItemIcon materialIcon="&#xe88a;" />
          <ListItemContent>Home</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemIcon materialIcon="&#xe871;" />
          <ListItemContent>Dashboard</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemIcon materialIcon="" />
          <ListItemContent>Inbox</ListItemContent>
        </ListItem>
      </List>
    ),
    code:
`<List>
  <ListItem>
    <ListItemIcon materialIcon="&#xe88a;" />
    <ListItemContent>Home</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemIcon materialIcon="&#xe871;" />
    <ListItemContent>Dashboard</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemIcon materialIcon="" />
    <ListItemContent>Inbox</ListItemContent>
  </ListItem>
</List>`
  },
  {
    label: 'Icons to the right',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>
          <ListItemContent>Home</ListItemContent>
          <ListItemIcon materialIcon="&#xe88a;" />
        </ListItem>
        <ListItem>
          <ListItemContent>Dashboard</ListItemContent>
          <ListItemIcon materialIcon="&#xe871;" />
        </ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>
    <ListItemContent>Home</ListItemContent>
    <ListItemIcon materialIcon="&#xe88a;" />
  </ListItem>
  <ListItem>
    <ListItemContent>Dashboard</ListItemContent>
    <ListItemIcon materialIcon="&#xe871;" />
  </ListItem>
</List>`
  },
  {
    label: 'Avatars',
    demo: (
      <List>
        <ListItem>
          <ListItemAvatar src="img/avatar1.jpg" />
          <ListItemContent>Brendan Lim</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemAvatar src="img/avatar1.jpg" />
          <ListItemContent>Brendan Lim</ListItemContent>
        </ListItem>
      </List>
    ),
    code:
`<List>
  <ListItem>
    <ListItemAvatar src="img/avatar1.jpg" />
    <ListItemContent>Brendan Lim</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemAvatar src="img/avatar1.jpg" />
    <ListItemContent>Brendan Lim</ListItemContent>
  </ListItem>
</List>`
  },
  {
    label: 'Avatars to the right',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>
          <ListItemContent>Brendan Lim</ListItemContent>
          <ListItemAvatar src="img/avatar1.jpg" />
        </ListItem>
        <ListItem>
          <ListItemContent>Brendan Lim</ListItemContent>
          <ListItemAvatar src="img/avatar1.jpg" />
        </ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>
    <ListItemContent>Brendan Lim</ListItemContent>
    <ListItemAvatar src="img/avatar1.jpg" />
  </ListItem>
  <ListItem>
    <ListItemContent>Brendan Lim</ListItemContent>
    <ListItemAvatar src="img/avatar1.jpg" />
  </ListItem>
</List>`
  },
  {
    label: 'Avatars and icons',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>
          <ListItemAvatar src="img/avatar1.jpg" />
          <ListItemContent>Brendan Lim</ListItemContent>
          <ListItemIcon materialIcon="&#xe88a;" />
        </ListItem>
        <ListItem>
          <ListItemAvatar src="img/avatar1.jpg" />
          <ListItemContent>Brendan Lim</ListItemContent>
          <ListItemIcon materialIcon="&#xe871;" />
        </ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>
    <ListItemAvatar src="img/avatar1.jpg" />
    <ListItemContent>Brendan Lim</ListItemContent>
    <ListItemIcon materialIcon="&#xe88a;" />
  </ListItem>
  <ListItem>
    <ListItemAvatar src="img/avatar1.jpg" />
    <ListItemContent>Brendan Lim</ListItemContent>
    <ListItemIcon materialIcon="&#xe871;" />
  </ListItem>
</List>`
  },
  {
    label: 'Iconic avatars',
    demo: (
      <List>
        <ListItem>
          <ListItemAvatar materialIcon="&#xe88a;" />
          <ListItemContent>Home</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemAvatar materialIcon="&#xe871;" />
          <ListItemContent>Dashboard</ListItemContent>
        </ListItem>
      </List>
    ),
    code:
`<List>
  <ListItem>
    <ListItemAvatar materialIcon="&#xe88a;" />
    <ListItemContent>Home</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemAvatar materialIcon="&#xe871;" />
    <ListItemContent>Dashboard</ListItemContent>
  </ListItem>
</List>`
  },
  {
    label: 'Multiple lines',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>
          <ListItemContent>
            <ListItemTitle oneLine>Multiline item</ListItemTitle>
            <ListItemText twoLines>
              You've got to get enough sleep. Other travelling salesmen live a life of luxury. You've got to get enough sleep. Other travelling salesmen live a life of luxury.
            </ListItemText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <ListItemTitle oneLine>Multiline item</ListItemTitle>
            <ListItemText twoLines>
              You've got to get enough sleep. Other travelling salesmen live a life of luxury. You've got to get enough sleep. Other travelling salesmen live a life of luxury.
            </ListItemText>
          </ListItemContent>
        </ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>
    <ListItemContent>
      <ListItemTitle oneLine>Multiline item</ListItemTitle>
      <ListItemText twoLines>
        You've got to get enough sleep. Other travelling salesmen live a life of luxury. You've got to get enough sleep. Other travelling salesmen live a life of luxury.
      </ListItemText>
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>
      <ListItemTitle oneLine>Multiline item</ListItemTitle>
      <ListItemText twoLines>
        You've got to get enough sleep. Other travelling salesmen live a life of luxury. You've got to get enough sleep. Other travelling salesmen live a life of luxury.
      </ListItemText>
    </ListItemContent>
  </ListItem>
</List>`
  },
  {
    label: 'Divider',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>Home</ListItem>
        <Divider />
        <ListItem>Dashboard</ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>Home</ListItem>
  <Divider />
  <ListItem>Dashboard</ListItem>
</List>`
  },
  {
    label: 'Remove margins from dividers',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>Home</ListItem>
        <Divider className="mdui-m-y-0" />
        <ListItem>Dashboard</ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>Home</ListItem>
  <Divider className="mdui-m-y-0" />
  <ListItem>Dashboard</ListItem>
</List>`
  },
  {
    label: 'Subheader',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>Home</ListItem>
        <Subheader>Work</Subheader>
        <ListItem>Dashboard</ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>Home</ListItem>
  <Subheader>Work</Subheader>
  <ListItem>Dashboard</ListItem>
</List>`
  },
  {
    label: 'Inset subheader',
    demo: (
      <List style={ { maxWidth: 360 } }>
        <ListItem>
          <ListItemAvatar src="img/avatar1.jpg" />
          <ListItemContent>Brendan Lim</ListItemContent>
        </ListItem>
        <Subheader inset>Work</Subheader>
        <ListItem>
          <ListItemAvatar src="img/avatar1.jpg" />
          <ListItemContent>Brendan Lim</ListItemContent>
        </ListItem>
      </List>
    ),
    code:
`<List style={ { maxWidth: 360 } }>
  <ListItem>
    <ListItemAvatar src="img/avatar1.jpg" />
    <ListItemContent>Brendan Lim</ListItemContent>
  </ListItem>
  <Subheader inset>Work</Subheader>
  <ListItem>
    <ListItemAvatar src="img/avatar1.jpg" />
    <ListItemContent>Brendan Lim</ListItemContent>
  </ListItem>
</List>`
  },
  {
    label: 'Dense',
    demo: (
      <List dense>
        <ListItem>
          <ListItemIcon materialIcon="&#xe88a;" />
          <ListItemContent>Home</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemIcon materialIcon="&#xe871;" />
          <ListItemContent>Dashboard</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemIcon materialIcon="" />
          <ListItemContent>Inbox</ListItemContent>
        </ListItem>
      </List>
    ),
    code:
`<List dense>
  <ListItem>
    <ListItemIcon materialIcon="&#xe88a;" />
    <ListItemContent>Home</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemIcon materialIcon="&#xe871;" />
    <ListItemContent>Dashboard</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemIcon materialIcon="" />
    <ListItemContent>Inbox</ListItemContent>
  </ListItem>
</List>`
  },
  {
    label: 'Active',
    demo: (
      <List>
        <ListItem active>Home</ListItem>
        <ListItem>Dashboard</ListItem>
      </List>
    ),
    code:
`<List>
  <ListItem active>Home</ListItem>
  <ListItem>Dashboard</ListItem>
</List>`
  }
];

export default examples;
