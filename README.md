[![NPM Package](https://img.shields.io/npm/v/react-mdui.svg)](https://www.npmjs.org/package/react-mdui)
[![Dependency status](https://david-dm.org/szchenghuang/react-mdui/status.svg)](https://david-dm.org/szchenghuang/react-mdui/)
[![devDependency status](https://david-dm.org/szchenghuang/react-mdui/dev-status.svg)](https://david-dm.org/szchenghuang/react-mdui/?type=dev)

# react-mdui #

[MDUI][mdui] in ReactJS.

## Install ##

```sh
npm install react-mdui --save
```

## Usage ##

Take `Button` for example:

```sh
import Button from 'react-mdui/Button';
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

## Components ##
Below is a list of available components. Each of them can be imported by either
default import of named import for flexibility, namely

```sh
import { Button } from 'react-mdui';
import Button from 'react-mdui/Button';
```

* [Button][Button]
* [Chip][Chip]
* [Icon][Icon]
* [Panel][Panel]
* [Slider][Slider]

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-mdui/blob/master/LICENSE.md) for details.

[mdui]: https://github.com/zdhxiong/mdui
[Button]: https://github.com/szchenghuang/react-mdui/blob/master/docs/components/Button.md
[Chip]: https://github.com/szchenghuang/react-mdui/blob/master/docs/components/Chip.md
[Icon]: https://github.com/szchenghuang/react-mdui/blob/master/docs/components/Icon.md
[Panel]: https://github.com/szchenghuang/react-mdui/blob/master/docs/components/Panel.md
[Slider]: https://github.com/szchenghuang/react-mdui/blob/master/docs/components/Slider.md
