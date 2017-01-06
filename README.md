[![Build Status][travis_img]][travis_site]
[![NPM Package][npm_img]][npm_site]
[![Dependency status][david_img]][david_site]
[![devDependency status][david_dev_img]][david_dev_site]

# react-mdui #

[MDUI][mdui] in ReactJS.

## Demo ##

[Demo][demo] is a preview rendered with react-mdui components.

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
[Button]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Button.md
[Chip]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Chip.md
[Icon]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Icon.md
[Panel]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Panel.md
[Slider]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Slider.md

[demo]: https://szchenghuang.github.io/react-mdui/

[travis_img]: https://travis-ci.org/szchenghuang/react-mdui.svg?branch=master
[travis_site]: https://travis-ci.org/szchenghuang/react-mdui
[npm_img]: https://img.shields.io/npm/v/react-mdui.svg
[npm_site]: https://www.npmjs.org/package/react-mdui
[david_img]: https://david-dm.org/szchenghuang/react-mdui/status.svg
[david_site]: https://david-dm.org/szchenghuang/react-mdui/
[david_dev_img]: https://david-dm.org/szchenghuang/react-mdui/dev-status.svg
[david_dev_site]: https://david-dm.org/szchenghuang/react-mdui/?type=dev
