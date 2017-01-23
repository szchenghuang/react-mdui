## Usage ##

See the demo.

## Props ##

### Collapse ###

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements
accordion | any    | false   | open one item at a time

### CollapseItem ###

Name        | Type   | Default | Description
------------|--------|---------|-------------
style       | object |         | `style` attribute for the root element
className   | string |         | `class` attribute for the root element
children    | node   |         | child elements
defaultOpen | any    | false   | initially open
onToggle    | any    |         | callback when item is toggled

### CollapseItemArrow ###

Name         | Type   | Default   | Description
-------------|--------|-----------|-------------
style        | object |           | `style` attribute for the root element
className    | string |           | `class` attribute for the root element
children     | node   |           | child elements
materialIcon | string | &#0xe313; | Material icon to render

### CollapseItemBody ###

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements
ripple    | any    | true    | ripple effect

### CollapseItemHeader ###

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
children  | node   |         | child elements
ripple    | any    | true    | ripple effect
