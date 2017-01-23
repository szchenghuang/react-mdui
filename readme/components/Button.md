## Usage ##

See the demo.

## Props ##

### Button ###

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements
node      | string <br> `['a'|'button'|'input']`   | 'button'    | DOM element to render the button
flat      | any    | true    | a flat button
raised    | any    | false   | a raised button
icon      | any    | false   | an icon button
block     | any    | false   | set `width` to `100%` and `display` to `block`
ripple    | any    | true    | ripple effect
disabled  | any    | false   | disable this button
onClick   | func   |         | callback on mouse clicks
