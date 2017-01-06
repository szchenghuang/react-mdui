## Usage ##

```sh
import { Slider } from 'react-mdui';

const Slider = (
  <Slider
    right
    discrete
    step={ 2 }
    min={ 10 }
    max={ 20 }
    value={ this.state.value }
    onChange={ value => this.setState( { value } ) } />
);

```

## Props ##

Name      | Type   | Default | Description
----------|--------|---------|-------------
style     | object |         | `style` attribute for the root element
className | string |         | `class` attribute for the root element
discrete  | any    |         | display a tooltip when dragging
step      | number | 1       | increment/decrement step
min       | number | 0       | min value
max       | number | 100     | max value
value     | number | 0       | the controlled value
onChange  | func   |         | callback when value changes
