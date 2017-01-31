## Props ##

### Tab ###

Name       | Type   | Default | Description
-----------|--------|---------|-------------
style      | object |         | `style` attribute for the root element
className  | string |         | `class` attribute for the root element
children   | node   |         | child elements
trigger    | string | 'click' | 'click': switch by clicking; 'hover': switch by hovering
loop       | any    | false   | enable cyclic switch
scrollable | any    | false   | ability to scroll the tabs
centered   | any    | false   | center the tabs
fullWidth  | any    | false   | set the witdh to 100%

### TabItem ###

Name     | Type   | Default | Description
---------|--------|---------|-------------
children | node   |         | body of a tab
id       | string | false   | an unique id of a tab
icon     | node   |         | icon on the header of a tab
label    | string |         | string on the header of a tab
ripple   | any    | true    | ripple effect
active   | any    |         | activate a tab
