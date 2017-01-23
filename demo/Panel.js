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
  Button,
  Panel, PanelItem, PanelItemActions, PanelItemArrow,
  PanelItemBody,
  PanelItemHeader, PanelItemSummary, PanelItemTitle
} from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: 'Default',
    demo: (
      <Panel>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Trip name</PanelItemTitle>
            <PanelItemSummary>Carribean cruise</PanelItemSummary>
            <PanelItemArrow />
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
            <PanelItemActions>
              <Button>Cancel</Button>
              <Button>Save</Button>
            </PanelItemActions>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Location</PanelItemTitle>
            <PanelItemArrow />
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
            <PanelItemActions>
              <Button>Cancel</Button>
              <Button>Save</Button>
            </PanelItemActions>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Start and end dates</PanelItemTitle>
            <PanelItemSummary>Start date: Feb 29, 2016</PanelItemSummary>
            <PanelItemSummary>End date: Not set</PanelItemSummary>
            <PanelItemArrow />
          </PanelItemHeader>
          <PanelItemBody>
            <p>Third content</p>
            <p>Third content</p>
            <p>Third content</p>
            <PanelItemActions>
              <Button>Cancel</Button>
              <Button>Save</Button>
            </PanelItemActions>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    ),
    code:
`<Panel>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Trip name</PanelItemTitle>
      <PanelItemSummary>Carribean cruise</PanelItemSummary>
      <PanelItemArrow />
    </PanelItemHeader>
    <PanelItemBody>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <PanelItemActions>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </PanelItemActions>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Location</PanelItemTitle>
      <PanelItemArrow />
    </PanelItemHeader>
    <PanelItemBody>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <PanelItemActions>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </PanelItemActions>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Start and end dates</PanelItemTitle>
      <PanelItemSummary>Start date: Feb 29, 2016</PanelItemSummary>
      <PanelItemSummary>End date: Not set</PanelItemSummary>
      <PanelItemArrow />
    </PanelItemHeader>
    <PanelItemBody>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <PanelItemActions>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </PanelItemActions>
    </PanelItemBody>
  </PanelItem>
</Panel>`
  },
  {
    label: 'Default open',
    demo: (
      <Panel>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>First</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem defaultOpen>
          <PanelItemHeader>
            <PanelItemTitle>Second</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Third</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Third content</p>
            <p>Third content</p>
            <p>Third content</p>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    ),
    code:
`<Panel>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>First</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem defaultOpen>
    <PanelItemHeader>
      <PanelItemTitle>Second</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Third</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </PanelItemBody>
  </PanelItem>
</Panel>`
  },
  {
    label: 'Galpess',
    demo: (
      <Panel gapless>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>First</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Second</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Third</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Third content</p>
            <p>Third content</p>
            <p>Third content</p>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    ),
    code:
`<Panel gapless>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>First</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem defaultOpen>
    <PanelItemHeader>
      <PanelItemTitle>Second</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Third</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </PanelItemBody>
  </PanelItem>
</Panel>`
  },
  {
    label: 'Popout',
    demo: (
      <Panel popout>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>First</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Second</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Third</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Third content</p>
            <p>Third content</p>
            <p>Third content</p>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    ),
    code:
`<Panel popout>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>First</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem defaultOpen>
    <PanelItemHeader>
      <PanelItemTitle>Second</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Third</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </PanelItemBody>
  </PanelItem>
</Panel>`
  },
  {
    label: 'Nested',
    demo: (
      <Panel>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>First</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
            <Panel>
              <PanelItem>
                <PanelItemHeader>
                  <PanelItemTitle>First</PanelItemTitle>
                </PanelItemHeader>
                <PanelItemBody>
                  <p>First content</p>
                  <p>First content</p>
                  <p>First content</p>
                  <Panel>
                    <PanelItem>
                      <PanelItemHeader>
                        <PanelItemTitle>First</PanelItemTitle>
                      </PanelItemHeader>
                      <PanelItemBody>
                        <p>First content</p>
                        <p>First content</p>
                        <p>First content</p>
                      </PanelItemBody>
                    </PanelItem>
                    <PanelItem>
                      <PanelItemHeader>
                        <PanelItemTitle>Second</PanelItemTitle>
                      </PanelItemHeader>
                      <PanelItemBody>
                        <p>Second content</p>
                        <p>Second content</p>
                        <p>Second content</p>
                      </PanelItemBody>
                    </PanelItem>
                  </Panel>
                </PanelItemBody>
              </PanelItem>
              <PanelItem>
                <PanelItemHeader>
                  <PanelItemTitle>Second</PanelItemTitle>
                </PanelItemHeader>
                <PanelItemBody>
                  <p>Second content</p>
                  <p>Second content</p>
                  <p>Second content</p>
                </PanelItemBody>
              </PanelItem>
            </Panel>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Second</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Third</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Third content</p>
            <p>Third content</p>
            <p>Third content</p>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    ),
    code:
`<Panel>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>First</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <Panel>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>First</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
            <Panel>
              <PanelItem>
                <PanelItemHeader>
                  <PanelItemTitle>First</PanelItemTitle>
                </PanelItemHeader>
                <PanelItemBody>
                  <p>First content</p>
                  <p>First content</p>
                  <p>First content</p>
                </PanelItemBody>
              </PanelItem>
              <PanelItem>
                <PanelItemHeader>
                  <PanelItemTitle>Second</PanelItemTitle>
                </PanelItemHeader>
                <PanelItemBody>
                  <p>Second content</p>
                  <p>Second content</p>
                  <p>Second content</p>
                </PanelItemBody>
              </PanelItem>
            </Panel>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Second</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Second</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Third</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </PanelItemBody>
  </PanelItem>
</Panel>`
  },
  {
    label: 'Accordion',
    demo: (
      <Panel accordion>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>First</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>
          </PanelItemBody>
        </PanelItem>
        <PanelItem>
          <PanelItemHeader>
            <PanelItemTitle>Second</PanelItemTitle>
          </PanelItemHeader>
          <PanelItemBody>
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </PanelItemBody>
        </PanelItem>
      </Panel>
    ),
    code:
`<Panel accordion>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>First</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </PanelItemBody>
  </PanelItem>
  <PanelItem>
    <PanelItemHeader>
      <PanelItemTitle>Second</PanelItemTitle>
    </PanelItemHeader>
    <PanelItemBody>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </PanelItemBody>
  </PanelItem>
</Panel>`
  }
];

export default examples;
