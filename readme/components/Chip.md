## Usage ##

```sh
import { Chip } from 'react-mdui';

const Chip = (
  <Chip
    icon={ <Icon materialIcon="&#xe87c;" /> }
    title="Click Me"
    delete
    onClickDelete={ function() { console.log( 'delete' ) } }
  >
    Click Me!
  </Chip>
);
```

## Props ##

Name           | Type   | Default | Description
---------------|--------|---------|-------------
style          | object |         | `style` attribute for the root element
className      | string |         | `class` attribute for the root element
styleTitle     | object |         | `style` attribute for the title element
classNameTitle | string |         | `class` attribute for the title element
icon           | node   |         | include an icon
title          | string |         | include the text label
delete         | any    |         | include the delete button
onClickDelete  | func   |         | callback when the delete button is clicked
