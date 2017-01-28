## Props ##

### Slider ###

Name         | Type   | Default | Description
-------------|--------|---------|-------------
style        | object |         | `style` attribute for the root element
className    | string |         | `class` attribute for the root element
step         | number | 1       | increment/decrement step
min          | number | 0       | min value, [0, max)
max          | number | 100     | max value, (min, 100]
value        | number |         | the controlled value
discrete     | any    | false   | a discrete slider; continuous by default
disabled     | any    | false   | a disabled slider; enabled by default
onChange     | func   |         | callback when value changes
