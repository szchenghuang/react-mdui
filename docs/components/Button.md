## Usage ##

```sh
import { Button } from 'react-mdui';

const button = (
  <Button
    node="button"
    type="raised"
    block
    ripple
    disabled
  >
    Click Me!
  </Button>
);
```

## Props ##

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements
node      | string <br> `['a'|'button'|'input']`   | 'a'    | Element to render the button
flat      | any    | true    | a flat button
raised    | any    |         | a raised button
icon      | any    |         | an icon button
block     | any    |         | set `width` to `100%` and `display` to `block`
ripple    | any    |         | ripple effect
disabled  | any    |         | disable this button
onClick   | func   |         | callback on mouse clicks
