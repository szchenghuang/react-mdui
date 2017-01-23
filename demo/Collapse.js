'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import {
  Collapse, CollapseItem, CollapseItemArrow, CollapseItemHeader, CollapseItemBody,
  List, ListItem, ListItemIcon, ListItemContent
} from '../';

const examples = [
  {
    label: 'Basic',
    demo: (
      <Collapse>
        <CollapseItem>
          <CollapseItemHeader>
            <p>
              <a href="javascript:;">
                item 1
              </a>
            </p>
          </CollapseItemHeader>
          <CollapseItemBody>
            <p>item1 content</p>
            <p>item1 content</p>
            <p>item1 content</p>
            <Collapse>
              <CollapseItem>
                <CollapseItemHeader>
                  <p>
                    <a href="javascript:;">
                      subitem 1
                    </a>
                  </p>
                </CollapseItemHeader>
                <CollapseItemBody>
                  <p>subitem1 content</p>
                  <p>subitem1 content</p>
                  <p>subitem1 content</p>
                </CollapseItemBody>
              </CollapseItem>
            </Collapse>
          </CollapseItemBody>
        </CollapseItem>
        <CollapseItem defaultOpen>
          <CollapseItemHeader>
            <p>
              <a href="javascript:;">
                item 2
              </a>
            </p>
          </CollapseItemHeader>
          <CollapseItemBody>
            <p>item2 content</p>
            <p>item2 content</p>
            <p>item2 content</p>
          </CollapseItemBody>
        </CollapseItem>
      </Collapse>
    ),
    code:
`<Collapse>
  <CollapseItem>
    <CollapseItemHeader>
      <p>
        <a href="javascript:;">
          item 1
        </a>
      </p>
    </CollapseItemHeader>
    <CollapseItemBody>
      <p>item1 content</p>
      <p>item1 content</p>
      <p>item1 content</p>
      <Collapse>
        <CollapseItem>
          <CollapseItemHeader>
            <p>
              <a href="javascript:;">
                subitem 1
              </a>
            </p>
          </CollapseItemHeader>
          <CollapseItemBody>
            <p>subitem1 content</p>
            <p>subitem1 content</p>
            <p>subitem1 content</p>
          </CollapseItemBody>
        </CollapseItem>
      </Collapse>
    </CollapseItemBody>
  </CollapseItem>
  <CollapseItem defaultOpen>
    <CollapseItemHeader>
      <p>
        <a href="javascript:;">
          item 2
        </a>
      </p>
    </CollapseItemHeader>
    <CollapseItemBody>
      <p>item2 content</p>
      <p>item2 content</p>
      <p>item2 content</p>
    </CollapseItemBody>
  </CollapseItem>
</Collapse>`
  },
  {
    label: 'Rich',
    demo: (
      <Collapse>
        <CollapseItem>
          <CollapseItemHeader>
            <List>
              <ListItem>
                <ListItemIcon materialIcon="&#xe88a;" />
                <ListItemContent>Home</ListItemContent>
              </ListItem>
            </List>
          </CollapseItemHeader>
        </CollapseItem>
        <CollapseItem defaultOpen>
          <CollapseItemHeader>
            <List>
              <ListItem>
                <ListItemIcon materialIcon="&#xe7fb;" />
                <ListItemContent>Audience</ListItemContent>
                <CollapseItemArrow />
              </ListItem>
            </List>
          </CollapseItemHeader>
          <CollapseItemBody>
            <List>
              <ListItem ripple>Overview</ListItem>
              <ListItem ripple>Language</ListItem>
              <ListItem ripple>Location</ListItem>
            </List>
          </CollapseItemBody>
        </CollapseItem>
      </Collapse>
    ),
    code:
`<Collapse>
  <CollapseItem>
    <CollapseItemHeader>
      <List>
        <ListItem>
          <ListItemIcon materialIcon="&#xe88a;" />
          <ListItemContent>Home</ListItemContent>
        </ListItem>
      </List>
    </CollapseItemHeader>
  </CollapseItem>
  <CollapseItem defaultOpen>
    <CollapseItemHeader>
      <List>
        <ListItem>
          <ListItemIcon materialIcon="&#xe7fb;" />
          <ListItemContent>Audience</ListItemContent>
          <CollapseItemArrow />
        </ListItem>
      </List>
    </CollapseItemHeader>
    <CollapseItemBody>
      <List>
        <ListItem ripple>Overview</ListItem>
        <ListItem ripple>Language</ListItem>
        <ListItem ripple>Location</ListItem>
      </List>
    </CollapseItemBody>
  </CollapseItem>
</Collapse>`
  }
];

export default examples;
