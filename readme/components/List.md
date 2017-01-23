## Usage ##

See the demo.

## Props ##

### List ###

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements
dense     | any    | false   | dense spacing

### ListItem ###

Name        | Type   | Default | Description
------------|--------|---------|-------------
style       | object |         | `style` attribute for the root element
className   | string |         | `class` attribute for the root element
children    | node   |         | child elements
href        | string |         | hyperlinked
active      | any    | false   | active style
ripple      | any    | true    | ripple effect

### ListItemAvatar ###

Name         | Type   | Default   | Description
-------------|--------|-----------|-------------
style        | object |           | `style` attribute for the root element
className    | string |           | `class` attribute for the root element
children     | node   |           | child elements
src          | string |           | link to render an image icon
materialIcon | string |           | a Material icon to render

### ListItemContent ###

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements

### ListItemIcon ###

Name         | Type   | Default | Description
-------------|--------|---------|-------------
styl   e     | object |         | `style` attribute for the root element
className    | string |         | `class` attribute for the root element
children     | node   |         | child elements
materialIcon | string |         | a Material icon to render if no children

### ListItemText ###

Name       | Type   | Default | Description
-----------|--------|---------|-------------
style      | object |         | `style` attribute for the root element
className  | string |         | `class` attribute for the root element
children   | node   |         | child elements
oneLine    | any    | false   | limit the content to 1 line maximally
twoLines   | any    | false   | limit the content to 2 line2 maximally
threeLines | any    | false   | limit the content to 3 line3 maximally

### ListItemTitle ###

Name       | Type   | Default | Description
-----------|--------|---------|-------------
style      | object |         | `style` attribute for the root element
className  | string |         | `class` attribute for the root element
children   | node   |         | child elements
oneLine    | any    | false   | limit the content to 1 line maximally
twoLines   | any    | false   | limit the content to 2 line2 maximally
threeLines | any    | false   | limit the content to 3 line3 maximally
